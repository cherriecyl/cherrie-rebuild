import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap } from '../components'



const SectionProcessStart = ({ input }) => (

  <ProjectSection id={input.primary.section_id} className={"thinBottom " + `${input.primary.background}`}>
      <GridWrap>
          <div className="grid12L">
            <p className="overline centerText">{input.primary.section_large_text.text}</p>
          </div>
      </GridWrap>
  </ProjectSection>

)

export default SectionProcessStart;

SectionProcessStart.propTypes = {
  input: PropTypes.object.isRequired,
}
