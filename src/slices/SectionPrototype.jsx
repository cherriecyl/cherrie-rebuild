import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, PrototypeContainer,Lightbox } from '../components'
import styled from "@emotion/styled";

const TextWrap = styled("div")`
  margin-bottom: 2em;
`

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
`

const SectionPrototype = ({ input }) => {
  return (
    <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="dense">
            <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              <h2 className="overline">{input.primary.section_overline.text}</h2>
            </div>
            <div className="grid8L grid10I start3L start2I grid12T start1T">
                <h3>{input.primary.section_large_subtitle.text}</h3>
                <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
            </div>
            {input.items.map((item, index) => {
              const itemType = item.prototype
              const getComponent = () => {
                switch(itemType) {
                  case 'lightbox':
                    return (
                    <React.Fragment key={item.prototype_background.localFile.uid}><Lightbox key={item.prototype_background.localFile.uid} boxClass={"grid4L grid5I grid12T start1T spaceBelow" + `${ index % 2 ? ` start7L`: ` start3L start2I`}` }  src={item.prototype_background.localFile.childImageSharp.fluid} alt={item.prototype_background.alt}/>
                    <TextWrap key={item.feature_body.html} className={"grid4L grid5I grid12T start1T middle" + `${ index % 2 ? ` start3L start2I`: ``}`}>
                    <h4>{item.feature_title.text}</h4>
                    <div dangerouslySetInnerHTML={ { __html: item.feature_body.html} } />
                    </TextWrap>
                    </React.Fragment>);
                  case 'video_screen':
                    return (
                    <React.Fragment key={item.prototype_background.localFile.uid}>
                    <VideoContainer key={item.prototype_background.localFile.uid} className={"grid8L grid12T start1T middle spaceBelow" + `${ index % 2 ? ` start5L`: ``}`}>
                      <video poster={item.prototype_background.url} width="100%" autoPlay loop muted controls><source src={item.prototype_asset.url} type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video>
                      <figcaption>{item.prototype_background.alt}</figcaption>
                    </VideoContainer>
                    <TextWrap key={item.feature_body.text} className={"grid4L grid12T start1T middle" + `${ index % 2 ? ` start1L`: ``}`}>
                    <h4>{item.feature_title.text}</h4>
                    <p>{item.feature_body.text}</p> 
                    </TextWrap>
                    </React.Fragment>);
                  default: 
                    return (
                    <React.Fragment key={item.prototype_background.localFile.uid}><PrototypeContainer key={item.prototype_background.localFile.uid} className={"grid4L grid5I grid12T start1T spaceBelow" + `${ index % 2 ? ` start7L`: ` start3L start2I`}` } device={item.prototype_container} prototype={item.prototype} video={item.prototype_asset} background={item.prototype_background}/>
                    <TextWrap key={item.feature_body.text} className={"grid4L grid5I grid12T start1T middle" + `${ index % 2 ? ` start3L start2I`: ``}`}>
                    <h4>{item.feature_title.text}</h4>
                    <p>{item.feature_body.text}</p> 
                    </TextWrap></React.Fragment>
                    );
                  }
              }
              return (
              <React.Fragment key={index}>
                { getComponent() }
              </React.Fragment>
            )})}
        </GridWrap>
    </ProjectSection> 
  )           
};

export default SectionPrototype;

SectionPrototype.propTypes = {
  input: PropTypes.object.isRequired,
}
