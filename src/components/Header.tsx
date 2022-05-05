/** @jsxImportSource theme-ui */
import { Box, useColorMode, Heading, Button, Container } from 'theme-ui';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  };

  return (
    <Box
      sx={{
        py: 3,
        backdropFilter: 'blur(1rem)',
        width: '100%',
        position: 'fixed',
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
          {`${colorMode === 'light' ? '☀️' : '🌙' }`}
        </Button>
      </Container>
    </Box>
  );
};

export default Header;