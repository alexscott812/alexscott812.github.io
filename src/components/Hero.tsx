/** @jsxImportSource theme-ui */
import { Box, Card, Heading, Text, Button } from 'theme-ui';
import { keyframes } from '@emotion/react';

const wave = keyframes`
  0% { transform: rotate(0.0deg); }
  10% { transform: rotate(14.0deg); }
  20% { transform: rotate(-8.0deg); }
  30% { transform: rotate(14.0deg); }
  40% { transform: rotate(-4.0deg); }
  50% { transform: rotate(10.0deg); }
  60% { transform: rotate(0.0deg); }
  100% { transform: rotate(0.0deg); }
`;

const HeroCard = () => {
  return (
    <Box mb={6}>
      <Card variant="sunken" p={[3,4,5]}>
        <Heading sx={{ fontSize: [4,5,6], mb: 2 }}>
          {`Hi, I'm Alex. `}
          <span sx={{ display: 'inline-block', animation: `${wave} 3s linear infinite` }}>
            👋
          </span>
        </Heading>
        <Text as="p" mb={3}>
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