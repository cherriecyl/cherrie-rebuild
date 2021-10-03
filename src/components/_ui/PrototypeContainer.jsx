import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from 'gatsby-image'


const PrototypeWrap = styled("div")`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    div {
        max-width: 300px;
        width: 100%;
    }
    &.bottomOverlap {
        margin-bottom: -12vw;
    }
    &.heroOverlap {
        margin-bottom: -400px;
    }
    &.smaller {
        div {
            max-width: 220px;
        }
    }
`

const PrototypeVideoContainer = styled("div")`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    div {
        video {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 93%;
            height: auto;
        }
    }
    .screenshot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 93%;
        height: auto;
    }
`

const PrototypeContainer = ({ className, device, prototype, video, background }) => {
    return (
    <PrototypeWrap className={`${className}`}>
        <Img 
            fluid={device.localFile.childImageSharp.fluid} 
            objectFit="cover"
            objectPosition="50% 50%"
        />
        <PrototypeVideoContainer>
            { `${prototype}` == "video" ? 
                <div>
                    {`${className}`.includes("heroOverlap") ? 
                    <video poster={background.url} width="360" height="640" muted controls autoPlay loop> 
                        <source src={video.url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    :
                    <video poster={background.url} width="360" height="640" muted controls>
                        <source src={video.url} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video> }
                </div>
                :
                <div className="screenshot">
                    <Img fluid={background.localFile.childImageSharp.fluid} alt={background.alt}/>
                </div>
            }
        </PrototypeVideoContainer>

    </PrototypeWrap>
    );
  };


PrototypeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrototypeContainer;