/** @jsxImportSource theme-ui */
import { Box, useColorMode, Heading, Button, Container } from 'theme-ui';

const colorModes: string[] = ['light', 'dark', 'natural'];

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
    setColorMode(colorModes[(colorModes.indexOf(colorMode) + 1) % colorModes.length])
  };

  return (
    <Box
      sx={{
        py: 2,
        // backdropFilter: 'blur(1rem)',
        bg: 'background',
        width: '100%',
        //position: 'fixed',
        zIndex: 1
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading>Alex Scott</Heading>
        <Button
          variant="emoji"
          aria-label="Toggle color mode"
          onClick={handleToggleColorMode}
        >
          {colorMode === 'light' ? '☀️' : colorMode === 'dark' ? '🌙' : '🌳'}
        </Button>
      </Container>
    </Box>
  );
};

export default Header;