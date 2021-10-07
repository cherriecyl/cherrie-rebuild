import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, ImgContainer } from '../components'


const SectionProblemSpace = ({ input }) => (
  

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <div className="grid12L"><p className="focus">How did we get here?</p></div>
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <div className="grid8L grid12T start3L start1T grid10I start2I">
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item, index) => (
              <div className={`grid4L grid5I grid6T grid12M` + `${ index % 2 ? '': ` start3L start2I start1T`}` }>
                  <p className={`focus ` + `${item.focus_text_class.text}`}>{item.focus_text.text}</p>
                  <div className="brown" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />
              </div>
          ))}
           <ImgContainer className="grid10L start2L grid12T start1T" src={input.primary.header_image.localFile.childImageSharp.fluid} alt={input.primary.header_image.alt} />
    </GridWrap>
  </ProjectSection>

)

export default SectionProblemSpace;

SectionProblemSpace.propTypes = {
  input: PropTypes.object.isRequired,
}
