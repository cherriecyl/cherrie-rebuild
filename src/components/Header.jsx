import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Logo from '../components/svg/Logo'

const StyledHeader = styled.nav`
  padding-bottom: 2rem;
  a {
    color: ${(props) => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 400;
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

const HeaderContainer = styled.nav`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 7em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${(props) => props.theme.maxwidthTablet}) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${(props) => props.theme.maxwidthMobile}) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 700;
        letter-spacing: 0.02em;
        font-family: 'Manrope', 'Inter', sans-serif;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1.25em;
        padding-top: 0.5em;
        display: block;
        position: relative;
        color: ${(props) => props.theme.colors.grey700};

        &:after {
            position: absolute;
            content: "";
            bottom: 0;
            width: 0px;
            height: 3px;
            background: transparent;
            bottom: 10px;
            left: 50%;
            margin-left: -25%;
            transition: background 100ms, width 300ms ease-in-out;
        }

        &:hover {
            color: ${(props) => props.theme.colors.green900};
            &:after {
                width: 50%;
                background: ${(props) => props.theme.colors.green500};
                transition: background 100ms, width 300ms ease-in-out;
            }
        }

        &.Link--is-active {
            &:after {
                width: 50%;
                background: ${(props) => props.theme.colors.green500};
                transition: background 100ms, width 300ms ease-in-out;
            }
        }
    }
`

const Header = () => (
      <HeaderContainer>
        <HeaderContent>
          <Link to="/" aria-label="Back to Home">
            <Logo />
          </Link>
          <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Work
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/about">
                    About
                </Link>
            </HeaderLinks>
        </HeaderContent>
      </HeaderContainer>
    )

export default Header
