import React from 'react';

// section components
import Banner from './BannerSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import CounterSection from './CounterSection';
import ProductSection from './ProductSection';
import IndustriesSection from './IndustriesSection';

export default function Index() {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServiceSection />
      <CounterSection />
      <ProductSection />
      <IndustriesSection />
    </>
  )
}
