// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header></Header>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer></Footer>
      
    </div>
  );
};

export default Layout;
