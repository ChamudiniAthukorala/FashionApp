import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TestA extends React.Component{
    openNav(){
        document.getElementById("myNav").style.width = "100%";
    }
    closeNav(){
        document.getElementById("myNav").style.width = "0%";
    }
    render(){
        return(
            <div id = "myNav" class = "overlay">
                 <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <div class="overlay-content">
                        <a href="#">About</a><br/>
                        <a href="#">Services</a><br/>
                        <a href="#">Clients</a><br/>
                        <a href="#">Contact</a>
                    </div>
            </div>
        )
    }
}