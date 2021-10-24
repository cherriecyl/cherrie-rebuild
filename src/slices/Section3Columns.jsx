import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox } from '../components'

const Section3Columns = ({ input }) => {
  
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS">
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
          </div>
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              <h3>{input.primary.section_large_subtitle.text}</h3>
          </div>
          <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } className={input.primary.text_grid_definition.text}/>
          {input.primary.image.url == null ? `` : <Lightbox boxClass={input.primary.img_grid_definition.text} src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt}/>}
          <div dangerouslySetInnerHTML={ { __html: input.primary.columns_header.html} } className="grid8L start3L grid10I start2I grid12T start1T sectionAbove"/>
      </GridWrap>

      <GridWrap className="fillrows columngapS">
        {input.items.map((item) => (
            <>{item.image.url == null ? `` :
            <Lightbox boxClass="grid4L grid10I start2I grid12T start1T" imgClass="border" src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt}/>
            }
              <div dangerouslySetInnerHTML={ { __html: item.column_body.html} } className="grid4L grid10I start2I grid12T start1T"/>
            </>
        ))}
      </GridWrap>
    </ProjectSection>
  );
};

export default Section3Columns;

Section3Columns.propTypes = {
  input: PropTypes.object.isRequired,
}
