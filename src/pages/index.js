import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { Container } from '@tymate/margaret';

const Homepage = () => {
  return (
    <Layout>
      <SEO title="Homepage" description="Useful homepage" />
      <Container variant="main">
        <h1>Gatsby starter DatoCMS</h1>
        Hello world!
      </Container>
    </Layout>
  );
};

export default Homepage;
