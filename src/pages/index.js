import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroImage from '../../static/img/heroBanner.svg';
import HomepageCommunity from '../components/HomepageCommunity';
import HomepageAbout from '../components/HomepageAbout';

import styles from './index.module.css';
import HomepageProducts from '../components/HomepageProducts';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <HeroImage  width="100%" />

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Documentation for our Invisible MFA products">
      <HomepageHeader />
      <main>
        <HomepageProducts />

        <HomepageAbout />


        <HomepageCommunity />
      </main>
    </Layout>
  );
}
