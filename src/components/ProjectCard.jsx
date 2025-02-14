import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <Wrapper>
      <ProjectContent>
        <HeaderSection>
          <FeaturedTag>Featured Project</FeaturedTag>
          <ProjectTitle>{project.projectTitle}</ProjectTitle>
        </HeaderSection>
        <MobileImageContainer>
          <ProjectImage
            src={project.imgURL}
            alt="thryft Image preview"
          />
        </MobileImageContainer>
        <ContentSection>
          <ProjectDescription>
            <DescriptionText>{project.projectDesc}</DescriptionText>
          </ProjectDescription>
          <TechStack>
            {project.techStack.map((stack, index) => (
              <TechItem key={index}>{stack}</TechItem>
            ))}
          </TechStack>
          <LinkSection>
            <IconLink
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </IconLink>
            <IconLink
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </IconLink>
          </LinkSection>
        </ContentSection>
      </ProjectContent>
      <DesktopImageContainer>
        <ProjectImage
          src={project.imgURL}
          alt="thryft Image preview"
        />
      </DesktopImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(15, 23, 42, 0.5);
  padding: 1.5rem;
  margin-bottom: 1.3rem;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div``;

const ContentSection = styled.div``;

const FeaturedTag = styled.div`
  color: #34d399;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  color: #e5e7eb;
`;

const ProjectDescription = styled.div`
  background-color: rgba(30, 41, 59, 0.5);
  width: 60%;
  padding: 1.5rem;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescriptionText = styled.p`
  color: #d1d5db;
  font-size: 1.125rem;
  line-height: 1.75;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #9ca3af;
`;

const TechItem = styled.span``;

const LinkSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #9ca3af;
  transition: color 0.2s ease;

  &:hover {
    color: #34d399;
  }
`;

const MobileImageContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
    width: 100%;
  }
`;

const DesktopImageContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 4%;
  margin-top: 1.5rem;
  overflow: hidden;
  width: 360px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default ProjectCard;
