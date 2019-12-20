import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled/GlobalStyle";
import Meta from "./Meta";
import Header from "./Header";

const theme = {
  colors: {
    black: "#212121",
    green: "#218204",
    red: "#FF3333",
    white: "#F9F9F9",
  },
};

const StyledPage = styled.div`
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Page;
