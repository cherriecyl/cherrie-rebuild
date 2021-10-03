import React from 'react'
import PropTypes from 'prop-types'
import { Banner } from '../components'
import styled from "@emotion/styled";

const BannerWrap = styled("div")`
  padding-top: 7vw;
  padding-bottom: 7vw;
`


const SectionBanner = ({ input }) => (
  <BannerWrap>
    <Banner background={input.primary.background} src={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt} showcap={input.primary.figcaption} />
  </BannerWrap>
)

export default SectionBanner;

SectionBanner.propTypes = {
  input: PropTypes.object.isRequired,
}
