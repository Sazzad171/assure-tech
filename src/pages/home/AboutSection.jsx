import React from 'react';

// img import
import AboutImg from '../../assets/img/home/about-image.png';

export default function AboutSection() {
  return (
    <section className='home-about lg:py-24 py-12'>
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid lg:grid-cols-[1fr_1fr] grid-cols-1 gap-5 items-center">
          <div>
              <img src={ AboutImg } alt="about img" className="max-w-full h-auto" />
          </div>
          <div>
            <p className="uppercase text-pink mb-3">We are creative agency</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">About Agency</h2>
            <p className='mb-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="font-medium font-poppins px-5 py-6 bg-slate-100 border-l-4 border-[#e60072]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
