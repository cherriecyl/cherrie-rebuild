import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Button, Wrapper } from "../components";
import { Link } from 'gatsby';

const ProjectLayoutContainer = styled("div")`
    margin: auto;
    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 1px solid currentColor;
        &:hover {
          cursor: pointer;
          transition: all 100ms ease-in-out;
          color: ${(props) => props.theme.colors.green900}; 
          background-color: ${(props) => props.theme.colors.green100};
        }
    }
    .alternatingShadow {
        &:nth-of-type(4n+1) > div {
                box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em -1em 0 ${(props) => props.theme.colors.grey300};
            }
    
        &:nth-of-type(4n) > div {
                box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), 1em 1em 0 ${(props) => props.theme.colors.grey300};
            }
    
        &:nth-of-type(4n+2) > div {
                box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em 1em 0 ${(props) => props.theme.colors.grey300};
            }
    
        &:nth-of-type(4n+3) > div {
                box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), 1em -1em 0 ${(props) => props.theme.colors.grey300};
            }

        &:nth-of-type(4n), &:nth-of-type(4n+2) {
            flex-direction: column-reverse;
        }

        @media(max-width:${(props) => props.theme.maxwidthMobile}) {
            margin: 1em;
        }
    }

    .whiteBackground {
        position: relative;
        z-index: 0;
        &:before {
            content: "";
            width: 100vw;
            position: absolute;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            z-index: -1;
            top: 0;
            background: white;
            height: 100%;
        }
    }
    .sticky {
        position: sticky;
        position: -webkit-sticky;
        top: 6em;
        left: 0;
        justify-self: start;
        color: ${(props) => props.theme.colors.grey800};
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
            position: relative;
            top: 0;
            margin-bottom: 0;
            transform: none;
        }
    }
    .sectionOverline {
        margin-top: 0.5em;
    }
    .front {
        z-index: 3;
    }
    .numbered::before {
        content: attr(data-counter);
        margin-top:0;
        margin-right: 0.5em;
        color: ${(props) => props.theme.colors.grey400};
        font-size: 2em;
        font-weight: 600;
        font-family: 'Manrope', 'Inter', sans-serif;
    }
    .focus {
        font-size: 1.25em;
        line-height: 1.6;
        margin-top: 0;
        color: ${(props) => props.theme.colors.grey700};
        font-weight: 700;
        font-family: 'Manrope', 'Inter', sans-serif;
    }
    .centerText {
        text-align: center;
    }
    .brown {
        color: ${(props) => props.theme.colors.grey700};
    }
    .fontsmaller {
        font-size: 0.9em;
    }
    .fontStat {
        font-size: 1.7em;
        line-height: 1.4;
        margin-bottom: 4%;
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
            font-size: 1.5em;
        }
    }
    .fontStatLarge {
        font-size: 3.4em;
        line-height: 1.4;
        margin-bottom: 4%;
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
            font-size: 3em;
        }
    }
    .middle {
        align-self: center;
    }
    .leftNum {
        display: flex;
        align-items: flex-start;
        &::before {
            margin-top: -1%;
        }
    }
    .nostretch {
        align-self: flex-start;
    }
    .containerWhite {
        background-color: white;
    }
    .title {
        margin-top: 0;
    }
    .projectSpecs {
        p {
            font-size: 0.95em;
            margin-bottom: 0;
        }
        li {
            font-size: 0.9em;
        }
        h2 {
            margin-top: 0.75em;
        }
    }
    .spaceBelow {
        margin-bottom: 2em;
    }
    .projSubHeading {
        h4 {
            margin-top: 2.5em;
        }
    }
    .sectionAbove {
        margin-top: 4em;
        padding-top: 2vw;
    }
`
const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`

const ProjectLayout = ({ children }) => (
    <Wrapper>
        <ProjectLayoutContainer>
            { children }
        </ProjectLayoutContainer>
        <WorkLink to={`/work`}>
            <Button className="Button--secondary">
                See other work
            </Button>
        </WorkLink>
    </Wrapper>
)

export default ProjectLayout;

ProjectLayout.propTypes = {
    children: PropTypes.node.isRequired,
}