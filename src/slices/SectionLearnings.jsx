import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox, TextBox, CollapseWrap } from '../components'
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
  > div {
    margin-bottom: 2em;
  }
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
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          <Lightbox boxClass={`${input.primary.image_grid_definition.text}` + ` nostretch`} src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt}/>
          <LearningsWrap className={input.primary.learning_grid_definition.text}>
            {input.items.map((item) => (
                <TextBox className="white nostretch">
                  <CollapseWrap className="insights" labeltext={<><Number>{item.number}</Number> <h5>{item.learning_title.text}</h5></>}>
                      <div dangerouslySetInnerHTML={{ __html: item.learning_body.html}}/>
                  </CollapseWrap>
                </TextBox> 
            ))}
          </LearningsWrap>
      </GridWrap>
  </ProjectSection>
)

export default SectionLearnings;

SectionLearnings.propTypes = {
  input: PropTypes.object.isRequired,
}
