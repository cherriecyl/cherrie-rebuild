import React, { useState } from 'react';
import styled from "@emotion/styled";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css"
import PropTypes from "prop-types";
import ImgWithCaption from './ImgWithCaption';
import ImgContainer from './ImgContainer'

const ImgWithCaptionWrap = styled("figure")`
    display: flex;
    flex-direction: column;
    height: 100%;
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
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
    }
    &.centerCaption {
        figcaption {
            text-align: center;
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
    &.border {
        button > div {
            border: 2px solid ${(props) => props.theme.colors.grey200}; 
        }
    }
    &.altShadow:hover {
        div {
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
            transition: all 250ms ease-in-out;
            transform: translateY(-2px);
            -webkit-transform: translateY(-2px);
        }
    }
`

const PreviewButton = styled("button")`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    &:hover {
        color: ${(props) => props.theme.colors.grey900};
        cursor: zoom-in;
        div > div {
            transform: scale(1.02);
            transition: transform 200ms ease-in-out;
        }
    }
    width: 100%;
    height: 100%;
    figure {
        height: 100%;
    }
`

const LightboxDialogContent = styled(DialogContent)`
    padding: 0em;
    width: 70vw;
    max-width: 1024px;
    background: none;
    figure > div {
        background: white;
    }
    &.clear {
        figure > div {
            background:none;
        }
    }
    figure > figcaption {
        color: white;
        text-align: center;
    }
    div {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        button {
            margin-bottom: 0.5em;
            background: none;
            border: none;
            font-size: 1.5em;
            color: white;
            cursor: pointer;
        }
    }
    @media(max-width: ${(props) => props.theme.maxwidthTablet}) {
        width: 90vw;
    }
`

const LightboxDialogOverlay = styled(DialogOverlay)`
    background: rgba(98, 87, 71, 0.9);
    z-index: 5;
`

const Lightbox = ({ boxClass, imgClass, src, alt, showcap, lbBkg }) => {
    const [showDialog, setShowDialog] = useState(false);  
    const open = (e) => { 
        setShowDialog(true); 
        e.currentTarget.blur();
    }
    const close = (e) => { 
        setShowDialog(false);
        e.currentTarget.blur();
    }
    
    const unfocus = () => {
        let button = document.getElementById('button');
        if (button !== null)
            button.blur();
    }

    return ( 
        <div className={boxClass}>      
            <ImgWithCaptionWrap className={imgClass}>
                <PreviewButton type="button" onClick={open}>
                    <ImgContainer src={src} alt={alt} />
                </PreviewButton>
                {showcap === false ? `` : <figcaption>{alt}</figcaption>}
            </ImgWithCaptionWrap>
    
            
            <LightboxDialogOverlay isOpen={showDialog} onDismiss={close}>     
                <LightboxDialogContent allowPinchZoom={true} onLoad={unfocus} className={lbBkg}> 
                    <div>
                        <button id="button" onClick={close}>
                            <VisuallyHidden>Close</VisuallyHidden>
                            <span aria-hidden>×</span>
                        </button>
                    </div>
                    <ImgWithCaption src={src} alt={alt}/>       
                </LightboxDialogContent>     
            </LightboxDialogOverlay>    
        </div>    
    );
}


Lightbox.propTypes = {
    alt: PropTypes.string.isRequired
}

export default Lightbox;