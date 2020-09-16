import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersisteState from './utils/usePersisteState';

import Header from './pages/Header';

import light from './assets/styles/themes/light';
import dark from './assets/styles/themes/dark';

import GlobalStyles from './assets/styles/globalStyles';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePersisteState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? light : dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />

        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;
