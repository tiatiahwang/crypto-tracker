import { useRecoilValue } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';
import { themeState } from './recoil/atom';

function App() {
  const isDark = useRecoilValue(themeState);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
