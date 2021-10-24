import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from 'gatsby-image';

const BannerWrap = styled("div")`
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    padding-top: 0em;
    height: 100%;
    border-radius: 4px;
    div {
        margin: 0;
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 500px;
    }
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    right: 50%;
    }
`

const BannerCaptionWrap = styled("div")`
    display: flex;
    flex-direction: column;
    figcaption {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        color: ${(props) => props.theme.colors.grey700};
        font-size: 0.9em;
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
        text-align:center;
    }
`

const Banner = ({ className, src, alt, showcap, background }) => {
    return (
    <BannerCaptionWrap className={background}>
        <BannerWrap className={`${className}`}>
            <Img fluid={src} objectFit="cover" objectPosition="50% 50%" alt={alt} />
        </BannerWrap>
        {showcap ? <figcaption>{alt}</figcaption> : ``}
    </BannerCaptionWrap>
    );
  };


Banner.propTypes = {
    alt: PropTypes.string.isRequired
}

export default Banner;