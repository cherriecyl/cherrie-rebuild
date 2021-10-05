import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, TextBox, ImgWithCaption, Lightbox, Carousel } from '../components'
import styled from '@emotion/styled'

const ImageContainer = styled("div")`
  display: flex;
  figure {
    width: 50%;
  }
`

const SectionStickySlideIn = ({ input }) => {
  
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS rowgapS dense">
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
              <h3>{input.primary.section_large_subtitle.text}</h3>
          </div>
          <Lightbox boxClass="grid4L start7L grid12T grid5I start1T" src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt}/>
          <div className="grid4L start3L grid5I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />

          <Carousel className="grid10L start2L" plugins={['arrows']}>
              {input.primary.slides.document[0].data.slides.map((i) => (
                  <>
                    <div>
                      <ImageContainer>
                        <ImgWithCaption src={i.left_image.localFile.childImageSharp.fluid} />
                        <ImgWithCaption src={i.right_image.localFile.childImageSharp.fluid} />
                      </ImageContainer>
                      <TextBox className="lightBeige">
                        <div dangerouslySetInnerHTML={ { __html: i.body_text.html } } />
                      </TextBox>
                    </div>
                  </>
              ))}
          </Carousel>

      </GridWrap>
      <GridWrap className="columngapS stickyGrid">
          {/* {input.items.map((item) => (
            <>
              <div className="containerWhite sticky grid5L grid12I">
                  <TextBox>
                      <div className={item.box_title.text == null ? "noTitle" : ``}dangerouslySetInnerHTML={ { __html: item.box_body.html} } />
                  </TextBox>
              </div> */}
              {/* <ImgContainer className="grid7L grid12I" src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} /> */}
              {/* <ImgWithCaption className="grid7L grid12I" src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} showcap={item.figcaption}/>
            </>
          ))} */}
      </GridWrap>
    </ProjectSection>
  );
};

export default SectionStickySlideIn;

SectionStickySlideIn.propTypes = {
  input: PropTypes.object.isRequired,
}
