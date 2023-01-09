import React from 'react';

// section components
import Banner from './BannerSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import CounterSection from './CounterSection';

export default function Index() {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <CounterSection />
    </>
  )
}
