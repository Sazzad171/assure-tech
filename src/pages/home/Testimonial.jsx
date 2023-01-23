import React from 'react';

// import image
import userImg from '../../assets/img/home/girl2.jpg'

export default function Testimonial() {
  return (
    <section className='home-testimonial py-24 bg-no-repeat bg-contain bg-[left_center]'>
        <div className="container max-w-6xl mx-auto px-2">
            <div className="grid grid-cols-[2fr_3fr] items-center gap-8">
              <div>
                <p className="uppercase text-pink mb-3">clients Testimonial</p>
                <h2 className="text-blue font-semibold text-4xl font-poppins">What our clients say about our Company.</h2>
              </div>
              <div>
                <p className='mb-6'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed libero explicabo voluptate, dolorum tempora maxime id ad, voluptatum velit quidem placeat assumenda voluptatibus! Nisi molestiae facilis ipsam nulla totam asperiores!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed libero explicabo voluptate, dolorum tempora maxime id ad, voluptatum velit quidem placeat assumenda voluptatibus! Nisi molestiae facilis ipsam nulla totam asperiores!
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <img src={ userImg } alt="user" className='w-20 h-20 rounded-full object-cover' />
                  </div>
                  <div>
                    <h5 className='text-blue text-xl font-bold mb-1'>Mrs. Anika</h5>
                    <p className='text-base'>CEO of ABC Company Ltd.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
