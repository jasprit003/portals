import styled from 'styled-components';
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandCpp,
  IconCoffee,
  IconBrandPython,
  IconApi,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandAdobePhotoshop,
  IconBrandSublimeText,
  IconTerminal2,
} from '@tabler/icons-react';

const defaultExtraSkills = [
  'HTML5',
  'CSS',
  'C++',
  'Java',
  'Python',
  'RestFul API',
  'Git',
  'GitHub',
  'Linux',
  'Docker',
];

const ExtraSkills = ({ list = defaultExtraSkills }) => {
  const iconMapping = {
    HTML5: IconBrandHtml5,
    CSS: IconBrandCss3,
    'C++': IconBrandCpp,
    Java: IconCoffee,
    Python: IconBrandPython,
    'RestFul API': IconApi,
    Git: IconBrandGit,
    GitHub: IconBrandGithub,
    // Linux: IconBrandLinux,
    Docker: IconBrandDocker,
    Figma: IconBrandFigma,
    'VS Code': IconBrandVscode,
    'Photoshop': IconBrandAdobePhotoshop,
    Sublime: IconBrandSublimeText,
    Hyper: IconTerminal2,
  };

  return (
    <Grid>
      {list.map((skill, index) => {
        const IconComponent = iconMapping[skill];
        return (
          <GridItem key={`${skill}-${index}`}>
            {IconComponent && (
              <IconWrapper>
                <IconComponent
                  stroke={1.25}
                  color="var(--accent)"
                />
              </IconWrapper>
            )}
            {skill}
          </GridItem>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  padding: 1rem;
  border: 1px solid var(--accent);
  display: flex;
  align-items: center;
  transition: background-color 250ms ease-in-out;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

export default ExtraSkills;
