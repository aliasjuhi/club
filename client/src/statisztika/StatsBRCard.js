
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";




import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Navbar,
    UncontrolledCollapse,
  } from "reactstrap";

  import AkAssault from "./fegyverek/AkAssault";

import AllWeapon from "./fegyverek/AllWeapon";


function PlayerStatsCard({data, name}) {

      



    const [iconPills, setIconPills] = React.useState("1");
  
    const {kdRatio, kills, deaths,gamesPlayed, wins, topTen, topFive } = data.data.lifetime.mode.br.properties;

    const [player, setPlayer] = useState([]);

     


    return (

        <>
        <div className="section section-tabs">
          <Container>
          <Navbar className="bg-primary" expand="lg">
         <button
            className="navbar-toggler"
            id="navbarNavDropdown"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
            <Nav navbar>
              <NavItem className="active">
              <NavLink
                          className={iconPills === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconPills("1");
                          }}
                        >
                          <i className="now-ui-icons tech_controller-modern"></i>
                          Battle Royale
                        </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                          className={iconPills === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconPills("2");
                          }}
                        >
                          <i className="now-ui-icons tech_controller-modern"></i>
                          Resurgence 
                        </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                          className={iconPills === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            setIconPills("3");
                          }}
                        >
                          <i className="now-ui-icons tech_controller-modern"></i>
                          Last 10 games 
                          
                        </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  className={iconPills === "4" ? "active" : ""}
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("4");
                  }}
                >
                  Weapons
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <DropdownItem
                  className={iconPills === "5" ? "active" : ""}
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    setIconPills("5");
                  }}
                  >
                    Assault
                  </DropdownItem>
                  <DropdownItem
                    className={iconPills === "6" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setIconPills("6");
                    }}
                  >
                    SMG
                  </DropdownItem>
                  <DropdownItem
                   className={iconPills === "7" ? "active" : ""}
                   href="#pablo"
                   onClick={(e) => {
                     e.preventDefault();
                     setIconPills("7");
                   }}
                  >
                    Sniper
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        
      </Navbar>
            <Row>
              <Col className="ml-auto mr-auto" md="20" xl="20">
                <Card className="bg-transparent">
                 
                  <CardBody>
                    <TabContent
                      className="text-center"
                      activeTab={"iconPills" + iconPills}
                    >
                      <TabPane tabId="iconPills1">
                      <div  className="text-center" >
                      <h3 color="text.primary" variant="h6">{name}</h3>
                      <h3 color="text.primary">KD: {kdRatio}</h3>
                      <h3 color="text.primary">Wins:{wins}</h3>
                      <h3 color="text.primary">Top 5 :{topFive}</h3>
                      <h3 color="text.primary">Top 10 :{topTen}</h3>
                      <h3 color="text.primary">Kills: {kills}</h3>
                      <h3 color="text.primary">Deaths: {deaths}</h3>
                      <h3 color="text.primary">Games Played: {gamesPlayed}</h3>
                      </div>
                      </TabPane>
                      <TabPane tabId="iconPills2">
                     
                       
                     
                        
                      </TabPane>
                      <TabPane tabId="iconPills3">
                      3
                      </TabPane>
                      <TabPane tabId="iconPills4">
                      <Card>
                        <AllWeapon/>
                        </Card>
                      </TabPane>
                      <TabPane tabId="iconPills5">
                        <Card>
                        
                        </Card>
                      </TabPane>
                      <TabPane tabId="iconPills6">
                        <p>
                          6
                        </p>
                      </TabPane>
                      <TabPane tabId="iconPills7">
                        <p>
                          7
                        </p>
                      </TabPane>
                      <TabPane tabId="iconPills8">
                        <p>
                          8
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>
      </>

    )
}

export default PlayerStatsCard



