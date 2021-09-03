import React from 'react';
import Layout from '../components/Layout';
import { DetailItem } from '../components/detail';

const Detail = ({ match }) => {
  const no = match.params.no;
  return (
    <Layout>
      <DetailItem num={no}></DetailItem>
    </Layout>
  );
};

export default Detail;
