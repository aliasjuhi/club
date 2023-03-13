
import React, { useState, useEffect } from "react";
import StatsBRCard from "./StatsBRCard";
import API from "../util/API";

import {
  Button,
  ModalBody,
  Card,
  Input,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Spinner,
  Container,
  Modal

 } from "reactstrap";


function Stati() {

    const [modal1, setModal1] = React.useState(false);

    const [DataState, setDataState] = useState([]);
    const [Stats, setStats] = useState(false);
    
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

   
   
    async function fetchUserStats(user, platform) {
      setLoading(true);

      const data = await API.getPlayerStats (user, platform);
      
      //stops code if api does not return user
      if(data.error){
        console.log('error user not found')
        return
      }
      if (!Stats) {
        setLoading(false);
        setDataState(data);
        setStats(true);
      }

       if (!error) {
        setError(error);
      console.log(error);
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

     

    return (
      <>
      
     <Container>  
      <form onSubmit={handleFormSubmit}>
        <div>
        <h3>
           Warzone detailed player stats: ex. Sweetflying#1559
        </h3>
        <div>
        <Input
            
            aria-label="text"
            rows="6"
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
            <option color="success" value="uno">Activision</option>
            <option value="uno">Playstation</option>
            <option value="uno">Xbox</option>
          </Input>
        </FormGroup>
        </div>
              <Button
                type='submit'
                color="success"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
                {loading && <Spinner className="text-center" color="primary" /> }
                Submit
              </Button>

              <Modal className="modal-lg" isOpen={modal1} toggle={() => setModal1(false)}>
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
                   
                {Stats && <StatsBRCard data={DataState}   />}
                {Stats && <p>{error}</p>}

         

                      
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
      
    </form>
</Container>
</>
   
    );
  }
  
  
  export default Stati;
  