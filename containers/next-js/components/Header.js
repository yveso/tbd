import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import Nav from "./Nav";

Router.onRouteChangeStart = function() {
  NProgress.start();
};

Router.onRouteChangeComplete = function() {
  NProgress.done();
};

Router.onRouteChangeError = function() {
  NProgress.done();
};

const StyledHeader = styled.div`
  border-bottom: 10px solid ${p => p.theme.colors.black};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${p => p.theme.colors.green};
    color: ${p => p.theme.colors.white};
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Link href="/">
          <a>TBD!</a>
        </Link>
      </Logo>

      <Nav />
    </StyledHeader>
  );
}

export default Header;
