import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from 'gatsby-image';

const QuoteWrap = styled("div")`
    display: flex;
    p {
        line-height: 1.6;
        margin-top: 0;
        color: ${(props) => props.theme.colors.grey700};
        font-family: 'Manrope', 'Inter', sans-serif;
        font-weight: 700;
        font-size: 1.05em;
    }
    &::before {
        content: "“";
        margin-top: 0;
        margin-right: 0.5em;
        color: ${(props) => props.theme.colors.grey400};
        font-size: 3em;
        font-family: serif;
        font-weight: 800;
    }
`

const QuoteAttribute = styled("div")`
    display: flex;
    align-items: center;
    margin-top: 2em;
    p {
        margin: 0;
        font-weight: normal;
        color: ${(props) => props.theme.colors.grey900};
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
        font-weight: 400; 
    }
    p.dash::before {
        content: "—";
        margin-right: 1em;
    }
`
const AvatarWrap = styled("div")`
    max-width:80px;
    width: 64px;
    margin-bottom: 0;
    margin-right: 1em;
`

const Quote = ({ className, text, img, attr}) => {
    return (
        <QuoteWrap className={className}>
            <div>
                <div dangerouslySetInnerHTML={ { __html: `${text}` } } />
                <QuoteAttribute>
                    <AvatarWrap>
                        <Img fluid={img.localFile.childImageSharp.fluid} alt={img.alt}/>
                    </AvatarWrap>
                    <p className="fontsmaller">{attr}</p>
                </QuoteAttribute>
            </div>
        </QuoteWrap>
    );
  };


Quote.propTypes = {
  className: PropTypes.string.isRequired
}

export default Quote;