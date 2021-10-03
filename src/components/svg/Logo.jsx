import React from "react";
import { css } from '@emotion/core';

const Logo = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
        viewBox="-5 0 60 60"
        height="50"
        css={css`
            {
                .TreeLeft {
                    opacity: 1;
                    transform: translateX(0px);
                    -webkit-transform: translateX(0px);
                }
                .TreeRight {
                    opacity: 1;
                    transform: translateX(0px);
                    -webkit-transform: translateX(0px);
                }
                .LamHorizontal {
                    stroke: #177722;
                    stroke-width: 3.5px;
                    transform: translateY(0px) scaleX(1) rotate(0deg);
                    -webkit-transform: translateY(0px) scaleX(1) rotate(0deg);
                }
                .LamHorizontal2 {
                    stroke: #177722;
                    stroke-width: 3.5px;
                    transform: translateY(0px) scaleX(1) rotate(0deg);
                    -webkit-transform: translateY(0px) scaleX(1) rotate(0deg);
                }
                .LamRightVertical {
                    stroke: #177722;
                    stroke-width: 3.55px;
                    transform: translateX(0px);
                    -webkit-transform: translateX(0px);
                }
                .LamLeftVertical {
                    stroke: #177722;
                    stroke-width: 3.5px;
                }
                .LamLeftStroke {
                    stroke: #177722;
                    stroke-width: 3.5px;
                    transform: translateY(0px);
                    -webkit-transform: translateY(0px);
                }
                .LamRightStroke {
                    stroke: #177722;
                    stroke-width: 3.5px;
                    transform: translateY(0px) translateX(0px) scale(1);
                    -webkit-transform: translateY(0px) translateX(0px) scale(1);
                }
                .LamBottomRight {
                    stroke: #177722;
                    stroke-width: 3.5px;
                    transform: translateY(0px) translateX(0px) scaleY(1);
                    -webkit-transform: translateY(0px) translateX(0px) scaleY(1);
                }
                &:hover {
                    .TreeLeft {
                        opacity: 0;
                        transition: all 400ms ease-in-out;
                        -webkit-transition: all 400ms ease-in-out;
                        transform: translateX(-30px);
                        -webkit-transform: translateX(-30px);
                    }
                    .TreeRight {
                        opacity: 0;
                        transition: all 400ms ease-in-out;
                        -webkit-transition: all 400ms ease-in-out;
                        transform: translateX(30px);
                        -webkit-transform: translateX(30px);
                    }
                    .LamHorizontal {
                        stroke: black;
                        stroke-width: 5px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                        transform: translateY(-2px) scaleX(0.8) rotate(-9deg);
                        -webkit-transform: translateY(-2px) scaleX(0.8) rotate(-9deg);
                    }
                    .LamHorizontal2 {
                        stroke: black;
                        stroke-width: 5px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                        transform: translateY(2px) translateX(-2px) scaleX(0.95) rotate(-9deg);
                        -webkit-transform: translateY(2px) translateX(-2px) scaleX(0.95) rotate(-9deg);
                    }
                    .LamRightVertical {
                        stroke: black;
                        stroke-width: 5px;
                        transform: translateX(-1px);
                        -webkit-transform: translateX(-1px);
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                    }
                    .LamLeftVertical {
                        stroke: black;
                        stroke-width: 5px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                    }
                    .LamLeftStroke {
                        stroke: black;
                        stroke-width: 5px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                        transform: translateY(1px);
                        -webkit-transform: translateY(1px);
                    }
                    .LamRightStroke {
                        stroke: black;
                        stroke-width: 6px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                        transform: translateY(2px) translateX(2px) scale(0.8);
                        -webkit-transform: translateY(2px) translateX(2px) scale(0.8);
                    }
                    .LamBottomRight {
                        stroke: black;
                        stroke-width: 5px;
                        transition: all 200ms ease-in-out;
                        -webkit-transition: all 200ms ease-in-out;
                        transform: translateY(0px) translateX(-1px) scaleY(1.1);
                        -webkit-transform: translateY(0px) translateX(-1px) scaleY(1.1);
                    }
                }
            }
        `}
        >
        <path className="TreeLeft" fill="#93d680" d="M19.22 9.7L25.47 19.41L12.97 19.41L0.47 19.41L6.72 9.7L12.97 0L19.22 9.7Z" id="a6LtVmsnj"></path>
        <path className="TreeRight" fill="#93d680" d="M43.27 9.7L49.52 19.41L37.02 19.41L24.52 19.41L30.77 9.7L37.02 0L43.27 9.7Z" id="e1w3aId67i"></path>
        <path className="TreeLeft" fill="#93d680" d="M19.22 29.12L25.47 38.83L12.97 38.83L0.47 38.83L6.72 29.12L12.97 19.41L19.22 29.12Z" id="iGlEcejrd"></path>
        <path className="TreeRight" fill="#93d680" d="M43.27 29.12L49.52 38.83L37.02 38.83L24.52 38.83L30.77 29.12L37.02 19.41L43.27 29.12Z" id="b7A742KZC"></path>
        <path className="LamBottomRight" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M49.52 38.83L37.02 19.41L24.52 38.83" id="b7i29WCr7"></path>
        <path className="LamRightVertical" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M37.02 50L37.02 0" id="aGrQFsmWm"></path>
        <path className="LamHorizontal" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M25.1 19.41L0 19.41" id="baNHyqYBH"></path>
        <path className="LamHorizontal2" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M50 19.41L24.9 19.41" id="baNHyqYBH"></path>
        <path className="LamLeftVertical" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M12.97 50L12.97 0" id="a116lxq2JP"></path>
        <path className="LamLeftStroke" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M12.97 19.41L0.47 38.83" id="iZlqNnxTC"></path>
        <path className="LamRightStroke" opacity="1" fillOpacity="0" stroke="#177722" strokeWidth="3.5" strokeOpacity="1" d="M25.47 38.83L12.97 19.41" id="b4G0LJi7f"></path>

        
    </svg>
);

export default Logo;