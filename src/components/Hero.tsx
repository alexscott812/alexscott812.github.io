/** @jsxImportSource theme-ui */
import { Box, Card, Heading, Text, Button } from 'theme-ui';

const HeroCard = () => {
  return (
    <Box mb={6}>
      <Card variant='sunken' p={[3,4,5]}>
        <Heading sx={{ fontSize: [4,5,6], mb: 2 }}>Hi, I'm Alex. 👋</Heading>
        <Text as='p' mb={3}>
          I'm a front end engineer currently based in Brooklyn, NY. I'm a front end engineer currently based in Brooklyn, NY. I'm a front end engineer currently based in Brooklyn, NY. 
        </Text>
        <Button>
          View Work
        </Button>
      </Card>
    </Box>
  );
};

export default HeroCard;