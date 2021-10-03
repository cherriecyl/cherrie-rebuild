import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const GridContainer = styled("div")`
    display: grid;
    column-gap: 5vw;
    row-gap: 4em;
    margin-bottom: 4em;
    margin-top: 4em;
    align-content: start;
    grid-template-columns: repeat(12, 1fr);
    &.dense {
        grid-auto-flow: dense;
    }
    &.rowgapS {
        row-gap: 2em;
    }
    &.stickyGrid {
        @media(min-width:${(props)=>props.theme.maxwidthiPadPro}) {
            row-gap: 0em;
            div.containerWhite {
                padding-bottom: 4em;
            }
            margin-bottom: 0em;
            padding-bottom: 4em;
        }
    }
    &.columngapS {
        column-gap: 2vw;
    }
    &.noBottomGap {
        margin-bottom: 0em;
        margin-top:0em;
    }
    &.thickSpace {
        margin-bottom: 6em;
    }
    &.fillrows {
        grid-template-rows: 1fr auto;
        grid-auto-flow: column;
    }
    .row2 {
        grid-row-end: span 2;
    }
    .overlapTop {
        grid-row: row 1 / span 4;
    }
    .overlapBottom {
        grid-row: row 2 / span 4;
    }
    .grid12L {
        grid-column-end: span 12;
    }
    .grid11L {
        grid-column-end: span 11;
    }
    .grid10L {
        grid-column-end: span 10;
    }
    .grid9L {
        grid-column-end: span 9;
    }
    .grid8L {
        grid-column-end: span 8;
    }
    .grid7L {
        grid-column-end: span 7;
    }
    .grid6L {
        grid-column-end: span 6;
    }
    .grid5L {
        grid-column-end: span 5;
    }
    .grid4L {
        grid-column-end: span 4;
    }
    .grid3L {
        grid-column-end: span 3;
    }
    .grid2L {
        grid-column-end: span 2;
    }
    .grid1L {
        grid-column-end: span 2;
    }
    .start1L {
        grid-column-start: 1;
    }
    .start2L {
        grid-column-start: 2;
    }
    .start3L {
        grid-column-start: 3;
    }
    .start4L {
        grid-column-start: 4;
    }
    .start5L {
        grid-column-start: 5;
    }
    .start6L {
        grid-column-start: 6;
    }
    .start7L {
        grid-column-start: 7;
    }
    .start8L {
        grid-column-start: 8;
    }
    .start9L {
        grid-column-start: 9;
    }
    @media(max-width:${(props)=>props.theme.maxwidthiPadPro}) {
        .grid12I {
            grid-column-end: span 12;
        }
        .grid10I {
            grid-column-end: span 10;
        }
        .grid8I {
            grid-column-end: span 8;
        }
        .grid7I {
            grid-column-end: span 6;
        }
        .grid6I {
            grid-column-end: span 6;
        }
        .grid5I {
            grid-column-end: span 5;
        }
        .grid4I {
            grid-column-end: span 4;
        }
        .grid3I {
            grid-column-end: span 3;
        }
        .grid2I {
            grid-column-end: span 2;
        }
        .start1I {
            grid-column-start: 1;
        }
        .start2I {
            grid-column-start: 2;
        }
        .start3I {
            grid-column-start: 3;
        }
        .start4I {
            grid-column-start: 4;
        }
        .start5I {
            grid-column-start: 5;
        }
        .start6I {
            grid-column-start: 6;
        }
        .row1I {
            grid-row-end: span 1;
        }
        .overlapBottom {
            grid-row: row 3 / span 4;
        }
    }
    @media(max-width:${(props)=>props.theme.maxwidthTablet}) {
        .grid12T {
            grid-column-end: span 12;
        }
        .grid10T {
            grid-column-end: span 10;
        }
        .grid8T {
            grid-column-end: span 8;
        }
        .grid6T {
            grid-column-end: span 6;
        }
        .grid4T {
            grid-column-end: span 4;
        }
        .grid3T {
            grid-column-end: span 3;
        }
        .grid2T {
            grid-column-end: span 2;
        }
        .start1T {
            grid-column-start: 1;
        }
        .start2T {
            grid-column-start: 2;
        }
        .start3T {
            grid-column-start: 3;
        }
        .start4T {
            grid-column-start: 4;
        }
        .start5T {
            grid-column-start: 5;
        }
        .row2T {
            grid-row-end: span 2;
        }
    }
    @media(max-width:${(props)=>props.theme.maxwidthMobile}) {
        .grid12M {
            grid-column-end: span 12;
        }
        .grid11M {
            grid-column-end: span 11;
        }
        .grid10M {
            grid-column-end: span 10;
        }
        .grid6M {
            grid-column-end: span 6;
        }
        .grid4M {
            grid-column-end: span 4;
        }
        .grid3M {
            grid-column-end: span 3;
        }
        .start1M {
            grid-column-start: 1;
        }
        .start2M {
            grid-column-start: 2;
        }
        .start3M {
            grid-column-start: 3;
        }
        .start4M {
            grid-column-start: 4;
        }
        .start5M {
            grid-column-start: 5;
        }
        .row1M {
            grid-row-end: span 1;
        }
        .overlapTop {
            grid-row: row 1 / span 6;
        }
        .overlapBottom {
            grid-row: row 5 / span 6;
        }
    }
`

const GridWrap = ({ className, children }) => {
    return (
    <GridContainer className={`${className}`}>
        {children}
    </GridContainer>
    );
  };


GridWrap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridWrap;