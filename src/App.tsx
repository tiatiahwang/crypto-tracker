import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  // 추후 변경 예정
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
