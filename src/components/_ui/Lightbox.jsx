import React, { useState } from 'react';
import styled from "@emotion/styled";
import { DialogContent, DialogOverlay } from '@reach/dialog';
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css"
import PropTypes from "prop-types";
import ImgWithCaption from './ImgWithCaption';

const PreviewButton = styled("button")`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    &:hover {
        color: ${(props) => props.theme.colors.grey900};
        cursor: pointer;
        figure > div > div {
            transform: scale(1.1);
            transition: transform 200ms ease-in-out;
            &:before {
                opacity: 0.7;
                transition: all 150ms ease-in-out;
            }
        }
    }
    width: 100%;
    height: 100%;
    figure {
        height: 100%;
    }
    figure > div > div {
        &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 2;
            background: ${(props) => props.theme.colors.grey500};
            mix-blend-mode: multiply;
            opacity: 0;
            transition: all 150ms ease-in-out;
        }
    }
`

const LightboxDialogContent = styled(DialogContent)`
    padding: 0em;
    background: none;
    figure > div {
        background: white;
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
`

const LightboxDialogOverlay = styled(DialogOverlay)`
    background: rgba(98, 87, 71, 0.9)
`

const Lightbox = ({ boxClass, imgClass, src, alt, showcap }) => {
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
            <PreviewButton type="button" onClick={open}>
                <ImgWithCaption src={src} className={imgClass} alt={alt} showcap={showcap} />
            </PreviewButton>
            
            <LightboxDialogOverlay isOpen={showDialog} onDismiss={close}>     
                <LightboxDialogContent allowPinchZoom={true} onLoad={unfocus}> 
                    <div>
                        <button id="button" onClick={close}>
                            <VisuallyHidden>Close</VisuallyHidden>
                            <span aria-hidden>×</span>
                        </button>
                    </div>
                    <ImgWithCaption src={src} alt={alt} showcap={showcap} />       
                </LightboxDialogContent>     
            </LightboxDialogOverlay>    
        </div>    
    );
}


Lightbox.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

export default Lightbox;