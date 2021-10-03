import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, PrototypeContainer } from '../components'

const SectionPrototype = ({ input }) => {
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="dense">
            <div className="grid8L start3L grid12T start1T">
                <h2 className="overline">{input.primary.section_overline.text}</h2>
                <h3>{input.primary.section_large_subtitle.text}</h3>
                <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
            </div>
            {input.items.map((item, index) => (
              <>
                <PrototypeContainer className={"grid4L grid12T start1T" + `${ index % 2 ? ` start7L`: ` start3L`}` } device={item.prototype_container} prototype={item.prototype} video={item.prototype_asset} background={item.prototype_background}/>
                <div className={"grid4L grid12T start1T middle" + `${ index % 2 ? ` start3L`: ``}`}>
                    <h4>{item.feature_title.text}</h4>
                    <p>{item.feature_body.text}</p> 
                </div>
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