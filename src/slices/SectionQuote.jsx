import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Quote, Lightbox } from '../components'


const SectionQuote = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <Quote className="grid6L start4L grid10I start2I" text={input.primary.quote_text.html} img={input.primary.avatar} attr={input.primary.quote_attribute.text} />
          {input.items.map((item) => (
              item.image.alt == null ? 
              ``
              :
              <Lightbox boxClass={`${item.grid_definition.text}` + ` sectionAbove`} imgClass={item.img_class.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt}/>
          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionQuote;

SectionQuote.propTypes = {
  input: PropTypes.object.isRequired,
}
