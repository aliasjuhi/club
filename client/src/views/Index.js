import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Header from "components/Headers/Header.js";
import TransparentFooter from "components/Footers/TransparentFooter";


import Stats from "./index-sections/Stats.js";
import BasicElements from "./index-sections/BasicElements.js";
import Stream from "./index-sections/Stream";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import Esport from "./index-sections/Esport.js";
import Download from "./index-sections/Download.js";
import  PlayerFind  from '../search/PlayerFind';

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <div>
      <IndexNavbar />
      
      <div className="wrapper">
        <Header />
        <div className="main">
          <div>
          <Stats />
          </div>
          </div>
        </div>
       
        
          
        <TransparentFooter />
        </div> 
   
  );
}

export default Index;
