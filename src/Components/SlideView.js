import React from 'react';
import styled from 'styled-components';
import Banner from '../Images/banner.jpg';
import New from '../Images/new.jpg';
import Sale from '../Images/sale.jpg';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const photos = [
    {
        name : 'Photo 1',
        src : Banner
    },
    {
        name : 'Photo 2',
        src : New  
    },
    {
        name : 'Photo 3',
        src : Sale 
    }
   ]
export default class SlideView extends React.Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            fade : true,
            speed: 500,
            slidesToShow: 1,
            arrows : true,
            slidesToScroll: 1,
            className : "slides"
        }
        return(
            <div className ="Slider">
                {/* /**style={{padding:10}}  */}
               <Slider {...settings}>
                   {photos.map((photo)=>{
                   return(
                       <div>
                           <img width = "100%" src={photo.src}/>
                       </div>
                   )
                   })}
               </Slider>
            </div>
        )
    }
}