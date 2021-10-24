import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, WorkSliceZone, Title, SEO, ProjectLayout, GridWrap, CollapseWrap, ProjectSection, ImgWithCaption, TextBox } from '../components'
import website from '../../config/website'


const Header = styled("header")`
    padding-bottom: 1vw;
    padding-top: 1vw;
`

const HeroText = styled("div")`
    text-align:center;
    max-width: 700px;
    margin: auto;
    margin-top: 1.5em;
    margin-bottom: 4em;
    font-size: 1.05em;
    h1 {
        font-size: 2.7em;
        margin-top: 1rem;
        margin-bottom: 1rem;
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
          font-size: 2.5em;
        }

        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            font-size: 2.2em;
        }

        @media(max-width:${(props) => props.theme.maxwidthMobile}) {
            font-size: 2em;
        }
    }
    p {
        margin-top: 1.5em;
        font-size: 1.18em;
        line-height: 1.4;
    }
    
`

const ProjectLink = styled("a")`
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
`

const Spec = styled("div")`
  margin-bottom: 2em;
  h2 {
    margin-top: 0.75em;
  }
`

const OverlineWrap = styled("div")`
    margin-bottom: 2em;
    font-size: 0.95em;
    .overline {
      color: ${(props) => props.theme.colors.grey550}
    }
    
`

const Work = ({ data: { prismicWork }, location }) => {
  const { data } = prismicWork
  return (
    <Layout customSEO>
      <SEO
        title={`${data.project.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicWork}
        article
      />
      <ProjectLayout>
          <Header>
              <HeroText>
                  <OverlineWrap>
                    <span className="overline">
                        {data.overline.text}
                    </span>
                  </OverlineWrap>
                  <h1>{data.project.text}</h1>
                  <p>{data.title.text}</p>
                </HeroText>
              <ImgWithCaption className="hero" src={data.hero_banner.localFile.childImageSharp.fluid} alt={data.hero_banner.alt} showcap={false}/>
              <ProjectSection id="details" className="thin">
                <GridWrap className="columngapS dense">
                  <div className="grid7L grid12I row4 start2L start1I">
                    <TextBox className="border">
                        <h2 className="overline">About the project</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.spec_brief.html}}/>
                    </TextBox>
                    <TextBox className="beige spaceAbove spec">
                        <h2 className="overline">Why is this project interesting?</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.spec_interesting.html}}/>
                    </TextBox>
                    </div>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Role &amp; Timeline</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.client_timeframe.html}}/>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Scope</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.spec_role.html}}/>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Team</h2>
                        <CollapseWrap className="team" labeltext={data.spec_team.text}>
                            <div dangerouslySetInnerHTML={{ __html: data.spec_team_description.html}}/>
                        </CollapseWrap>
                    </TextBox>
                    {data.spec_links.length == 0 ? `` : <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">See it live</h2>
                        {data.spec_links.map((link) => (
                            <p key={link.link_label.text}>
                                <ProjectLink href={link.link.url} target="_blank" rel="noreferrer noopener">
                                    {link.link_label.text}
                                </ProjectLink>
                            </p>
                            )
                        )}
                    </TextBox>}
              </GridWrap>
              </ProjectSection>
            </Header>
          <main>
          <WorkSliceZone allSlices={data.body} />
          </main>
          {/* <Headline>
            {data.date} — {categories && <Categories categories={categories} />}
          </Headline>
          <h1>{data.title.text}</h1>
            <PostWrapper id={website.skipNavId}>
                <SliceZone allSlices={data.body} />
                <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
            </PostWrapper> */}
        </ProjectLayout>
    </Layout>
  )
}

export default Work

Work.propTypes = {
  data: PropTypes.shape({
    prismicWork: PropTypes.object.isRequired,
    // works: PropTypes.shape({
    //   nodes: PropTypes.array.isRequired,
    // }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
    query WorkBySlug($uid: String!) {
        prismicWork(uid: { eq: $uid }) {
            uid
            data {
                project {
                    text
                    }
                title {
                    text
                    }
                spec_team_description {
                    html
                }
                spec_team {
                    html
                    text
                }
                spec_role {
                    html
                }
                spec_brief {
                    html
                }
                spec_interesting {
                    html
                }
                spec_links {
                    link {
                        url
                    }
                    link_label {
                        text
                    }
                }
                seo_description {
                    text
                }
                overline {
                    text
                }
                hero_banner {
                    alt
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 2000, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                client_timeframe {
                    html
                }
                body {
                    ... on PrismicWorkBodySection {
                      id
                      slice_type
                      primary {
                        section_id
                        background
                        header_image {
                          url
                          localFile {
                            id
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                        }
                        body_text {
                          html
                        }
                        section_large_subtitle {
                          text
                        }
                        section_overline {
                          text
                        }
                      }
                      items {
                        body_text {
                          html
                        }
                        focus_text {
                          text
                        }
                        focus_text_class {
                          text
                        }
                      }
                    }

                    ... on PrismicWorkBodySectionHeaderVideoImages {
                        id
                        slice_type
                        items {
                          grid_definition {
                            text
                          }
                          image {
                            localFile {
                              childImageSharp {
                                fluid(maxWidth: 1024) {
                                    ...GatsbyImageSharpFluid
                                }
                              }
                            }
                            alt
                          }
                        }
                        primary {
                          background
                          video {
                            url
                          }
                          video_caption {
                            text
                          }
                          video_grid_definition {
                            text
                          }
                          body_text {
                            html
                          }
                          section_id
                          section_large_subtitle {
                            text
                          }
                          section_overline {
                            text
                          }
                        }
                    }

                    ... on PrismicWorkBodyOverlapGrid {
                        slice_type
                        primary {
                          background
                          section_id
                          section_overline {
                            text
                          }
                        }
                        items {
                          box_background
                          box_body {
                            html
                          }
                          box_title {
                            text
                          }
                          indented_link {
                            html
                          }
                          image {
                            alt
                            localFile {
                              childImageSharp {
                                fluid(maxWidth: 1024) {
                                    ...GatsbyImageSharpFluid
                                }
                              }
                            }
                          }
                        }
                    }
                    ... on PrismicWorkBodySectionInsightsOpportunitiesSide {
                        id
                        slice_type
                        primary {
                          background
                          body_text {
                            html
                          }
                          section_id
                          section_large_subtitle {
                            text
                          }
                          section_overline {
                            text
                          }
                        }
                        items {
                          box_background
                          box_body {
                            html
                          }
                          box_title {
                            text
                          }
                        }
                    }
                    ... on PrismicWorkBodyQuote {
                        id
                        slice_type
                        primary {
                          avatar {
                            localFile {
                              childImageSharp {
                                fluid(maxWidth: 500) {
                                    ...GatsbyImageSharpFluid
                                }
                              }
                            }
                            alt
                          }
                          quote_attribute {
                            text
                          }
                          quote_text {
                            html
                          }
                          background
                        }
                    }
                    ... on PrismicWorkBodySectionOverlineHeaderCarousel {
                      id
                      slice_type
                      primary {
                        background
                        gridwrap_class {
                          text
                        }
                        body_text {
                          html
                        }
                        section_id
                        section_large_subtitle {
                          text
                        }
                        section_overline {
                          text
                        }
                      }
                      items {
                        image_collection {
                          document {
                            ... on PrismicCarousel {
                              data {
                                num_slides
                                image_collection {
                                  image {
                                    alt
                                    localFile {
                                      childImageSharp {
                                        fluid(maxWidth: 1024) {
                                          ...GatsbyImageSharpFluid
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            ... on PrismicVideoPrototype {
                              data {
                                device {
                                  localFile {
                                    childImageSharp {
                                      fluid(maxWidth: 1024) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                  }
                                }
                                video {
                                  url
                                }
                                poster {
                                  localFile {
                                    childImageSharp {
                                      fluid(maxWidth: 1024) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        image {
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                          url
                        }
                        grid_definition {
                          text
                        }
                        img_class {
                          text
                        }
                        body_text {
                          html
                        }
                        showcap
                        type
                        video {
                          url
                        }
                      }
                    }
                    ... on PrismicWorkBodySectionPrototypeInAction {
                      id
                      slice_type
                      primary {
                        background
                        section_id
                        section_large_subtitle {
                          text
                        }
                        section_overline {
                            text
                        }
                        body_text {
                          html
                        }
                      }
                      items {
                        feature_title {
                          text
                        }
                        feature_body {
                          text
                          html
                        }
                        prototype
                        prototype_background {
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          url
                          alt
                        }
                        prototype_asset {
                          url
                        }
                        prototype_container {
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                        }
                      }
                    }
                    ... on PrismicWorkBodySectionHmw {
                      id
                      slice_type
                      primary {
                        section_id
                        section_large_subtitle {
                          html
                        }
                        section_overline {
                          text
                        }
                        background
                        background_image_side {
                          localFile {
                            id
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                  ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                          url
                        }
                      }
                    }
                    ... on PrismicWorkBodySectionStats {
                      id
                      items {
                        stat {
                          html
                        }
                      }
                      primary {
                        background
                        body_text {
                          html
                        }
                        section_id
                        section_large_subtitle {
                          text
                        }
                        section_overline {
                          text
                        }
                      }
                      slice_type
                    }
                    ... on PrismicWorkBodySectionLearningsWithCollapsibles {
                      id
                      primary {
                        section_id
                        section_overline {
                          text
                        }
                        section_large_subtitle {
                          text
                        }
                        background
                        body_text {
                          html
                        }
                        image_grid_definition {
                          text
                        }
                        learning_grid_definition {
                          text
                        }
                        image {
                          alt
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                      }
                      items {
                        learning_body {
                          html
                        }
                        learning_title {
                          text
                        }
                        number
                        type
                        image {
                          alt
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                        grid_definition {
                          text
                        }
                      }
                      slice_type
                    }

                    ... on PrismicWorkBodyStickynav {
                      id
                      items {
                        link_title {
                          text
                        }
                        section_id
                      }
                      slice_type
                    }
                    ... on PrismicWorkBodyBanner {
                      id
                      slice_type
                      primary {
                        figcaption
                        image {
                          alt
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 2000) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                      }
                    }

                    ... on PrismicWorkBodySectionDivider {
                      id
                      slice_type
                      primary {
                        background
                        section_id
                        section_overline {
                          text
                        }
                      }
                      items {
                        anchor_id
                        link_text {
                          html
                          text
                        }
                      }
                    }

                    ... on PrismicWorkBodySectionThreeColumns {
                      id
                      slice_type
                      primary {
                        body_text {
                          html
                        }
                        columns_header {
                          html
                        }
                        image {
                          url
                          alt
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                        }
                        img_grid_definition {
                          text
                        }
                        section_id
                        section_large_subtitle {
                          text
                        }
                        section_overline {
                          text
                        }
                        text_grid_definition {
                          text
                        }
                      }
                      items {
                        column_body {
                          text
                          html
                        }
                        image {
                          url
                          localFile {
                            childImageSharp {
                              fluid(maxWidth: 1024) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          alt
                        }
                      }
                    }
                }
            }
        }
    }
`
