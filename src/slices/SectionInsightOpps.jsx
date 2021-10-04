import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, TextBox } from '../components'


const SectionInsightOpps = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS rowgapS">
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item, index) => (

            <TextBox className={`${item.box_background}` + ` grid4L grid5I grid12T` + `${ index % 2 ? '': ` start3L start2I start1T`}` }>
              <h4>{item.box_title.text}</h4>
              <div dangerouslySetInnerHTML={ { __html: item.box_body.html} } />
            </TextBox>

          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionInsightOpps;

SectionInsightOpps.propTypes = {
  input: PropTypes.object.isRequired,
}
