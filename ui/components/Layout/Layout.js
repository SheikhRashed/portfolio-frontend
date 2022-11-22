import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// components

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
