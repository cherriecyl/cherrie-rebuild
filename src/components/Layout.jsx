/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import Header from './Header'
import SEO from './SEO'
import SkipNavLink from './SkipNavLink'
import { theme, reset } from '../styles'
import animationStyle from '../styles/animations'
import styled from "@emotion/styled";

import 'typeface-manrope'
import 'typeface-inter'
import "@fontsource/atkinson-hyperlegible";

const typeStyle = css`
    h1 {
        font-size: 2.2em;
        line-height: 1.35;
        font-weight: 700;
        letter-spacing: 0.005em;
        font-family: 'Manrope', , sans-serif;
        font-style: normal;

        @media(max-width:${theme.maxwidthiPadPro}) {
            font-size: 2em;
        }

        @media(max-width:${theme.maxwidthTablet}) {
            font-size: 1.8em;
        }

        @media(max-width:${theme.maxwidthMobile}) {
            font-size: 1.5em;
        }
    }

    h2 {
        line-height: 1.3;
        margin-bottom: 2rem;
        margin-top: 3rem;
        font-size: 1.8em;
        font-weight: 700;
        letter-spacing: 0.005em;
        font-family: 'Manrope', 'Inter', sans-serif;
    }

    h3 {
        line-height: 1.3;
        font-size: 1.4em;
        font-weight: 700;
        letter-spacing: 0.005em;
        font-family: 'Manrope', 'Inter', sans-serif;
    }

    h4 {
        line-height: 1.6;
        font-size: 1.15em;
        font-weight: 700;
        letter-spacing: 0.005em;
        margin-top: 0.5em;
        font-family: 'Manrope', 'Inter', sans-serif;
    }

    h5 {
        margin-bottom: 1.45rem;
        margin-top: 0;
        font-weight: 700;
        line-height: 20px;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
    }

    h6 {
        font-size: 0.95em;
        font-weight: 500;
        margin: 0;
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
    }

    p {
        line-height: 1.9;
        font-family: 'Atkinson Hyperlegible', 'Inter var', 'Inter', sans-serif;
    }

    a {
        &:focus, &:hover {
            cursor: pointer;
            color: ${theme.colors.green900}
        }
        text-decoration: none;
        color: currentColor;
        transition: all 0.2s ease-in-out;
    }
    .overline {
      font-family: 'Manrope', 'Inter', sans-serif;
      color: ${theme.colors.grey600};
      font-weight: 700;
      line-height: 1.4;
      font-size: 0.85em;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0;
  }
`

const globalStyle = css`
  ${reset}
  html,
    body,
    #root {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100%;
        background-color: ${theme.colors.grey100};
    }

    body {
        width: 100%;
        margin: 0 auto;
        font-size: 17px;
        line-height: 1.6;
        color: ${theme.colors.grey900};
        -webkit-font-smoothing: antialiased;

        @media(max-width: ${theme.maxwidthMobile}) {
            font-size: 15.5px;
        }


        * {
            box-sizing: border-box;

            &::selection {
                background: ${theme.colors.green100};
                color: ${theme.colors.green900};
            }
        }
    }

    /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
    #___gatsby,
    div[role="group"][tabindex] {
        height: 100%;
        min-height: 100% !important;
  }
`

const LayoutContainer = styled.div`
  max-width: ${theme.maxwidthDesktop};
  padding-left: ${theme.paddingHorizontalDesktop};
  padding-right: ${theme.paddingHorizontalDesktop};
  margin: 0 auto;

  @media(max-width: ${theme.maxwidthTablet}) {
      padding-left: ${theme.paddingHorizontalTablet};
      padding-right: ${theme.paddingHorizontalTablet};
  }

  @media(max-width: ${theme.maxwidthMobile}) {
      padding-left: ${theme.paddingHorizontalMobile};
      padding-right: ${theme.paddingHorizontalMobile};
  }
`


const PureLayout = ({ children, data, customSEO }) => (
  <ThemeProvider theme={theme}>
    <LayoutContainer className="div">
      <Global styles={[globalStyle, typeStyle, animationStyle]} />
      <SkipNavLink />
      {!customSEO && <SEO />}
      <Header/>
      {children}
      <Footer>
        <div dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
      </Footer>
    </LayoutContainer>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={(data) => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
  customSEO: false,
}
