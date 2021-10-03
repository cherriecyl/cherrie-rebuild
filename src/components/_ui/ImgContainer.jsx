import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from 'gatsby-image';

const ImgContainerWrap = styled("div")`
    border-radius: 4px;
    display: flex;
    position: relative;
    overflow: hidden;
    div {
        width: 100%;
    }
    &.banner {
        align-items: center;
        padding-top: 0em;
        height: 500px;
        width: 100vw;
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        right: 50%;
        div {
            margin: 0;
            max-width: 100%;
            width: 100%;
            height: auto;
            min-height: 500px;
        }
        &.hero {
            height: 400px;
        }
    }
`
const ImgContainer = ({ className, src, alt}) => {
    return (
    <ImgContainerWrap className={`${className}`}>
        <Img fluid={src} alt={`${alt}`}/>
    </ImgContainerWrap>
    );
  };


ImgContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default ImgContainer;