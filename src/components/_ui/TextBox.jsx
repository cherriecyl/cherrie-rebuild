import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const TextWrap = styled("div")`
    padding: 2em;
    color: currentColor;
    border: none;
    border-radius: 4px;
    p {
        margin-bottom: 0em;
        margin-top: 1em;
    }
    .noTitle {
        p:nth-child(1) {
            margin-top: 0em;
        }
    }
    &.lightBeige {
        background-color: ${(props) => props.theme.colors.grey100};
    }
    &.beige {
        background: ${(props) => props.theme.colors.grey200};
    }
    &.border {
        border: 3px solid ${(props) => props.theme.colors.grey200}; 
    }
    &.white {
        background-color: white;
    }
    &.shadow {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.07);
    }
    &.results {
        text-align: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;
        p {
            margin: 0;
        }
    }
    &.projectSpecs {
        p {
            font-size: 0.9em;
        }
        li {
            font-size: 0.9em;
        }
        @media(max-width:${(props)=>props.theme.maxwidthMobile}) {
            padding-top: 1em;
            padding-bottom: 1em;
        }
    }
`
const TextBox = ({ className, children }) => {
    return (
    <TextWrap className={`${className}`}>
        {children}
    </TextWrap>
    );
  };


TextBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TextBox;