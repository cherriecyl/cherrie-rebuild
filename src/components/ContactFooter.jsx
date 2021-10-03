import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ContactContainer = styled("div")`
    padding-top: 1em;
    display: grid;
    grid-template-columns: 1fr 10em;
    grid-gap: 3em;

    @media(max-width: ${(props) => props.theme.maxwidthTablet}) {
        grid-template-columns: 3fr 1fr;
        grid-gap: 2em;
    }

    @media(max-width: ${(props) => props.theme.maxwidthMobile}) {
        grid-template-columns: 1fr;
    }
`

const ContactLinkContainer = styled("ul")`
    list-style-type: none;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    margin: 0;

    li {
        margin-bottom: 1.5em;
    }

    @media(max-width: ${(props) => props.theme.maxwidthMobile}) {
        padding-bottom: 0;
    }
`

const ContactLink = styled("a")`
    font-weight: 700;
    line-height: 1.9;
    text-decoration: none;
    color: currentColor;
    letter-spacing: 0.02em;
    font-family: 'Manrope', 'Inter', sans-serif;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        -webkit-transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
    }

    &:hover {
        span {
            transform: translateX(0px);
            -webkit-transform: translateX(0px);
            opacity: 1;
            transition: all 150ms ease-in-out;
        }
    }
`

const ContactContent = styled("div")`
    max-width: 800px;
    padding-bottom: 3em;
    a {
        color: currentColor;
        border-bottom: 1px solid currentColor;
        &:hover {
            cursor: pointer;
            transition: all 100ms ease-in-out;
            color: ${(props) => props.theme.colors.green900};   
            background-color: ${(props) => props.theme.colors.green100};
          }
    }


    @media(max-width: ${(props) => props.theme.maxwidthMobile}) {
        grid-row: 2;
    }
`

const LandAck = styled("div")`
    font-size: 0.9em;
`

const ContactText = styled("div")`
    font-weight: 700;
    letter-spacing: 0.02em;
    p {
        font-family: 'Manrope', 'Inter', sans-serif;
        font-size: 1.2em;
    }
`

const ContactFooter = ({ content, links, landback }) => (
    <ContactContainer>
        <ContactContent>
            <ContactText dangerouslySetInnerHTML={{ __html: `${content}` }}/>
            <LandAck dangerouslySetInnerHTML={{ __html: `${landback}` }}/>
        </ContactContent>
        <ContactLinkContainer>
            {links.nodes.map((s, index) => (
                <li data-name={`social-entry-${index}`} key={s.primary.label.text}>
                    <ContactLink href={s.primary.link.url}>{s.primary.label.text}<span>&#8594;</span></ContactLink>
              </li>
            ))}
        </ContactLinkContainer>
    </ContactContainer>
)

export default ContactFooter;

ContactFooter.propTypes = {
    links: PropTypes.object.isRequired,
};