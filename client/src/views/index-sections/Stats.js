import React from "react";

import {
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Col,
 
} from "reactstrap";
import PlayerFind from "../../search/PlayerFind";
import StatiBR from "statisztika/StatiBR";
import MatchesFind from "../../statisztika/matches/MatchesFind";

function Stats() {
 
  const [iconPills, setIconPills] = React.useState("1");
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
      <div className="page-header clear-filter2" filter-color="stats">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/esports.jpg") +  ")"
          }}
          ref={pageHeader}
        ></div>
       

      
        <Container id="Stats">
          <Row>
          <Col className="ml-auto mr-auto" md="15" xl="15">
              <div className="text-center"  >
              <h1 className="h1-seo" >Warzone detailed player stats</h1>
              </div>
              <Card className="bg-transparent" >
                <CardHeader>
                  <Nav data-background-color="zold" className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons tech_controller-modern"></i>
                        Warzone Stats
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        
                        className={iconPills === "4" ? "active" : ""  }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons tech_controller-modern"></i>
                        Search player
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        
                        className={iconPills === "3" ? "active" : ""  }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons tech_controller-modern"></i>
                        Matches
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  
                  <TabContent
                    backgroundColor="info"
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                       <StatiBR/>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                    <PlayerFind/>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                    <MatchesFind/>
                    </TabPane>
                  
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Stats;
