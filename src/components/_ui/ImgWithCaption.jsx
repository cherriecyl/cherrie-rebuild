import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import ImgContainer from './ImgContainer'

const ImgWithCaptionWrap = styled("figure")`
    display: flex;
    flex-direction: column;
    &.stretch {
        div {
            height: 100%;
        }
    }
    margin: 0;
    figcaption {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        color: ${(props) => props.theme.colors.grey700};
        font-size: 0.9em;
        font-family: 'Inter', sans-serif;
    }
    &.centerCaption {
        figcaption {
            text-align: center;
        }
    }
    &.prototypeCaption {
        figcaption {
            margin-top: 1.5em;
        }
    }
    &.topCaption {
        flex-direction: column-reverse;
    }
    &.hero {
        margin-top: 5em;
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em -1em 0 ${(props) => props.theme.colors.grey300};
        border-radius: 4px;
        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0em 0em 0 ${(props) => props.theme.colors.grey300};
            div {
                border-radius: 0px;
            }
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            border-radius: 0px;
            position: relative;
        }
    }
    &.border > div {
        border: 3px solid ${(props) => props.theme.colors.grey200}; 
    }
`

const ImgWithCaption = ({ className, src, alt, showcap }) => {
    return (
    <ImgWithCaptionWrap className={`${className}`}>
        <ImgContainer src={src} alt={alt} />
        {showcap === false ? `` : <figcaption>{alt}</figcaption>}
    </ImgWithCaptionWrap>
    );
  };


ImgWithCaption.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default ImgWithCaption;