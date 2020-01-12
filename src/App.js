import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderNotice from './Components/HeaderNotice'; 
import Header from './Components/Header';
import './index.css';
import 'bootstrap/dist/js/bootstrap.js';
import Content from './Components/Content';
import Footer from './Components/Footer';
import SlideView from './Components/SlideView';

function App() {
  return (
    <div className="App">
       <HeaderNotice></HeaderNotice>
       <Header></Header>
       <SlideView></SlideView>
       <br/>
       <Content></Content>
       <Footer></Footer>
    </div>


  );
}

export default App;
