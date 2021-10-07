import React, { useState } from 'react';
import styled from "@emotion/styled";
// import PropTypes from "prop-types";
import Lightbox from './Lightbox';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselContainer = styled("div")`
    max-width: 100%;
    .BrainhubCarouselItem > div {
        width: 100%;
        margin: 1em;
    }
    .BrainhubCarousel__arrows {
        background: none;
        span {
            border-color: ${(props) => props.theme.colors.grey700};
        }
        &:hover {
            background-color: ${(props) => props.theme.colors.grey700};
        }
        &:disabled {
            background: none;
            span {
                border-color: ${(props) => props.theme.colors.gray500};
            }
        }
    }
`

const MyCarousel = ({ children, className, plugins, animationSpeed }) => (
    <CarouselContainer className={className}>
        <Carousel plugins={plugins} animationSpeed={animationSpeed}>
            {children}
        </Carousel>
    </CarouselContainer>
  );

// Carousel.propTypes = {
//     // alt: PropTypes.string.isRequired,
//     // className: PropTypes.string.isRequired
// }

export default MyCarousel;