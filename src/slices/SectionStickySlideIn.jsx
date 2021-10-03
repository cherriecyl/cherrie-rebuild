import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, TextBox, ImgWithCaption } from '../components'

const SectionStickySlideIn = ({ input }) => {

  
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
          <div className="grid8L start3L grid12T start1T">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
      </GridWrap>
      <GridWrap className="columngapS stickyGrid">
          {input.items.map((item) => (
            <>
              <div className="containerWhite sticky grid5L grid12I">
                  <TextBox>
                      <div className={item.box_title.text == null ? "noTitle" : ``}dangerouslySetInnerHTML={ { __html: item.box_body.html} } />
                  </TextBox>
              </div>
              {/* <ImgContainer className="grid7L grid12I" src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} /> */}
              <ImgWithCaption className="grid7L grid12I" src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} showcap={item.figcaption}/>
            </>
          ))}
      </GridWrap>
    </ProjectSection>
  );
};

export default SectionStickySlideIn;

SectionStickySlideIn.propTypes = {
  input: PropTypes.object.isRequired,
}
