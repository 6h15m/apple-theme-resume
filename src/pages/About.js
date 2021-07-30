import React from 'react';
import Layout from '../components/Layout';
import { Home, Profile, ProjectPrev, Skills } from '../components/about';

const About = () => {
  return (
    <Layout>
      <Home />
      <Profile />
      <Skills />
      <ProjectPrev />
    </Layout>
  );
};

export default About;
