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
  p {
    margin-bottom: 0;
  }
  li {
    text-align: left;
    margin-bottom: 1.5em;
    &::marker {
      font-family: 'Manrope', 'Inter', sans-serif;
      font-size: 1.2em;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.colors.grey500};
    }
  }
  li:last-of-type {
    margin-bottom:0;
  }
  ul {
    margin-bottom: 0;
  }
`

const SectionHMW = ({ input }) => (

  <ProjectSection id={input.primary.section_id} className={input.primary.background}>
      <GridWrap>
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <div className="grid8L grid10I grid1T start3L start2I start1T">
              <Wrap className="brown" dangerouslySetInnerHTML={ { __html: input.primary.section_large_subtitle.html} } />
          </div>
      </GridWrap>
  </ProjectSection>

)

export default SectionHMW;

SectionHMW.propTypes = {
  input: PropTypes.object.isRequired,
}
