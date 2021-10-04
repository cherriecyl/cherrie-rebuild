import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ProjectSection, GridWrap, TextBox } from '../components'


const Wrap = styled("div")`
  strong {
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 0;
    color: ${(props) => props.theme.colors.grey700};
    font-weight: 700;
    font-family: 'Manrope', 'Inter', sans-serif;
  }
  li {
    text-align: left;
    margin-top: 1.5em;
    &::marker {
      font-family: 'Manrope', 'Inter', sans-serif;
      font-size: 1.2em;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.colors.grey500};
    }
  }
`

const SectionHMW = ({ input }) => (

  <ProjectSection id={input.primary.section_id} className={input.primary.background}>
      <GridWrap className="alternatingShadow">
          <TextBox className="middle white shadow grid6L grid8I grid10T grid12M start4L start2T start3I start1M">
              <h2 className="overline centerText">{input.primary.section_overline.text}</h2>
              {/* <p className="focus centerText">{input.primary.section_large_subtitle.text}</p> */}
              <Wrap className="brown centerText" dangerouslySetInnerHTML={ { __html: input.primary.section_large_subtitle.html} } />
          </TextBox>
      </GridWrap>
  </ProjectSection>

)

export default SectionHMW;

SectionHMW.propTypes = {
  input: PropTypes.object.isRequired,
}
