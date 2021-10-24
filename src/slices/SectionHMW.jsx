import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ProjectSection, GridWrap, ImgContainer } from '../components'


const Wrap = styled("div")`
  strong {
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 0;
    color: ${(props) => props.theme.colors.grey700};
    font-weight: 700;
    font-family: 'Manrope', 'Inter', sans-serif;
  }
  li {
    text-align: left;
    margin-bottom: 1.5em;
    &::marker {
      font-family: 'Manrope', 'Inter', sans-serif;
      font-size: 1.2em;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.colors.grey500};
    }
  }
  li:last-of-type {
    margin-bottom:0;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  ul, ol {
    margin-bottom: 0;
  }
`

const BkgImgWrap = styled("div")`
  position: absolute;
  width: 15vw;
  max-width: 250px;
  right: 0;
  div { 
    right: -2vw;
  }
  z-index: 1;
  margin: auto;
  padding-top: 7em;
  overflow: hidden;
  @media(max-width: ${(props) => props.theme.maxwidthiPadPro}) {
    display: none;
    width: 0;
    height: 0;
    visibility: hidden;
  }
`

const SectionHMW = ({ input }) => (
  <>
  {input.primary.background_image_side.url == null ? 
    `` :
    <BkgImgWrap aria-hidden="true">
        <ImgContainer src={input.primary.background_image_side.localFile.childImageSharp.fluid} alt={input.primary.background_image_side.alt} />
    </BkgImgWrap>}

  <ProjectSection id={input.primary.section_id} className={input.primary.background}>
      <GridWrap>
        {input.primary.section_id == `focus` ? <div className="grid12L"><p className="overline fontBigger">How did we get here?</p></div> : ``}
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <div className="grid8L grid10I grid12T start3L start2I start1T">
              <Wrap dangerouslySetInnerHTML={ { __html: input.primary.section_large_subtitle.html} } />
          </div>
      </GridWrap>
  </ProjectSection>
  </>
)

export default SectionHMW;

SectionHMW.propTypes = {
  input: PropTypes.object.isRequired,
}
