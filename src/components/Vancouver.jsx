import React, { useState } from 'react';
import styled from "@emotion/styled";

const Text = styled("span")`
   color: ${(props) => props.theme.colors.grey700};
   border-bottom: 2px dotted currentColor;
   &:hover {
        cursor: pointer;
        transition: all 300ms ease-in-out;
        color: ${(props) => props.theme.colors.green900};   
        background-color: ${(props) => props.theme.colors.green100};
   }
`

const Container = styled("span")`
   &:focus {
      outline: none;
   }
   &:focus-visible {
      outline: 2px solid #7AACFE !important; /* for non-webkit browsers */
      outline: 5px auto -webkit-focus-ring-color !important;
   }
`

const FadeContainer = styled("span")`
   position: relative;
   z-index: 2;
   .fadeout {
      animation: fade-out-keyframes 350ms;
   }
   @keyframes fade-out-keyframes {
      0% {opacity: 1}
      100% {opacity: 0}
   }
   .fadein {
      animation: fade-in-keyframes 600ms;
   }
   @keyframes fade-in-keyframes {
      0% {opacity: 0}
      100% {opacity: 1}
   }
`

const TooltipBox = styled("div")`
   position: absolute;
   top: calc(100%);
   left: 50%;
   visibility: hidden;
   color: transparent;
   background-color: transparent;
   width: 100%;
   min-width: 150px;
   max-width: 250px;
   margin-left: -50%;
   padding: 5px 10px;
   border-radius: 6px;
   transition: visibility 0.5s, color 0.5s, background-color 0.5s, height 0.5s, top 0.5s,
      padding 0.5s ease-in-out;
   text-align: center;
   font-size: 0.8rem;
   font-family: 'Inter var', 'Inter', sans-serif;
   font-weight: 400;
   line-height: 1.4;
   &:before {
      content: "";
      width: 0;
      height: 0;
      left: 50%;
      margin-left: -5px;
      top: -5px;
      position: absolute;
      border: 5px solid transparent;
      transform: rotate(135deg);
      transition: border 0.3s ease-in-out 0s;
   }
`

const TooltipCard = styled("span")`
  position: relative;
  z-index: 2;
  & ${Text}:hover + ${TooltipBox} {
    top: calc(100% + 5px);
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 10px 10px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`


const LandAcknowledgment = () => {
   const [showUnceded, setShowUnceded] = useState(false);
   const [fade, setFade] = useState(false);
   const updateText = () => {
      setFade(true);
      setTimeout(() => { setShowUnceded(!showUnceded) }, 350);
   }
   return (
      <FadeContainer>
         <Container 
            onClick={()=> updateText()} 
            onKeyDown={()=> updateText()}
            onAnimationEnd={()=> setFade(false)}
            className={fade ? 'fadeout' : 'fadein'} role="button" tabIndex={0}>
            {showUnceded ?  
               <span>On the unceded lands of the <TooltipCard><Text>Sḵwx̱wú7mesh, xʷməθkʷəy̓əm, Stó:lō, and Səl̓ílwətaʔ/Selilwitulh  Peoples</Text>.<TooltipBox>Lands known as "Vancouver"</TooltipBox></TooltipCard></span>
               : 
               <span>Based in <TooltipCard><Text>Vancouver</Text>.
               <TooltipBox>Click to show Indigenous lands</TooltipBox></TooltipCard></span> 
            }
         </Container>
      </FadeContainer>
   );
};

export default LandAcknowledgment;
   