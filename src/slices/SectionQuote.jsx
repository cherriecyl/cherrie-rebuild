import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Quote } from '../components'


const SectionQuote = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <Quote className="grid6L start4L grid10I start2I" text={input.primary.quote_text.html} img={input.primary.avatar} attr={input.primary.quote_attribute.text} />
      </GridWrap>
  </ProjectSection>

)

export default SectionQuote;

SectionQuote.propTypes = {
  input: PropTypes.object.isRequired,
}
