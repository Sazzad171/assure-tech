import React from 'react';
import bannerImg from '../../assets/img/home/hero-image.png';

export default function BannerSection() {
  return (
    <section className="home-banner py-20 bg-[linear-gradient(to_bottom,#c7ecff_0,#f9efff_100%)] min-h-screen relative
      before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-no-repeat before:bg-contain before:z-0">
      <div className="container max-w-6xl mx-auto relative z-10 px-2">
        <div className="grid grid-cols-[1fr_1fr] items-center gap-5 min-h-[calc(100vh-160px)]">
          <div>
            <h2 className='text-blue font-bold font-poppins text-[52px] leading-[60px] mb-8'>Creative Web <br /> Development <br /> Company</h2>
            <p className='text-xl leading-7 mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.
            </p>
            <p>
              <a href="#fds" className="btn btn-pink">View Products</a>
            </p>
          </div>
          <div>
            <img src={bannerImg} alt="banner img" className='max-w-full h-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}
