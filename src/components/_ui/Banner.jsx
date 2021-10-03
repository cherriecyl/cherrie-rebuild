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
    height: 500px;
    border-radius: 4px;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em -1em 0 ${(props) => props.theme.colors.grey300};
    div {
        margin: 0;
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 500px;
    }
    &.hero {
        margin-top: 4em;
    }
    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        width: 100vw;
        left: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        right: 50%;
        border-radius: 0px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0em 0em 0 ${(props) => props.theme.colors.grey300};
        &.hero {
            height: 300px;
            div {
                width: 100%;
            }
        }
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
        font-family: 'Inter', sans-serif;
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