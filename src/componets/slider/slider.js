import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='image1'></div>
        <div className='image2'></div>
        <div className='image1'></div>
      </Slider>
    </div>
  );
}
