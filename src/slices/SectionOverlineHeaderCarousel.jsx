import React from 'react'
import PropTypes from 'prop-types'
import { ProjectSection, GridWrap, Lightbox, Carousel, ImgWithCaption, PrototypeContainer } from '../components'
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';

const SectionOverlineHeaderCarousel = ({ input }) => (

  <ProjectSection className={input.primary.background} id={input.primary.section_id}>
      <GridWrap className="columngapS">
          <div className="grid1L grid10I start2I grid12T start1T sectionOverline">
              {`${input.primary.section_overline.text}` == "" ? `` : <h2 className="overline">{input.primary.section_overline.text}</h2>} 
          </div>
          <div className="grid8L start3L grid10I start2I grid12T start1T">
              <h3>{input.primary.section_large_subtitle.text}</h3>
              <div dangerouslySetInnerHTML={ { __html: input.primary.body_text.html} } />
          </div>
          {input.items.map((item) => {
            const itemType = item.type
            const getComponent = () => {
              switch(itemType) {
                case 'img':
                  return <ImgWithCaption src={item.image.localFile.childImageSharp.fluid} className={`${item.img_class.text}` + ` ${item.grid_definition.text}`} alt={item.image.alt} showcap={item.showcap} />;
                case 'lightbox':
                  return <Lightbox boxClass={item.grid_definition.text} imgClass={item.img_class.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} showcap={item.showcap}/>;
                case 'carousel':
                  return <Carousel className={item.grid_definition.text} plugins={['infinite',
                            {
                              resolve: slidesToShowPlugin,
                              options: {
                                numberOfSlides: 2,
                              }
                            },'arrows']}>
                                  {item.image_collection.document[0].data.image_collection.map((i) => (
                                      <Lightbox src={i.image.localFile.childImageSharp.fluid} alt={i.image.alt} imgClass="centerCaption" />
                                  ))}
                          </Carousel>
                case 'video':
                  return <PrototypeContainer className={item.grid_definition.text} device={item.image_collection.document[0].data.device} prototype="video" video={item.image_collection.document[0].data.video} background={item.image_collection.document[0].data.poster}/>
                default:
                  return ``; 
              }
            }
            return (
              <>
                {
                  item.body_text.html == null ? 
                    `` 
                    : 
                    <div className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />
                }
                { getComponent() }
              </>
            )})}
          </GridWrap>
      </ProjectSection>

)

 //                 item.image_collection == null ? 
  //                 <>
  //                   {item.body_text.html == null ? `` : <div className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />}
  //                   {item.type == "img" ? <ImgWithCaption src={item.image.localFile.childImageSharp.fluid} className={`${item.img_class.text}` + ` ${item.grid_definition.text}`} alt={item.image.alt} showcap={item.showcap} /> : <Lightbox boxClass={item.grid_definition.text} imgClass={item.img_class.text} src={item.image.localFile.childImageSharp.fluid} alt={item.image.alt} showcap={item.showcap}/>}
  //                 </>
  //                 : 
  //                 <>
  //                   {item.body_text.html == null ? `` : <div className="grid8L start3L grid10I start2I grid12T start1T" dangerouslySetInnerHTML={ { __html: item.body_text.html} } />}
  //                   <Carousel className={item.grid_definition.text} plugins={[
  //                     'infinite',
  //                     {
  //                       resolve: slidesToShowPlugin,
  //                       options: {
  //                         numberOfSlides: 2,
  //                       }
  //                     },'arrows']}>
  //                           {item.image_collection.document[0].data.image_collection.map((i) => (
  //                               <Lightbox src={i.image.localFile.childImageSharp.fluid} alt={i.image.alt} imgClass="centerCaption" />
  //                           ))}
  //                   </Carousel>
  //                 </>
  //         ))}
  //     </GridWrap>
  // </ProjectSection>

export default SectionOverlineHeaderCarousel;

SectionOverlineHeaderCarousel.propTypes = {
  input: PropTypes.object.isRequired,
}
