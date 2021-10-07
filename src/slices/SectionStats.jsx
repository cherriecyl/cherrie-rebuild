import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, TextBox } from '../components'
import styled from '@emotion/styled'

const Stat = styled("div")`
  strong {
      font-size: 1.7em;
      line-height: 1.4;
      margin-bottom: 4%;
      @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
          font-size: 1.5em;
      }
  }
  em {
    font-size: 1em;
    color: ${(props) => props.theme.colors.grey900};
  }
`

const SectionStats = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS rowgapS thickSpace">
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2> 
          </div>
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item) => (
              <TextBox className="border results grid2L start2L grid6I start1I grid12T">
                  <Stat dangerouslySetInnerHTML={ { __html: item.stat.html} } className="focus" />
              </TextBox>
          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionStats;

SectionStats.propTypes = {
  input: PropTypes.object.isRequired,
}
