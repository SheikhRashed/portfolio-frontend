import React from 'react';

// components
import Banner from '../../Banner/Banner'
import Stacks from '../../Home/Stacks/Stacks';
import Features from '../../Home/Features/Features';
import RecentProject from '../../Home/RecentProject/RecentProject';
import ContactSection from '../../Home/ContactSection/ContactSection';

export default function Homepage() {
  return (
    <>
      <Banner />
      <Features />
      <RecentProject />
      <Stacks />
      <ContactSection />
    </>
  )
}


