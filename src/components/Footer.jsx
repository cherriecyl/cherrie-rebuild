import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from "gatsby";
import Logo from "../components/svg/Logo";

const StyledFooter = styled.footer`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
      max-width: 50px;
  }
`

const FooterText = styled(Link)`
    font-size: 0.8em;
    color: ${(props) => props.theme.colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${(props) => props.theme.colors.grey900};
    }

`

const Footer = ({ children }) => (
    <StyledFooter>
      <Link to="/">
        <Logo />
      </Link>
      <FooterText>{children}</FooterText>
    </StyledFooter>
  )

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
