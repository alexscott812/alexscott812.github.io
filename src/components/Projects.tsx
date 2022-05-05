import { Box, Heading, Grid, Card, Text } from "theme-ui";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'A description about project 1. A really really cool project!'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'A description about project 2.'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'A description about project 3.'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'A description about project 4.'
    },
  ];

  return (
    <Box mb={6}>
      <Heading mb={4}>💾 Projects</Heading>
      <Grid gap={3} columns={[1, 2]}>
        {projects.map(project => (
          <Card key={project.id}>
            <Heading mb={2}>{project.title}</Heading>
            <Text as="p">{project.description}</Text>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;