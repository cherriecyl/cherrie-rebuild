import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox, Carousel } from '../components'

const SectionOverlineHeaderCarousel = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS">
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item) => (
                  item.image_collection == null ? 
                  <>
                    {item.body_text.html == null ? `` : <div className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />}
                    <Lightbox boxClass={item.grid_definition.text} imgClass={item.img_class.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt}/>
                  </>
                  : 
                  <>
                    {item.body_text.html == null ? `` : <div className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />}
                    <Carousel className={item.grid_definition.text} input={item.image_collection.document[0].data.image_collection}/>
                  </>
          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionOverlineHeaderCarousel;

SectionOverlineHeaderCarousel.propTypes = {
  input: PropTypes.object.isRequired,
}
