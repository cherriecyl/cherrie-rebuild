import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Layout, Vancouver, Cherry, Plant, ContactFooter, ProjectCardonHome } from '../components'
import website from '../../config/website'
import Img from 'gatsby-image'


const Hero = styled("header")`
  padding-top: 4em;
  padding-bottom: 2em;
  margin-bottom: 4em;
  max-width: 780px;
  h1 {
    margin-bottom: 1em;
  }
  @media (max-width: ${(props) => props.theme.maxwidthiPadPro}) {
    max-width: 85%
  }
  @media (max-width: ${(props) => props.theme.maxwidthTablet}) {
    padding-top: 0em;
  }
`

const BylineContainer = styled("div")`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
  margin-bottom: 4em;

  @media(max-width: ${(props) => props.theme.maxwidthTablet}) {
      left: 0px;
      margin-bottom: 2em;
  }
`

const BylineAvatar = styled("div")`
  display: block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.grey100};
  margin: 10px 20px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.grey500};
  }

  &:hover {
    &::after {
        border: 1px solid ${(props) => props.theme.colors.green900};
        transition: all 300ms ease-in-out;
    }
  }

  @media(max-width: ${(props) => props.theme.maxwidthTablet}) {
    display: none;
}
`

const BylineAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`

const BylineText = styled.div`
  p {
    color: ${(props) => props.theme.colors.grey700};
    line-height: 1.7;
    margin-bottom: 0;
  }
  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    &:hover {
      cursor: pointer;
      transition: all 100ms ease-in-out;
      color: ${(props) => props.theme.colors.green900};   
      background-color: ${(props) => props.theme.colors.green100};
    }
  }
`

const Section = styled("section")`
    display: flex;
    flex-direction: column;

    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

const Main = styled("main")`
  margin-bottom: 10em;
`

const ProjectsContainer = styled("ul")`
    list-style-type: none;
    margin-left: 0;
    max-width:1200px;
    display: grid;
    grid-auto-flow: dense;
    margin:auto;
    grid-template-columns: 10fr 9fr 1fr;
    grid-gap: 5em;

    li:nth-of-type(4n+1) {
        grid-column-start: 2;
        grid-column-end: span 2;
        .ProjectCardImageContainer{
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em -1em 0 ${(props) => props.theme.colors.grey300};
        }
        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            margin-left: 8%;
            margin-right: 2%;
        }
    }

    li:nth-of-type(4n) {
        .ProjectCardImageContainer{
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), 1em 1em 0 ${(props) => props.theme.colors.grey300};
        }
        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            margin-left: 2%;
            margin-right: 8%;
        }
    }

    li:nth-of-type(4n+2) {
        margin-top: 12em;
        grid-row-end: span 2; 
        .ProjectCardImageContainer{
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em 1em 0 ${(props) => props.theme.colors.grey300};
        }
        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            margin-right: 15%;
            margin-left: 5%;
        }
    }

    li:nth-of-type(4n+3) {
        .ProjectCardImageContainer{
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), 1em -1em 0 ${(props) => props.theme.colors.grey300};
        }
        @media(max-width:${(props) => props.theme.maxwidthTablet}) {
            margin-left: 15%;
            margin-right: 5%;
        }
    }

    li:nth-of-type(n) {
        &:hover{
            .ProjectCardImageContainer {
                box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
                transition: all 150ms ease-in-out;
            }
        }
    }

    @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
        grid-gap: 3.5em;
    }
    
    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        grid-template-columns: 1fr;
        li:nth-of-type(n) {
            grid-column-end: span 1;
            margin-top:0;
            grid-column-start: 1;
        }
        grid-gap: 2em;
    }
`

// const WorkAction = styled(Link)`
//     font-weight: 700;
//     text-decoration: none;
//     color: currentColor;
//     transition: all 150ms ease-in-out;
//     margin-left: auto;
//     margin-top: 4em;
//     letter-spacing: 0.02em;
//     font-family: 'Manrope', 'Inter', sans-serif;

//     @media(max-width:${(props) => props.theme.maxwidthTablet}) {
//        margin: 4em auto;
//     }

//     span {
//         margin-left: 0em;
//         display: inline-block;
//         transition: transform 400ms ease-in-out;
//     }

//     &:hover {
//         color: ${(props) => props.theme.colors.green800};
//         transition: all 150ms ease-in-out;

//         span {
//             transform: translateX(8px);
//             -webkit-transform: translateX(8px);
//             opacity: 1;
//             transition: transform 150ms ease-in-out;
//         }
//     }
// `


class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, projects },
    } = this.props
    return (
      <Layout>
          <Hero>
              <h1>I'm Cherrie Lam,&nbsp;<nobr><span aria-hidden="true" role="img"><Cherry/></span></nobr><br/> a product designer focused on inclusive and community-centered digital tools.&nbsp;<nobr><span aria-hidden="true" role="img"><Plant/></span></nobr><br/> <Vancouver/></h1>
              <BylineContainer>
                <a href={homepage.data.byline_link.url} target="_blank" rel="noopener noreferrer">
                <BylineAvatar>
                  <BylineAvatarInner>
                    <Img fixed={homepage.data.byline_image.localFile.childImageSharp.fixed} alt={homepage.data.byline_image.alt}/>
                  </BylineAvatarInner>
                </BylineAvatar>
                </a>
                <BylineText dangerouslySetInnerHTML={{ __html: homepage.data.content.html }} />
              </BylineContainer>
          </Hero>
          <Main id={website.skipNavId}>
            <Section>
              <ProjectsContainer>
                {projects.nodes.map((project) => 
                  (
                  <li key={project.primary.label.text}>
                    <ProjectCardonHome project={project.primary}/>
                  </li>
                ))}
              </ProjectsContainer>
              {/* <WorkAction to={"/work"}>
                  See more work <span>&#8594;</span>
              </WorkAction> */}
            </Section>
          </Main>
          {/* <Listing posts={posts.nodes} /> */}
          <Section>
            <h2>{homepage.data.contact_footer_title.text}</h2>
            <ContactFooter 
              content={homepage.data.contact_footer_content.html}
              links={social}
              landback={homepage.data.land_acknowledgement.html}
            />
          </Section>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    social: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        content {
          html
        }
        contact_footer_content {
          html
        }
        contact_footer_title {
          text
        }
        land_acknowledgement {
          html
        }
        byline_image {
          alt
          localFile {
            childImageSharp {
              fixed(width: 40) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        byline_link {
          url
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    projects: allPrismicProjectBodyLinkItem(sort: {fields: id, order: ASC}) {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
          link_internal
          link_label {
            text
          }
          overline {
            text
          }
          subtitle {
            text
          }
          thumbnail {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          title {
            text
          }
        }
      }
    }
  }
`
