
import React, { useState } from "react";
import StatsRBCard from "./StatsRBCard";

import API from "../util/API";

import {
  Button,
  ModalBody,
  Modal,
  Input,
  FormGroup,
  Label,
 } from "reactstrap";

function Stati() {

    const [p1DataState, setP1DataState] = useState([]);
    const [p1User, setp1User] = useState('');
    const [p1Bool, setp1Bool] = useState(false);


    
    const [p2DataState, setP2DataState] = useState({});
    const [p2Bool, setP2Bool] = useState(false);
    const [p2User, setp2User] = useState('');
  
    async function fetchUserStats(user, platform) {
      const data = await API.getPlayerStats(user, platform);
      //stops code if api does not return user
      if(data.error){
        console.log('error user not found')
        return
      }
      if (!p1Bool) {
        await setP1DataState(data);
           console.log({});
        await setp1User(user);
        setp1Bool(true);
      } else {
        await setP2DataState(data);
        await setp2User(user);
        setP2Bool(true);
      }
    }
    function closeP2() {
      setP2Bool(false);
      setP2DataState({});
      setp2User(false);}


  ////2    
    async function closeP1() {
      if (p2Bool) {
        await setP1DataState(p2DataState);
        await setp1User(p2User);
        closeP2();
      } else {
        setp1Bool(false);
        setP1DataState({});
        setp1User('');
      }
    }

    const [userIDInputState, setIDInputState] = useState();
    const [platformState, setPlatformState] = useState("uno");
    const handleUserIDChange = function(e){
        setIDInputState(e.target.value);
    }
    const handlePlatformChange = function(e){
        setPlatformState(e.target.value);
    }
    const handleFormSubmit = function(e){
        e.preventDefault();
        fetchUserStats(userIDInputState, platformState);
    }

    const [modal1, setModal1] = React.useState(false);
    return (
       
    <form onSubmit={handleFormSubmit}>
        <div>
        <h3 >
           Warzone detailed player stats
        </h3>
        <div>
        <Input
             color="success"
             label="userID"
             type="text" 
             id="userID" 
             placeholder="ex. Sweetflying#1559" 
             onChange={handleUserIDChange} />
        <FormGroup>
          <Label size="lg" className="text-muted" for="exampleSelect" id="platform">Platform</Label>
          
          <Input 
            
            type="select" name="select" 
            labelId="demo-simple-select-label"
            id="platform"
            label="Platform"
            onChange={handlePlatformChange} 
            >
            <option value="uno">Activision</option>
            <option value="uno">Playstation</option>
            <option value="uno">Xbox</option>
          </Input>
        </FormGroup>
        </div>
        <div>
              <Button
                type='submit'
                color="success"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
                Submit
              </Button>
              <Modal class="modal-profile modal-profile-primary" isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header col justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Modal title</h4>
                </div>
                <ModalBody >
                    
                  {p1Bool && <StatsRBCard data={p1DataState} name={p1User} close={closeP1} />}
                  
              
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
         </div>
    </div>
 </form>
   
    );
  }
  
  
  export default Stati;
  