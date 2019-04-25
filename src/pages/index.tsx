import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/gatsby/Image';
import Seo from '../components/gatsby/Seo';
import CustomButton from '../components/CustomButton';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/details" style={{ textDecoration: 'none' }}>
      <CustomButton data-cy="main-page-exit-button">Go to Page 2</CustomButton>
    </Link>
  </Layout>
);

export default IndexPage;
