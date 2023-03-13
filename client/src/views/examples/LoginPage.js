import React, {useState, useRef} from "react";


import {
  Container, Col} from "reactstrap";
import { Card } from "react-bootstrap"
// core components
import LoginNavbar from "components/Navbars/LoginNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import SignIn  from "components/SignIn";
import { SignInForm } from "components/SignIn";
import { SignInGoogle } from "components/SignIn";
import { SignUpLink } from 'components/SignUp';
import { PasswordForgetLink } from 'components/PasswordForget';





function LoginPage () {



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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/esports.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container >
            <Col className="ml-auto mr-auto" md="5">
            <Card className="bg-transparent" >
            <Card.Body>

          <h2 className="text-center  mb-4">Log In</h2>
           <SignInForm /> 
           <h2 className="text-center  mb-4">Or</h2>
           <div width="500" height="200">
           <SignInGoogle  />
           <PasswordForgetLink />
           <SignUpLink />
           </div>
        </Card.Body>
           </Card>
            </Col>
          </Container>
        </div>
      </div>
    <div className="footer clear-filter">
      <TransparentFooter/>
    </div>
    </>
  );
}

export default LoginPage;
