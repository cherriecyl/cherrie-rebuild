import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

const ProjectCardContainer = styled("a")`
    display: grid;
    grid-template-columns: 1fr;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;
    border-radius: 3px;

    @media(max-width:${(props) => props.theme.maxwidthMobile}) {
        margin-bottom: 1.5em;
    }

    &:hover {
        .ProjectCardContent {
            box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
            transition: all 300ms ease-in-out;
            transform: translateY(-2px);
            -webkit-transform: translateY(-2px);
            background: white;
        }

        .ProjectCardAction {
            color: ${(props) => props.theme.colors.green800};
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                -webkit-transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ProjectCardImageContainer::before {
            opacity: 0.7;
            transition: all 150ms ease-in-out;
        }

        .ProjectCardImageContainer {
            transform: translateY(-2px);
            -webkit-transform: translateY(-2px);
            transition: all 300ms ease-in-out;
            border-radius: 3px 3px 0 0;
        }

        p.external::after {
            transform: translateX(4px) translateY(-2px);
            -webkit-transform: translateX(4px) translateY(-2px);
            transition: transform 150ms ease-in-out;
        }
        p.internal::after {
            transform: translateX(8px);
            -webkit-transform: translateX(8px);
            transition: transform 150ms ease-in-out;
        }
    }
`

const ProjectCardContent = styled("div")`
    padding: 3em 2.5em 3em 2.5em;
    position: relative;
    border-radius: 0 0 3px 3px;

    @media(max-width:${(props) => props.theme.maxwidthiPadPro}) {
        padding: 2.5em 2em 2.5em 2em;
    }
`

const ProjectCardCategory = styled("p")`
    text-transform: uppercase;
    margin-bottom: 1.5em;
`

const ProjectCardTitle = styled("h3")`
    margin-top:0em;
    margin-bottom: 0.8em;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: ${(props) => props.theme.colors.grey700};

    p {
        line-height: 1.7;
        margin-bottom: 1.5em;
    }
`

const ProjectCardImageContainer = styled("div")`
    background: ${(props) => props.theme.colors.grey200};
    overflow: hidden;
    position: relative;
    display: grid;
    border-radius: 3px;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 99;
        background: ${(props) => props.theme.colors.green200};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }
`

const ProjectCardAction = styled("div")`
    font-weight: 700;
    text-decoration: none;
    color: currentColor;
    transition: all 150ms ease-in-out;

    p {
        display: inline-block;
        margin-bottom:0;
        margin-top:0;
        font-family: 'Manrope', 'Inter var', 'Inter', sans-serif;
    }

    p.external::after {
        content: '↗';
        display: inline-block;
        margin-left: 0.4em;
        transition: transform 400ms ease-out;
        transform: translateX(0px) translateY(2px);
    }

    p.internal::after {
        content: '→';
        display: inline-block;
        margin-left: 0.4em;
        transition: transform 400ms ease-out;
    }
`

const ProjectCard = ({ project }) => (
    <ProjectCardContainer className="ProjectCardContainer" href=
        { `${ project.link_internal ? `/work` : ``}` + `${project.link.url}` }>
        <ProjectCardImageContainer className="ProjectCardImageContainer">
            <Img 
                fluid={project.thumbnail.localFile.childImageSharp.fluid} 
                alt={project.thumbnail.alt} 
                objectFit="cover"
                objectPosition="50% 50%"
            />
        </ProjectCardImageContainer>
        <div><ProjectCardContent className="ProjectCardContent">
            <ProjectCardCategory className="overline">
                {project.overline.text}
            </ProjectCardCategory>
            <ProjectCardTitle>
                {project.title.text}
            </ProjectCardTitle>
            <ProjectCardBlurb>
                <p>{project.subtitle.text}</p>
            </ProjectCardBlurb>
            <ProjectCardAction className="ProjectCardAction">
                <p className={ project.link_internal ? `internal` : `external` }>{project.link_label.text}</p>
            </ProjectCardAction>
        </ProjectCardContent>
        </div>
    </ProjectCardContainer>
)

export default ProjectCard;

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired,
}