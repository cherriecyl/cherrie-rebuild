import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const VideoContainer = styled("figure")`
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
    &.topCaption {
        flex-direction: column-reverse;
    }
`

const VideoWrapper = styled("div")`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    border-radius: 4px;
    overflow: hidden;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const VideoWithCaption = ({ className, src, alt }) => {
    return (
    <VideoContainer className={`${className}`}>
        <VideoWrapper>
            <iframe width="560" height="315" src={src} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </VideoWrapper>
        <figcaption>{alt}</figcaption>
    </VideoContainer>
    );
  };


VideoWithCaption.propTypes = {
    alt: PropTypes.string.isRequired
}

export default VideoWithCaption;