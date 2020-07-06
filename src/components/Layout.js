import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { theme } from 'ui';
import { MargaretProvider, media, Stack } from '@tymate/margaret';
import styled, { createGlobalStyle } from 'styled-components';
import logo from 'images/favicon.png';
import 'sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:  -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

const Site = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: none;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 110px;
  padding: ${({ theme }) => theme.spacing(1.5)};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);

  ${media.tablet`
    display: flex;
    align-items: center;
  `};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  text-decoration: none;
`;

const Logo = styled(Link)`
  max-width: 40px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing()};
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.06);

  > * + * {
    margin-left: ${({ theme }) => theme.spacing(2.5)};
  }

  ${media.desktop`
    padding: ${({ theme }) => theme.spacing(2)}
    ${({ theme }) => theme.spacing(2.875)};
  `}
`;

const Main = styled.main`
  flex: 1;
`;

const Layout = ({ children, variant }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MargaretProvider theme={theme}>
      <GlobalStyle />

      <Site>
        <Header variant={variant}>
          <Stack gutterSize={2.5} alignY="center">
            <Logo to="/">
              <img src={logo} alt="Tymate" />
            </Logo>
            <NavLink to="/page-2">Page 2</NavLink>
          </Stack>
        </Header>

        <Main id="content">{children}</Main>

        <Footer>
          <Stack
            direction={{ default: 'column', tablet: 'row' }}
            alignX={{ default: 'flex-start', tablet: 'space-between' }}
            size="full"
            gutterSize={2}
          >
            <Stack
              direction={{ default: 'column', tablet: 'row' }}
              alignY={{ default: 'flex-start', desktop: 'center' }}
              gutterSize={2}
            >
              <Logo to="/">
                <img src={logo} alt="Tymate" />
              </Logo>

              <NavLink to="/page-2">Page 2</NavLink>

              <Stack
                direction="row"
                gutterSize={{ default: 0.5, desktop: 1 }}
                alignY="center"
              >
                <NavLink
                  as="a"
                  aria-label="Facebook"
                  target="blank"
                  rel="nofollow noopener noreferer"
                  href="https://www.facebook.com/tymateagence"
                >
                  <FaFacebookF />
                </NavLink>

                <NavLink
                  as="a"
                  aria-label="Twitter"
                  target="blank"
                  rel="nofollow noopener noreferer"
                  href="https://twitter.com/TymateEng"
                >
                  <FaTwitter />
                </NavLink>
              </Stack>
            </Stack>
          </Stack>
        </Footer>
      </Site>
    </MargaretProvider>
  );
};

export default Layout;
