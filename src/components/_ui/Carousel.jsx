import React, { useState } from 'react';
// import styled from "@emotion/styled";
// import PropTypes from "prop-types";
// import ImgWithCaption from './ImgWithCaption';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class MyCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          (<img src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />),
          (<img src="https://images.unsplash.com/photo-1633190223932-107ab48257b2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />),
          (<img src="https://images.unsplash.com/photo-1633285718604-11e91bc5b126?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />),
        ],
      }
      this.onchange = this.onchange.bind(this);
    }
  
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div>
        <Carousel
          plugins={['arrows']}
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
      );
    }
  }

// Carousel.propTypes = {
//     // alt: PropTypes.string.isRequired,
//     // className: PropTypes.string.isRequired
// }

export default MyCarousel;