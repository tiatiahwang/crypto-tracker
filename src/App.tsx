import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';
import { themeState } from './recoil/atom';

function App() {
  const isDark = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
