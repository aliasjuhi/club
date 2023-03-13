/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container >
      <Row className="justify-content-md-center">
        <Col md="auto">
        
        <nav>
          <ul>
            <li>
              <a
                href="/index"
                target="_blank"
              >
               Terms of Service  
              </a>
            </li>
            <li>
              <a
                href="/index"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/index"
                target="_blank"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
       
        </Col>
        <Col md="auto" className="copyright" id="copyright">
          © {new Date().getFullYear()}, All rights reserved.
        </Col>
        <Col md="auto">
        <h5>BattleClub is not endorsed by, directly affiliated with, maintained or sponsored by Apple Inc, Activision Blizzard, Microsoft, Xbox, Sony, Riot, EA or Playstation. 
          All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.</h5>
        
        </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
