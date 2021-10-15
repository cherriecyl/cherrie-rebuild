import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, PrototypeContainer, ImgContainer } from '../components'
import styled from "@emotion/styled";

const TextWrap = styled("div")`
  margin-bottom: 2em;
`

const BkgImgWrap = styled("div")`
  position: absolute;
  width: 18vw;
  max-width: 250px;
  right: -3vw;
  margin: auto;
  padding-top: 3em;
  overflow: hidden;
  @media(max-width: ${(props) => props.theme.maxwidthiPadPro}) {
    display: none;
    width: 0;
    height: 0;
    visibility: hidden;
  }
`

const SectionPrototype = ({ input }) => {
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <BkgImgWrap aria-hidden="true">
          <ImgContainer src={input.primary.background_image_side.localFile.childImageSharp.fluid} alt={input.primary.background_image_side.alt} />
      </BkgImgWrap>
      <GridWrap className="dense">
            <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
            </div>
            <div className="grid8L grid10I start3L start2I grid12T start1T">
                <h3>{input.primary.section_large_subtitle.text}</h3>
                <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
            </div>
            {input.items.map((item, index) => (
              <>
                <PrototypeContainer className={"grid4L grid5I grid12T start1T spaceBelow" + `${ index % 2 ? ` start7L`: ` start3L start2I`}` } device={item.prototype_container} prototype={item.prototype} video={item.prototype_asset} background={item.prototype_background}/>
                <TextWrap className={"grid4L grid5I grid12T start1T middle" + `${ index % 2 ? ` start3L start2I`: ``}`}>
                    <h4>{item.feature_title.text}</h4>
                    <p>{item.feature_body.text}</p> 
                </TextWrap>
              </>
            ))}
        </GridWrap>
    </ProjectSection> 
  )           
};

export default SectionPrototype;

SectionPrototype.propTypes = {
  input: PropTypes.object.isRequired,
}
