/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import theme from './theme/theme'
import Main from './pages/Main'
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main />
  </ThemeProvider>
);

export default App;