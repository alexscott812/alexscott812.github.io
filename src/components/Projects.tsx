import { Box, Heading, Grid, Card, Text, Image, Badge } from "theme-ui";
import CardBody from "./CardBody";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HeadyNet',
    description: 'A full stack web app to explore all Grateful Dead shows, songs, and venues ever played. Register to rate and review your favorite shows.',
    technologies: ['React', 'NodeJS', 'Express', 'MongoDB', 'Chakra-UI'],
    image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
  },
  {
    id: 2,
    title: 'notes-js',
    description: 'A note taking web app that persists data to local storage and syncs across browser tabs and windows.',
    technologies: ['React', 'TypeScript', 'Chakra-UI', 'Netlify'],
    image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'My portfolio site to showcase my work (this site right here).',
    technologies: ['React', 'TypeScript', 'Theme-UI'],
    image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'A description about project 4.',
    technologies: ['React', 'Node', 'SQL'],
    image: 'https://archwaycicero.greatheartsamerica.org/wp-content/uploads/sites/24/2016/11/default-placeholder.png'
  },
];

const Projects = () => {
  return (
    <Box mb={6}>
      <Heading mb={4} sx={{ fontSize: 4 }}>💾 Projects</Heading>
      <Grid gap={3} columns={[1, 2]}>
        {projects.map(project => (
          <Card key={project.id} variant="outline">
            <Image variant="cardTop" src={project.image} />
            <CardBody>
              <Heading mb={2} sx={{ fontSize: 3 }}>{project.title}</Heading>
              <Text as="p" mb={2}>{project.description}</Text>
              {project.technologies.map(technology => (
                <Badge key={technology} mr={1}>{technology}</Badge>
              ))}
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;