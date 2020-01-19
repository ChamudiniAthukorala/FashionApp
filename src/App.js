import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Hirusha 1 step add routers libraries.
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HeaderNotice from "./Components/HeaderNotice";
import Header from "./Components/Header";
import "./index.css";
import "bootstrap/dist/js/bootstrap.js";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

// function App() {
//   return (
//     <div className="App">
//        <HeaderNotice></HeaderNotice>
//        <Header></Header>
//        <SlideView></SlideView>
//        <br/>
//        <Content></Content>
//        <Footer></Footer>
//     </div>

//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderNotice></HeaderNotice>
        <Header></Header>
        {/* <SlideView></SlideView>
       <br/>
       <Content></Content> */}
        <Switch>
          <Route exact path="/" component={Home} />

          {/* Hirusha step 2 - creating routes with assigning router paths */}

        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
