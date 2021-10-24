import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, Listing, Wrapper, Logo, ContactFooter, SEO } from '../components'
import Img from 'gatsby-image';
import website from '../../config/website'

const AboutTitle = styled("div")`
    padding-top: 2.5em;
    padding-bottom: 3em;
    max-width: 500px;

    h1 {
        margin-bottom: 0.5em;
    }

    @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
        max-width: 50%;
    }

    @media(max-width:${(props) => props.theme.maxwidthMobile}) {
        padding-top: 0em;
        max-width: 80%;
    }
`

const AboutContainer = styled("div")`
    margin-bottom: 10em;
    display: grid;
    grid-template-columns: 300px 1fr 1fr;
    grid-gap: 3em;
    .last {
        margin-top:2.3em;
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

    @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
        margin-top: 0em;
        margin-left: 0;
        grid-template-columns: 300px 1fr;
        row-gap:0em;
        .last {
            grid-column-start: 2;
            margin-top:0;
        }
        .columnstart {
            margin-top:0;
        }
    }

    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        margin-bottom: 4em;
        margin-left: 0;
        grid-template-columns: 1fr;
        .last {
            grid-column-start: 1;
        }
    }
`

const AboutProfile = styled("div")`
    width: 250px;
    height: 320px;
    .profile {
        margin-bottom:2em;
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1), -1em -1em 0 ${(props) => props.theme.colors.grey300};
        margin-top: 20px;
        margin-left: 20px;
        position: absolute;
        width: 230px;
        height: auto;
        z-index:100;
        border-radius: 3px;
    }

    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        display: block;
        margin: auto;
    }

`

const Section = styled("div")`
    margin-bottom: 10em;
    display: flex;
    flex-direction: column;

    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        margin-bottom: 4em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    .middle {
        text-align: center;
    }
`

const ImgTileContainer = styled("div")`
    position: relative;
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding-left: 1em;
    padding-right: 1em;
    right: 50%;
    height: 18vw;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 1em;

    &:hover > .image:not(:hover) {
        transition: all 400ms ease-in-out;
        opacity:0.6;
    }

    .image {
        overflow: hidden;
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    }

    img {
        display: block;
        width: 100%; 
    }

    .big {
        grid-column-end: span 2;
        grid-row-end: span 3;
        &:hover {
            transform: rotate(3deg) scale(1.2);
            -webkit-transform: rotate(3deg) scale(1.2);
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
            transition: all 400ms ease-in-out;
            z-index: 999;
        }
    }

    .med {
        grid-column-end: span 2;
        grid-row-end: span 2;
        &:hover {
            transform: rotate(-2deg) scale(1.3);
            -webkit-transform: rotate(-2deg) scale(1.3);
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
            transition: all 400ms ease-in-out;
            z-index: 999;
        }
    }

    .small {
        &:hover {
            transform: rotate(-3deg) scale(1.8);
            -webkit-transform: rotate(-3deg) scale(1.8);
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.3);
            transition: all 400ms ease-in-out;
            z-index: 999;
        }
    }

    @media(max-width:${(props) => props.theme.maxwidthTablet}) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(8, auto);
        height:130vw;
    }
`

const LogoContainer = styled("div")`
    text-align: center;
    max-width: 400px;
    display:block;
    margin:auto;

    h2 {
        margin-top: 1.5em;
    }
`

class About extends Component {
    render() {
      const {
            data: { about, social, homepage },
        } = this.props
        return (
            <Layout customSEO>
                {/* <SEO
                    title={`${data.title.text} | ${website.titleAlt}`}
                    pathname={location.pathname}
                    desc={data.description}
                    node={prismicPost}
                /> */}
                <AboutTitle>
                    <h1>{about.data.title.text}</h1>
                </AboutTitle>
                <main>
                <AboutContainer>
                    <div>
                        <AboutProfile>
                            <Img fluid={about.data.image_bio.localFile.childImageSharp.fluid} className="profile" alt={about.data.image_bio.alt}/>
                        </AboutProfile>
                    </div>
                    <div>
                        <h2 className="overline">{about.data.section_title_bio.text}</h2>
                        <div dangerouslySetInnerHTML={{ __html: about.data.bio_column_1.html}} />
                    </div>
                    <div className="last">
                        <div className="columnstart" dangerouslySetInnerHTML={{ __html: about.data.bio_column_2.html}} />
                    </div>
                </AboutContainer>
                <Section>
                    <h2 className="overline">
                        {about.data.section_title_images.text}
                    </h2>
                    <ImgTileContainer>
                        <div className="big image">
                            <Img fluid={about.data.images_1.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="small image">
                            <Img fluid={about.data.images_2.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="small image">
                            <Img fluid={about.data.images_3.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="big image">
                            <Img fluid={about.data.images_4.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="med image">
                            <Img fluid={about.data.images_5.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="big image">
                            <Img fluid={about.data.images_6.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="med image">
                            <Img fluid={about.data.images_7.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="small image">
                            <Img fluid={about.data.images_8.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                        <div className="small image">
                            <Img fluid={about.data.images_9.localFile.childImageSharp.fluid} alt={about.data.images_1.alt}/>
                        </div>
                    </ImgTileContainer>
                </Section>
                <Section>
                    <LogoContainer>
                    <Logo/>
                    <h2 className="overline">
                        {about.data.section_title_name.text}
                    </h2>
                    <div className="columnstart" dangerouslySetInnerHTML={{ __html: about.data.name_description.html}}/>
                </LogoContainer>
                </Section>
                <Section>
                    <h2>{homepage.data.contact_footer_title.text}</h2>
                    <ContactFooter 
                    content={homepage.data.contact_footer_content.html}
                    links={social}
                    landback={homepage.data.land_acknowledgement.html}
                    />
                </Section>
                </main>
            </Layout>
        )
    }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
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
    about: prismicAbout {
        data {
          title {
            text
          }
          section_title_name {
            text
          }
          section_title_images {
            text
          }
          section_title_bio {
            text
          }
          name_description {
            html
          }
          images_9 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_8 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_7 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_6 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_5 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_4 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_3 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_2 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          images_1 {
            alt
            localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          image_bio {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
          bio_column_2 {
            html
          }
          bio_column_1 {
            html
          }
        }
      }
    }
`