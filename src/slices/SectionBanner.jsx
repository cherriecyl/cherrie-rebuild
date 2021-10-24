import React from 'react'
import PropTypes from 'prop-types'
import { Banner } from '../components'


const SectionBanner = ({ input }) => (
    <Banner background={input.primary.background} src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt} showcap={input.primary.figcaption} />
)

export default SectionBanner;

SectionBanner.propTypes = {
  input: PropTypes.object.isRequired,
}
