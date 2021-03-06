import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, ImgWithCaption, VideoWithCaption, Lightbox } from '../components'


const SectionHeaderVideoImages= ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <div className="grid8L grid10I grid12T start3L start2I start1T spaceBelow">
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.primary.video == null ? 
            `` :
          <VideoWithCaption className={input.primary.video_grid_definition.text} src={input.primary.video.url} alt={input.primary.video_caption.text}/> }
          {input.items.map((item) => (
                  <Lightbox boxClass={item.grid_definition.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} key={item.image.alt}/>
          ))}
      </GridWrap>
  </ProjectSection>

)

export default SectionHeaderVideoImages;

SectionHeaderVideoImages.propTypes = {
  input: PropTypes.object.isRequired,
}
