import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

const CollapseWrapStyle = styled("div")`
    .accordion__button:hover {
        color: ${(props) => props.theme.colors.green900};
    }
    .accordion__button {
        display: flex;
        align-items: center;
        transition: all 0.25s ease-out;
        cursor: pointer;
        h4 {
            margin-bottom: 0
        }
    }
    &.team {
        .accordion__button {
            font-size: 0.9em;
            margin: 0;
            line-height: 1.9;
            display: inline-block;
            p {
                margin-right: 0.5em;
            }
        }
        .accordion__button::after {
            content: '+';
            font-size: 2em;
            margin-left: auto;
            transition: transform 300ms ease-out;
            transform-origin: center;
            font-size: 1em;
            display: inline-block;
            margin-left: 0.4em;
        }
        .collapsibleContent {
            color: ${(props) => props.theme.colors.grey700};
            font-size: 0.95em;
        }

    }
    &.insights {
        .accordion__button:before {
            display: inline-block;
            content: '';
            height: 10px;
            width: 10px;
            min-width: 10px;
            margin-right: 12px;
            border-bottom: 2px solid ${(props) => props.theme.colors.grey600};
            border-right: 2px solid ${(props) => props.theme.colors.grey600};
            transform: rotate(-45deg);
            transition: all 0.25s ease-out;
        }
        .accordion__button:hover:before {
            border-bottom: 2px solid ${(props) => props.theme.colors.green900};
            border-right: 2px solid ${(props) => props.theme.colors.green900};
        }
    }

    &.stickynav {
        .accordion__button:before {
            height: 8px;
            width: 8px;
            min-width: 8px;
        }
        .accordion__button {
            margin-bottom: 1em;
            margin-top: 1em;
            @media(max-width: ${(props) => props.theme.maxwidthiPadPro}) {
                width: 100%;
            }
        }
        .accordion__button[aria-expanded='false'] {
            width: 80px;
            @media(max-width: ${(props) => props.theme.maxwidthiPadPro}) {
                width: 100%;
            }
        }
    }
    
    .accordion__button[aria-expanded='true']::before,
    .accordion__button[aria-selected='true']::before,
    .accordion__button[aria-expanded='true']::after,
    .accordion__button[aria-expanded='true']::after {
        transform: rotate(45deg) translateY(-2.5%) translateX(2.5%);
    }

    .collapsibleContent {
        a {
            border-bottom: 1px solid currentColor;
            &:hover {
                color: ${(props) => props.theme.colors.green900};   
                background-color: ${(props) => props.theme.colors.green100};
            }
        }
        h3 {
            font-size: 0.9em;
            letter-spacing: 0.03em;
            margin-top: 1em;
            margin-bottom: 0.5em;
            font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
        }
    }
    [hidden] {
        display: none;
    }
`

const CollapseWrap = ({ className, labeltext, children }) => {
    return (
    <CollapseWrapStyle className={`${className}`}>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordion__button">
                        {labeltext}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="collapsibleContent">
                    {children}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </CollapseWrapStyle>
    );
  };


CollapseWrap.propTypes = {
  children: PropTypes.node.isRequired,
  labeltext: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

export default CollapseWrap;