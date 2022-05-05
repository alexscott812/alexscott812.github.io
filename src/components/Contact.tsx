import { Box, Heading, Card, Text, Button } from "theme-ui";

const Contact = () => {
  return (
    <Box>
      <Heading mb={4}>📩 Contact</Heading>
      <Card variant="sunken" p={[3,4,5]}>
        <Heading mb={2}>Get in touch</Heading>
        <Text as="p" mb={3}>Want to get in touch? Send me an email!</Text>
        <Button>Contact</Button>
      </Card>
    </Box>
  );
}

export default Contact;
