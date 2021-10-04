import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, TextBox } from '../components'



const SectionHMW = ({ input }) => (

  <ProjectSection id={input.primary.section_id}>
      <GridWrap className="alternatingShadow">
          <TextBox className="middle white shadow grid6L grid8I grid10T grid12M start4L start2T start3I start1M">
              <h2 className="overline centerText">{input.primary.section_overline.text}</h2>
              <p className="focus centerText">{input.primary.section_large_subtitle.text}</p>
              {/* Image should be here */}
          </TextBox>
      </GridWrap>
  </ProjectSection>

)

export default SectionHMW;

SectionHMW.propTypes = {
  input: PropTypes.object.isRequired,
}
