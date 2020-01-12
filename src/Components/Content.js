import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Content extends React.Component{
    render(){
        return(
            <div>
                <div id = "small-window">
                    <div class="row">
                        <div class="column" id = "column-one">
                            <h5 id="Heading">Cyber Savings</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column"  id = "column-two">
                            <h5 id="Heading">New Arrivals</h5>
                            <p>Some text..</p>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="column"  id = "column-three">
                            <h5 id="Heading">Tops</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-four">
                            <h5 id="Heading">Women Jeans</h5>
                            <p>Some text..</p>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="column" id = "column-five">
                            <h5 id="Heading">Workwear</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-six">
                            <h5 id="Heading">Dresses</h5>
                            <p>Some text..</p>
                        </div>
                    </div>
                </div>
  
                <div id = "medium-window">
                    <div class="row">
                        <div class="column" id = "column-one">
                            <h5 id="Heading">Cyber Savings m</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column"  id = "column-two">
                            <h5 id="Heading" >New Arrivals</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column"  id = "column-three">
                            <h5 id="Heading">Tops</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-four">
                            <h5 id="Heading">Women Jeans</h5>
                            <p>Some text..</p>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="column" id = "column-five">
                            <h5 id="Heading">Workwear</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-six">
                            <h5 id="Heading">Dresses</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-seven">
                            <h5 id="Heading">Linen</h5>
                            <p>Some text..</p>
                        </div>
                        <div class="column" id = "column-eight">
                            <h5 id="Heading">Blah</h5>
                            <p>Some text..</p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}