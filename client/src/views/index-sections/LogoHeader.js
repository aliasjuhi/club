import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import {
  Button,
} from "reactstrap";
import logo from 'assets/img/LOGO-battleclub.png';
// core components

function LogoHeader() {

  return (
    
     <>
        <div>  
          <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
               <div className="page-header-image">
                <img src={logo} className="App-logo" alt="logo" />
                <Button  className="text-center" color="primary" >
                 Join the BattleClub 
                 </Button>
               </div>
            </Col>
          </Row>
          </Container> 
        </div>
      </>
  );
}

export default LogoHeader;
