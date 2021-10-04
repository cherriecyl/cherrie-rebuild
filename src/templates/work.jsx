import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, WorkSliceZone, Title, SEO, ProjectLayout, GridWrap, TextBox, CollapseWrap, ProjectSection, Banner, FadeUp, ImgWithCaption, PrototypeContainer, Carousel } from '../components'
import website from '../../config/website'
import Img from 'gatsby-image'

const Header = styled("header")`
    padding-bottom: 1vw;
    padding-top: 1vw;
`

const HeroText = styled("div")`
    text-align:center;
    max-width: 700px;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 4em;
    h1 {
        font-size: 2.5em;
        margin-top: 1rem;
        margin-bottom: 1rem;
        @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
          font-size: 2.3em;
        }

        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            font-size: 2em;
        }

        @media(max-width:${(props) => props.theme.maxwidthMobile}) {
            font-size: 2em;
        }
    }
    p {
      font-size: 1.1em;
    }
`
const ProtoWrap = styled("div")`
    z-index: 2;
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
                  <span className="overline">
                      {data.overline.text}
                  </span>
                  <h1>{data.project.text}</h1>
                  <p className="focus">{data.title.text}</p>
              </HeroText>
                        {/* { `${data.title.text} == mobile` ? 
                            <ProtoWrap className="grid4L start5L grid10T start2T" >
                              <FadeUp delay="1">
                              <PrototypeContainer className="heroOverlap smaller" device={data.hero_prototype_device} prototype="video" video={data.hero_prototype_video.raw} background={data.hero_prototype_poster}/>
                            </FadeUp>
                            </ProtoWrap>
                            : 
                            <></>
                        } */}
              <ImgWithCaption className="hero" src={data.hero_banner.localFile.childImageSharp.fluid} alt={data.hero_banner.alt} showcap={false}/>
          </Header>
          <main>
          <ProjectSection id="details" className="thin">
              <GridWrap className="columngapS rowgapS">
                    <TextBox className="beige grid6L grid12I row2">
                        <p className="focus">{data.spec_brief_header.text}</p>
                        <div dangerouslySetInnerHTML={{ __html: data.spec_brief.html}}/>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Role &amp; Timeline</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.client_timeframe.html}}/>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Responsibilities</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.spec_role.html}}/>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">Team</h2>
                        <CollapseWrap className="inline" id="team" labeltext={data.spec_team.text}>
                            <div dangerouslySetInnerHTML={{ __html: data.spec_team_description.html}}/>
                        </CollapseWrap>
                    </TextBox>
                    <TextBox className="grid3L grid6I grid12M projectSpecs">
                        <h2 className="overline">See it live</h2>
                        {data.spec_links.map((link) => (
                            <p key={link.link_label.text}>
                                <ProjectLink href={link.link.url}>
                                    {link.link_label.text}
                                </ProjectLink>
                            </p>
                            )
                        )}
                    </TextBox>
              </GridWrap>
          </ProjectSection>
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
                spec_brief_header {
                    text
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
                            fluid(maxWidth: 2000) {
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
                        header_image {
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
                            data {
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
                        grid_definition {
                          text
                        }
                        img_class {
                          text
                        }
                        body_text {
                          html
                        }
                      }
                    }
                    ... on PrismicWorkBodySectionPrototypeInAction {
                      id
                      slice_type
                      primary {
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
                      }
                    }
                    ... on PrismicWorkBodySectionProcessStart {
                      id
                      slice_type
                      primary {
                        section_id
                        section_large_text {
                          text
                        }
                        background
                      }
                    }
                }
            }
        }
    }
`
