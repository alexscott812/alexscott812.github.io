/** @jsxImportSource theme-ui */
import { Container, Flex, Heading } from 'theme-ui'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Main = () => {

  return (
    <Container pt={6}>
      <Flex sx={{ alignContent: 'center', justifyContent: 'center' }}>
        <Hero />
      </Flex>
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Main;