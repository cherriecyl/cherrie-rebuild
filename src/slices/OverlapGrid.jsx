import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, ImgWithCaption, TextBox, Lightbox } from '../components'
import styled from "@emotion/styled";

const IndentedLinkContainer = styled("div")`
    display: flex;
    align-items: center;
    font-size: 0.92em;
    font-weight: 700;
    margin-top: 2em;
    &::before {
        content: "▹";
        margin-right: 0.75em;
        font-size: 1.5em;
        font-weight: normal;
    }
    color: ${(props) => props.theme.colors.grey700};
    p {
        font-family: 'Manrope', 'Inter', sans-serif;
        margin-top: 0;
        margin-bottom: 0;
    }
    a {
      transition: all 150ms ease-in-out;
      &::after {
          content: '↗';
          display: inline-block;
          margin-left: 0.4em;
          transition: transform 400ms ease-out;
          transform: translateX(0px) translateY(2px);
      }
  
      &:hover {
          transition: all 150ms ease-in-out;
          &::after {
              transform: translateX(4px) translateY(-2px);
              opacity: 1;
              transition: transform 150ms ease-in-out;
          }
      }
    }
`

const OverlapGrid = ({ input, gridLayouts }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
          {input.items.map((item) => {
              const gridStyle = 
                {lbox:'grid4L start7L grid6I grid8T start5T grid10M start3M overlapTop', img:'stretch topCption',text:'grid4L start3L start2I grid6I grid8T start1T grid10M overlapBottom middle'}
              return (
                <GridWrap className="columngapS">
                    <TextBox className={`${gridStyle.text}` + ` front ` + ` ${item.box_background}`}>
                        <h4>{item.box_title.text}</h4>
                        <div dangerouslySetInnerHTML={{ __html: item.box_body.html} } />
                        { item.indented_link.html == null ? `` : <IndentedLinkContainer dangerouslySetInnerHTML={ { __html: item.indented_link.html} } /> }
                    </TextBox>
                    <Lightbox boxClass={gridStyle.lbox} imgClass={gridStyle.img} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt}/>
                </GridWrap>
              )
          })}
  </ProjectSection>

)

export default OverlapGrid;

OverlapGrid.propTypes = {
  input: PropTypes.object.isRequired,
}
