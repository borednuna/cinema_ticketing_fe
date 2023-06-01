import React, { useState } from 'react';
import './Slider.scss';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

import Conan from '../img/Detective-Conan_Slide-Banner.jpg';
import gotg from '../img/gotg3.jpeg';
import FastX from '../img/fast-x-banner.jpg';
import LittleMermaid from '../img/little_mermaid.jpg';
import Spiderman from '../img/spiderman.jpg';

register();

const Slider = (props) => {
  const [imageArray, setImageArray] = useState([]);
  const swiperElRef = useRef(null);

  useEffect(() => {
    // setImageArray(props.props);
  }, [props.props]);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      // eslint-disable-next-line
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <div className="gallery">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        loop="true"
        className="my-swiper"
        autoplay="true"
      >
        {/* {imageArray.map((image, index) => {
          return (
            <swiper-slide key={index}>
              <img src={image.url} alt={image.id} />
            </swiper-slide>
          );
        })} */}
        <swiper-slide>
            <img src={Conan} alt='Detective Conan' />
        </swiper-slide>
        <swiper-slide>
            <img src={gotg} alt='Guardians of the Galaxy' />
        </swiper-slide>
        <swiper-slide>
            <img src={FastX} alt='Fast and Furious' />
        </swiper-slide>
        <swiper-slide>
            <img src={LittleMermaid} alt='Little Mermaid' />
        </swiper-slide>
        <swiper-slide>
            <img src={Spiderman} alt='Spiderman' />
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Slider;
