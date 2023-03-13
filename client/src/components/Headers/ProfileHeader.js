import React from "react";
import { compose } from 'recompose';
import {AuthUserContext,} from '../Session';

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {




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
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="orange"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/2061093.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <AuthUserContext.Consumer>
         {authUser => (
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          <h3 className="title">{authUser.email}</h3>
          <p className="category">Photographer</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        </Container>
        )}
        </AuthUserContext.Consumer>
      </div>
    </>
  );
}



export default compose(
)(ProfilePageHeader);


