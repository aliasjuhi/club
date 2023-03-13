
import React, { useState } from "react";
import API from "./util/API";
import {
  Button,
  Modal,
  ModalBody, 
  Col,
  Card,
  Container,
  Form,
 } from "reactstrap";



function PlayerFind() {


  const [username, setUsername] = useState([]);
  async function fetchUserStats(player, site) {
    const data = await API.getPlayerSearch(player, site);
    //stops code if api does not return user
    if(data.error){
      console.log('error user not found')
      return
    }
     {
     setUsername(data.data);
         console.log(data.data);
    
    }
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
        
        <h3 className="text-center" color="success">
        Warzone Search  Player: name
        </h3>
          <Form  onSubmit={submitHandler}>
            <div class="form-group">
             <input
              rows="3"
              type="search"
              id="userID"
              class="form-control form-control-lg"
              placeholder="Player name:  ..." 
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


              
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
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
                  return ( <h5 className="text-center">Id: {item.username}"</h5>
                  )
                  })}
                
              
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