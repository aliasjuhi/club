import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import{
  CardBody,
  CardTitle,
  CardLink,
  Card,
  CardImg,
  UncontrolledTooltip,
  NavbarBrand,
  CardText,
  Button
} from "reactstrap";




function Header() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [collapseOpen, setCollapseOpen] = React.useState(false);

  

  return (
    <>    
       {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <div className="page-header clear-filter" filter-color="zold">
          
        <div id="Header"
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/MWII.png") +  ")"
          }}
          ref={pageHeader}>
        </div>
           <Container>

       <Row className="justify-content-md-center">
          <Col>
        <CardBody >
        <div className="navbar-translate">
            <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-stats"
              style={{ color: "#373636" }}>
             <h4>Player Stats</h4>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-stats">
            <h5>Here you can compare the warzone statistics with other players.</h5>
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Card className="bg-transparent" style={{ width: "15rem" }}  href="#pablo" >
          <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-stats"
              >
           <CardImg   src={require("assets/img/header-img/stats.png")} top></CardImg>
           </NavbarBrand>
          </Card>
        </CardBody>
            </Col>

            <Col>
        <CardBody >
        <div className="navbar-translate">
            <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-esport"
              style={{ color: "#373636" }}>
             <h4>eSport Pc & Console</h4>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-esport">
            <h5>Tournaments for beginners and professionals, with real prizes.</h5>
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          
          <Card className="bg-transparent" style={{ width: "15rem" }}  href="#pablo">
          <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-esport">
           <CardImg   src={require("assets/img/header-img/computer.png")} top></CardImg>
           </NavbarBrand>
          </Card>
        </CardBody>
          </Col>

          <Col>
        <CardBody >
        <div className="navbar-translate">
            <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-training"
              style={{ color: "#373636" }}>
             <h4 >Training with pros  </h4>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-training">
            <h5>Training is very important to be successful. You can prepare for the competitions with professional players.</h5>
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          
          <Card className="bg-transparent" style={{ width: "18rem" }}  href="#pablo">
          <NavbarBrand
              href="/signin"
              target="_blank"
              id="navbar-training">
           <CardImg   src={require("assets/img/header-img/tra.png")} top></CardImg>
           </NavbarBrand>
          </Card>
        </CardBody>
          </Col>
          </Row>

        
          <Row >
          <Col  xs>
        <CardBody>
        <div className="navbar-translate">
            <NavbarBrand
              href="/signin"
              target="_blank"
              >
             <h3 >Join to Club</h3>
            </NavbarBrand>
           
    
          </div>
          <CardLink  style={{ color: "#83BF4A" }}   href="/signin">
              
            <h2 >Join the club and be part of the esports..</h2>
          </CardLink>
        </CardBody>
          </Col>
         

          <Col xs={{ order: 1 }}>
        <CardBody tag="h4">
        <div className="navbar-translate">
            <NavbarBrand
              href="/Home"
              target="_blank"
              id="navbar-stats">
             <h4 >Player Stats</h4>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-stats">
            <h5>Here you can compare the warzone statistics with other players.</h5>
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <CardLink  style={{ color: "#373636" }}  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("Stats")
                      .scrollIntoView();
                  }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardLink>
        </CardBody>
          </Col>
          
        </Row>
        </Container>
           

         </div>
    </>
  );
}

export default Header;