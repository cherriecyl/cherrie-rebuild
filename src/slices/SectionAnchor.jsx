import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { ProjectSection, GridWrap, ImgContainer } from '../components'
import { Link } from 'react-scroll'


const Wrap = styled("div")`
  p {
    font-family: 'Manrope', 'Inter', sans-serif;
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 0;
    font-weight: 700;
  }
  a {
    color: ${(props) => props.theme.colors.grey700};
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

const SectionAnchor = ({ input }) => (
  <>
  <ProjectSection id={input.primary.section_id} className={input.primary.background}>
      <GridWrap>
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <Wrap className="grid8L grid10I grid12T start3L start2I start1T">
            <ol>
            {input.items.map((item) => (
              <li>
                <Link spy={true} smooth={true} duration={1500} to={item.anchor_id} key={item.anchor_id}><div dangerouslySetInnerHTML={ { __html: item.link_text.html} } /></Link>
              </li>
            ))}
            </ol>
          </Wrap>
      </GridWrap>
  </ProjectSection>
  </>
)

export default SectionAnchor;

SectionAnchor.propTypes = {
  input: PropTypes.object.isRequired,
}
