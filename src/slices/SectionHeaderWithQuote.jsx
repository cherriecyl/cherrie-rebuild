import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Quote, TextBox } from '../components'



const SectionHeaderWithQuote = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <div className="grid8L grid12M start3L start1M">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
              <h3>{input.primary.section_large_subtitle.text}</h3>
              {/* <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } /> */}
          </div>
          {/* <TextBox className="white border grid6L start6L grid10I start2I middle shadow">
              <Quote text={input.primary.quote_text.html} attr={input.primary.quote_attribute.text} img={input.primary.avatar}/>
          </TextBox> */}
      </GridWrap>
  </ProjectSection>

)

export default SectionHeaderWithQuote;

SectionHeaderWithQuote.propTypes = {
  input: PropTypes.object.isRequired,
}
