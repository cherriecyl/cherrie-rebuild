import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox } from '../components'

const SectionOverlineHeaderImages = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <div className="grid8L start3L grid12T start1T">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item) => (
                  <Lightbox className={item.grid_definition.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt}/>
          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionOverlineHeaderImages;

SectionOverlineHeaderImages.propTypes = {
  input: PropTypes.object.isRequired,
}
