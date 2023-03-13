
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import API from "../../statisztika/matches/util/API";
import {
  Button,
  Modal,
  ModalBody, 
  Col,
  Card,
  Container,
  Input,
  Form,
 } from "reactstrap";
 var moment = require("moment");



function PlayerFind () {

  
  let timestamp = "1668540987";
  let date_time = moment.unix(timestamp).format("MM/DD/YYYY");

  const [username, setUsername] = useState([]);

  
  async function fetchUserStats(gamer, oldal) {
    const data = await API.getPlayerMatches(gamer, oldal);
    //stops code if api does not return user
    if(data.error){
      console.log('error user not found')
      return
    }
      
     setUsername(data.data.matches);
         console.log(data.data.matches);
  }




   const [modal1, setModal1] = React.useState(false);

 const [userIDInputState, setIDInputState] = useState('');
 const [platformState, setPlatformState] = useState("uno");
 const handleUserIDChange = function(e){
     setIDInputState(e.target.value);
 }
 const handlePlatformChange = function(e){
     setPlatformState(e.target.value);
 }
 const submitHandler = function(e){
     e.preventDefault();
     fetchUserStats(userIDInputState, platformState);
 }

  return (
    <>
    <div className="content">
       <Container>
        <Col className="ml-auto mr-auto" md="10" xl="15">
        
        <h3 color="success">
        Search Matches 
        </h3>
          <Form  onSubmit={submitHandler}>
            <div class="form-group">
            
        <h3>
           Warzone detailed matches: ex. Sweetflying#1559
        </h3>
       
             <Input
              rows="6"
              type="search"
              id="userID"
              class="form-control form-control-lg"
              placeholder="ex. Sweetflying#1559" 
              aria-label="Search"
              onChange={handleUserIDChange}
             />
             </div>

               <div class="form-group">
              <label for="exampleFormControlSelect1">Platform</label>
              <select value="Success" class="form-control form-control-lg" id="exampleFormControlSelect1" type="select"  onChange={handlePlatformChange}>
                <option  value="uno">Activision</option>
                <option  value="psn">Playstation</option>
                <option  value="xbl">Xbox</option>
              </select>
              </div>
            <Button color="primary" onClick={() => setModal1(true)} type="search" variant="outline-success">Search</Button>


              
              <Modal className="modal-lg bg-dark"   isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Call Of Duty players</h4>
                </div>
                <ModalBody>
                {username.map((item) => {
                  return <div className="text-center" >
                     
                 <div className="card-header  bg-dark success"> <h3> {item.mode} </h3></div>
                 <div className="card bg-dark ">
                  <h3 color="text.primary">KD: {item.playerStats.kdRatio}</h3>
                  <h3 color="text.primary">Kills:{item.playerStats.kills}</h3>
                  <h3 color="text.primary">Deaths :{item.playerStats.deaths}</h3>
                  <h3 color="text.primary">Date :{date_time}</h3>
                 </div>
                
                  </div>; })}

               
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              </Form>
         
         </Col>
         </Container>
         </div>
    </>
    );
  }
  
  
  export default PlayerFind;
