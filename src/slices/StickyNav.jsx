import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import CollapseWrap from '../components/_ui/CollapseWrap';

const NavWrap = styled("div")`
  position: sticky;
  font-size: 0.8em;
  top: 0;
  z-index: 3;
  .header {
    line-height: 1.3;
    background: ${(props) => props.theme.colors.grey200};
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 4px;
    position: absolute;
    margin: 0;
    margin-top: calc(1vw + 5em);
    max-width: 150px;
    right: -4em;
    color: ${(props) => props.theme.colors.gray700};
    ul {
        list-style-type: none;
        margin: 0;
    }
    li {
        margin-bottom: 0.7rem;
        &:hover {
            transform: translateX(10px);
            transition: all 300ms;
        }
    }
    a {
        border-bottom: none !important;
    }
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid currentColor;
      color: ${(props) => props.theme.colors.green700}
      ;
    }
    p.overline {
        margin-bottom: 0;
    }
    @media(max-width: ${(props) => props.theme.maxwidthiPadPro}) {
        margin-top: 0;
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        border-radius: 0;
    }
  }
`;


const StickyNav = ({ input }) => {
    return (
    <NavWrap>
        <div className="header">
        <CollapseWrap className="insights stickynav" labeltext={<p className="overline">Skip to...</p>}>
            <ul>
            {input.items.map((item) => (
              <li>
                <Link key={item.section_id} activeClass="active" to={item.section_id} spy={true} smooth={true} duration={1000} className="overline">
                  {item.link_title.text}
              </Link>
              </li>
            ))}
            </ul>
          </CollapseWrap>
        </div>
    </NavWrap>
    );
  };

export default StickyNav;

StickyNav.propTypes = {
  input: PropTypes.object.isRequired,
}