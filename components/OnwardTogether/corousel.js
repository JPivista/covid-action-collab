'use client'
import React from 'react'
import Slider from "react-slick";
import { Container, Image } from 'react-bootstrap';


const Corousel = () => {

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        {/* <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/> */}
      </div>
    )
    }

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`} >
        {/* <AiOutlineArrowRight class="arrows" style={{color:"white"}}/> */}
      </div>
    )
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false // Hide arrows on screens with a maximum width of 768 pixels
        }

    
      }
    ]
  };



  return (
    <div className='container0nward mt-4 px-3'>
     <div style={{ border: "2px solid #CBCBCB" }} className='m-0'>
      <Slider {...settings} className='p-lg-3'>
         <div className=''>
          <Image src="/corousel_image_1.png" className='corouselImage' style={{opacity:"0.9"}} />
        </div>
         <div>
           <Image src="/corousel_image_1.png" className='corouselImage'  />
         </div>
         <div>
           <Image src="/corousel_image_1.png" className='corouselImage'  />
         </div>
        <div>
          <Image src="/corousel_image_1.png" className='corouselImage'  />
        </div>
       </Slider>
 </div>
    </div>
  );
}

export default Corousel;
