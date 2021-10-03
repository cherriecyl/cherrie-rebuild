import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SectionWrap = styled("section")`
    padding-bottom: 7vw;
    padding-top: 7vw;
    h3 {
        font-size: 1.8em;
        line-height: 1.5;
        margin-top: 0;
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
            font-size: 1.5em;
        }
    }
    &.thin {
        padding-bottom: 1vw;
        padding-top: 1vw;
    }
    &.thinTop {
        padding-top: 1vw;
    }
    &.thinBottom {
        padding-bottom: 1vw;
    }
`
const ProjectSection = ({ className, children, id }) => {
    return (
    <SectionWrap className={`${className}`} id={`${id}`}>
        {children}
    </SectionWrap>
    );
  };


ProjectSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectSection;