import React from 'react';
import Footer from './base/Footer';
import Header from './base/Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
