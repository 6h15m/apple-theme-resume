import React from 'react';
import Layout from '../components/Layout';
import { Tags, ProjectList } from '../components/project';

const Project = ({ match }) => {
  const tag = match.params.tag || 'all';
  return (
    <Layout>
      <Tags />
      <ProjectList tag={tag}></ProjectList>
    </Layout>
  );
};

export default Project;
