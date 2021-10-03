import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const CollapseWrapStyle = styled("div")`
    input[type='checkbox'] {
        display: none;
    }
    .lblToggle {
        display: flex;
        align-items: center;
        transition: all 0.25s ease-out;
        cursor: pointer;
        p {
            margin-right: 0.5em;
        }
    }
    .lblToggle:hover {
        color: ${(props) => props.theme.colors.green900};
    }
    .lblToggle::after {
        content: '+';
        font-size: 2em;
        margin-left: auto;
        transition: transform 400ms ease-out;
        transform-origin: center;
    }
    .collapsibleContent {
        a {
            border-bottom: 1px solid currentColor;
            &:hover {
                color: ${(props) => props.theme.colors.green900};   
                background-color: ${(props) => props.theme.colors.green100};
            }
        }
        max-height: 0px;
        overflow: hidden;
        transition: max-height 200ms ease-in-out;
        h3 {
            font-size: 0.9em;
            margin-top: 1em;
            margin-bottom: 0.5em;
            font-family: 'Inter', sans-serif;
        }
        font-size: 0.95em;
    }
    .toggle:checked + .lblToggle + .collapsibleContent {
        max-height: 100vh;
    }
    .toggle:checked + .lblToggle::after {
        transform: rotate(45deg) translateY(-2.5%) translateX(2.5%);
    }
    &.inline {
        .lblToggle {
            font-size: 0.9em;
            margin: 0;
            line-height: 1.9;
            display: inline-block;
        }
        .lblToggle::after {
            font-size: 1em;
            display: inline-block;
            margin-left: 0.4em;
        }
    }
`

const CollapseWrap = ({ className, labeltext, id, children }) => {
    return (
    <CollapseWrapStyle className={`${className}`}>
        <input name={id} id={id} className="toggle" type="checkbox"/>
        <label htmlFor={id} className="lblToggle">
            {labeltext}
        </label>
        <div className="collapsibleContent brown">
            {children}
        </div>
    </CollapseWrapStyle>
    );
  };


CollapseWrap.propTypes = {
  children: PropTypes.node.isRequired,
  labeltext: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

export default CollapseWrap;