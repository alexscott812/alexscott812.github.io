/** @jsxImportSource theme-ui */
import { Container } from 'theme-ui'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <Container pt={6}>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Main;