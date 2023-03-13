import React, { useRef, useState } from "react"
// reactstrap components
import {
  Container,
  Col,
  Row
} from "reactstrap";

// core components
import LoginNavbar from "components/Navbars/LoginNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";


import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { SignUpForm } from "components/SignUp";
import { SignInGoogle } from "components/SignIn";
import { SignUpLink } from 'components/SignUp';
import { PasswordForgetLink } from 'components/PasswordForget';

function SingUpPage() {



 




  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <LoginNavbar />
      <div className="page-header clear-filter" filter-color="success">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/Gamer-696x464.jpeg") + ")"
          }}
        ></div>
          <div className="page-header clear-filter">
          <Container>
            <Row>
            <Col className="ml-auto mr-auto" md="5">
            <Card className="bg-transparent">
               <Card.Body>
               <h2 className="text-center  mb-4">Log In</h2>
           <SignUpForm /> 
           <h2 className="text-center  mb-4">Or</h2>
           <div width="500" height="200">
           <SignInGoogle  />
          
           </div>
               </Card.Body>
             </Card>
            </Col>
        </Row>
        </Container>

        </div>
        </div>
          <div className="footer clear-filter">

            <TransparentFooter/>
          </div>

      
    </>
  );
}

export default SingUpPage;