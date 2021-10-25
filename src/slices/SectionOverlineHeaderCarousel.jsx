import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox, Carousel, ImgWithCaption, PrototypeContainer, TextBox } from '../components'
import styled from '@emotion/styled';

const VideoContainer = styled("figure")`
    display: flex;
    flex-direction: column;
    &.stretch {
        div {
            height: 100%;
        }
    }
    margin: 0;
    figcaption {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        color: ${(props) => props.theme.colors.grey700};
        font-size: 0.9em;
        font-family: 'Atkinson Hyperlegible', 'Inter', sans-serif;
    }
    &.centerCaption {
        figcaption {
            text-align: center;
        }
    }
    &.topCaption {
        flex-direction: column-reverse;
    }
    video {
        border-radius: 4px;
        overflow: hidden;
    }
    &.prototypeCaption {
      figcaption {
          margin-top: 1.5em;
      }
  }
`

const TextWrap = styled("div")`
    h5 {
      margin-top: 4em;
      font-family: 'Manrope', 'Inter', sans-serif;
      text-transform: none;
      letter-spacing: 0;
    }
`


const SectionOverlineHeaderCarousel = ({ input }) => {   
  return(
  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className={`columngapS projSubHeading ` + `${input.primary.gridwrap_class.text}`}>
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
          </div>
          {input.primary.section_large_subtitle.text == `` ? `` : <div className="grid8L start3L grid10I start2I grid12T start1T">
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>}
          {input.items.map((item, index) => {
            const itemType = item.type
            const bodyText = () => (item.body_text.html == null || itemType == 'textbox' || itemType == 'column' ? 
                ``
                : 
                <TextWrap className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } key={item.body_text.html}/>
            )
            const getComponent = () => {
              switch(itemType) {
                case 'img':
                  return <ImgWithCaption key={item.image.localFile.uid} src={item.image.localFile.childImageSharp.fluid} className={`${item.img_class.text}` + ` ${item.grid_definition.text}`} alt={item.image.alt} showcap={item.showcap}/> ;
                case 'lightbox':
                  return <Lightbox key={item.image.alt} boxClass={item.grid_definition.text} imgClass={item.img_class.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} showcap={item.showcap} lbBkg={item.img_class.text}/>;
                case 'carousel':
                  return <Carousel className={item.grid_definition.text} slides={item.image_collection.document[0].data.num_slides}>
                          {item.image_collection.document[0].data.image_collection.map((i) => (
                              <Lightbox key={i.image.alt} src={i.image.localFile.childImageSharp.fluid} alt={i.image.alt} imgClass="centerCaption" lbBkg={item.img_class.text}/>
                          ))}
                      </Carousel>
                case 'video':
                  return <VideoContainer key={item.image_collection.document[0].data.poster.localFile.uid} className={`centerCaption prototypeCaption ` + `${item.grid_definition.text}`}><PrototypeContainer device={item.image_collection.document[0].data.device} prototype="video" video={item.image_collection.document[0].data.video} background={item.image_collection.document[0].data.poster}/>{item.showcap ? <figcaption className="video">{item.image.alt}</figcaption> : ``}</VideoContainer>
                case 'video_screen':
                  return <VideoContainer key={item.video.url} className={`${item.grid_definition.text}` + ` ${item.img_class.text}`}>
                    <video poster={item.image.url} width="100%" autoPlay loop muted controls><source src={item.video.url} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                    {item.showcap ? <figcaption>{item.image.alt}</figcaption> : ``}
                  </VideoContainer>
                case 'column':
                  return <TextWrap key={item.body_text.html} className={`${item.grid_definition.text}` + ` ${item.img_class.text}`} dangerouslySetInnerHTML={ { __html: item.body_text.html} } />
                case 'textbox':
                  return <TextBox key={item.body_text.html} className={`${item.grid_definition.text}` + ` ${item.img_class.text}`}><TextWrap dangerouslySetInnerHTML={ { __html: item.body_text.html} } /></TextBox>
                default:
                  return ``; 
              }
            }
            return (
              <React.Fragment key={index}>
                { bodyText() }
                { getComponent() }
              </React.Fragment>
            )})}
          </GridWrap>
      </ProjectSection>

)}

export default SectionOverlineHeaderCarousel;

SectionOverlineHeaderCarousel.propTypes = {
  input: PropTypes.object.isRequired,
}
