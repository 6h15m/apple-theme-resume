import React from 'react';
import Layout from '../components/Layout';
import { Home, Profile, ProjectPrev, Skills, Etc } from '../components/about';

const About = () => {
  return (
    <Layout>
      <Home />
      <Profile />
      <Skills />
      <ProjectPrev />
      <Etc />
    </Layout>
  );
};

export default About;
