import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserIcon from '../Images/user.png';
import Heart from '../Images/favourite.png';
import Bag from '../Images/bagg.jpg';
import Dresses from './Dresses';

export default class Header extends  React.Component{
    state = {
        isOpen : false,
        isMenOpen : false
    };
    toggleOpen = ()=> this.setState({isOpen : !this.state.isOpen});
    toggleMenOpen = ()=> this.setState({isMenOpen : !this.state.isMenOpen});

    render(){
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        const menuMenClass = `dropdown-menu${this.state.isMenOpen ? " show" : ""}`;

        return(
            <Router>
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark" id="navbar">
                <button class="navbar-toggler" id="navbutton" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button> 
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <input type="text" placeholder="Search.." id="searchbar"/>
                        </li>
                        <br/>
                        <li>
                            <div className="dropdown" onClick={this.toggleOpen}>
                                <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                >
                                Women
                                </button>
                                    <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                    <Link to ="/dresses">Dresses</Link>
                                    <a className="dropdown-item" href="#nogo">
                                        Linen
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Tops
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Jeans
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Trousers
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Shorts
                                    </a>
                                    </div>
                            </div>
                        </li>
                        
                        <br/>
                
                        <li class="nav-item">
                        <div className="dropdown" onClick={this.toggleMenOpen}>
                                <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                >
                                Men
                                </button>
                                    <div className={menuMenClass} aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#nogo">
                                        Item 1
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Item 2
                                    </a>
                                    <a className="dropdown-item" href="#nogo">
                                        Item 3
                                    </a>
                                    </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Workwear</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Party</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Linen</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Jeans</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sales/Offers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
                </nav>
                
            </div>
            <Route path ="/dresses" component={Dresses}/>
            </Router>

            
        )
    }
}
