import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: '02',
    imgURL: '../src/assets/project_watcher.png',
    projectTitle: 'WATCHER',
    projectDesc:
      'Watcher is a React movie app styled with styled-components, powered by OMDB API. Features real-time search, a responsive, intuitive interface for seamless browsing. Built for cinephiles who crave simplicity and style.',
    techStack: ['React.js', 'OMDB API', 'Rest API', 'style-components'],
    githubLink: 'https://github.com/jasprit003/watcher-movie-app',
    liveLink: 'https://watcher-io.netlify.app',
  },
  {
    id: '01',
    imgURL: '../src/assets/project_thryft.png',
    projectTitle: 'thryft',
    projectDesc:
      'This project is built using ReactJS and styled-components to achieve a sleek, modern interface. The design focuses on clean aesthetics and smooth, responsive interactions, resulting in a visually engaging and user-friendly experience.',
    techStack: ['React.js', 'Firebase', 'Stripe', 'style-components'],
    githubLink: 'https://github.com/jasprit003/thryft-eccomerce-app',
    liveLink: 'https://thryft-io.netlify.app',
  },
];

const Projects = () => {
  const tag = 'projects';
  return (
    <Container
      id={tag}
      heading={tag}
    >
      <Wrapper>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div``;

export default Projects;
