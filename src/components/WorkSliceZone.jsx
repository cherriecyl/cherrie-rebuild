import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SectionProblemSpace, SectionHeaderVideoImages, OverlapGrid, SectionInsightOpps, SectionQuote, SectionBanner, SectionLearnings, SectionStats, Section3Columns, SectionHMW, SectionPrototype, SectionOverlineHeaderCarousel } from '../slices'

export default class WorkSliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'section': // problem space with stat
          return <SectionProblemSpace key={s.id} input={s} />
        case 'section__header__video__images':
          return <SectionHeaderVideoImages key={s.id} input={s} />
        case 'overlap_grid':
          return <OverlapGrid key={s.id} input={s} />
        case 'section__insights_opportunities__side_':
          return <SectionInsightOpps key={s.id} input={s} />
        case 'quote':
          return <SectionQuote key={s.id} input={s} />
        case 'banner':
          return <SectionBanner key={s.id} input={s} />
        case 'section__learnings_with_collapsibles':
          return <SectionLearnings key={s.id} input={s} />
        case 'section__stats':
          return <SectionStats key={s.id} input={s} />
        case 'section__three_columns':
            return <Section3Columns key={s.id} input={s} />
        case 'section__hmw':
          return <SectionHMW key={s.id} input={s} />
        case 'section__prototype_in_action':
            return <SectionPrototype key={s.id} input={s} />
        case 'section__overline_header_carousel':
          return <SectionOverlineHeaderCarousel key={s.id} input={s} />
        default:
          return null
      }
    })
    return <div>{slice}</div>
  }
}

WorkSliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
