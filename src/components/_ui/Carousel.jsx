import React, { useState } from 'react';
import styled from "@emotion/styled";
// import PropTypes from "prop-types";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UAParser from "ua-parser-js";

const CarouselWrap = styled("div")`
    max-width: 100%;
    ul > li > div {
        margin-bottom: 1.5em;
    }
    div > ul > li.carousel-item-padding-40-px {
        padding-left: 0.5em;
        padding-right: 0.5em;
    }
`

const MyCarousel = ({ children, className, slides, deviceType }) => {
    const multi = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
        }
      }
      const single = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1,
        }
      }
      const partial = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            partialVisibilityGutter: 400,
          },
          tablet: {
            breakpoint: { max: 1024, min: 600 },
            partialVisibilityGutter: 200,
            items: 1,
          },
          mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
          }
      }
      const types = {
          1: single,
          2: multi,
          1.5: partial,
      };
    return (
        <CarouselWrap className={className}>
            <Carousel
                partialVisible={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={types[slides]}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {children}
            </Carousel>
        </CarouselWrap>
  )};
  MyCarousel.getInitialProps = ({ req }) => {
    let userAgent;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
  };

// Carousel.propTypes = {
//     // className: PropTypes.string.isRequired
// }

export default MyCarousel;