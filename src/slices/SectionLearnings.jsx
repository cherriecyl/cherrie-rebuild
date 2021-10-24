import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox, TextBox, CollapseWrap, ImgWithCaption } from '../components'
import styled from '@emotion/styled'


const Number = styled("span")`
  margin-top:0;
  margin-right: 0.5em;
  color: ${(props) => props.theme.colors.grey400};
  font-size: 2em;
  font-weight: 600;
  font-family: 'Manrope', 'Inter', sans-serif;
`

const LearningsWrap = styled("div")`
  h5 {
        line-height: 1.6;
        font-size: 1em;
        font-weight: 700;
        letter-spacing: 0.005em;
        margin-top: 0.5em;
        font-family: 'Manrope', 'Inter', sans-serif;
        margin-bottom: 0;
        text-transform: unset;
        margin-top:0;
  }
`

const SectionLearnings = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap>
        {input.primary.section_overline.text !== `` ? <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div> : ``}
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              {input.primary.section_large_subtitle.text !== `` ? <h3>{input.primary.section_large_subtitle.text}</h3> : ``}
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.primary.image.alt == null ? `` : <Lightbox boxClass={`${input.primary.image_grid_definition.text}` + ` nostretch`} src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt}/>}
            {input.items.map((item) => (
                item.type !== "image" ? 
                <LearningsWrap className={input.primary.learning_grid_definition.text} key={item.learning_title.text}>
                  <TextBox className="white nostretch">
                  <CollapseWrap className="insights" labeltext={<><Number>{item.number}</Number> <h5>{item.learning_title.text}</h5></>}>
                      <div dangerouslySetInnerHTML={{ __html: item.learning_body.html}}/>
                  </CollapseWrap>
                </TextBox>
                </LearningsWrap> : <Lightbox boxClass={item.grid_definition.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} key={item.image.localFile.uid}/>
            )
            )}
          {/* </LearningsWrap> */}
      </GridWrap>
  </ProjectSection>
)

export default SectionLearnings;

SectionLearnings.propTypes = {
  input: PropTypes.object.isRequired,
}
