import React from 'react';

// img import
import BlogImg from '../../assets/img/blogs/blog-dg-3.jpg';

export default function AllBlogs() {
  return (
    <section className='pt-20 pb-20'>
      <div className="container max-w-6xl mx-auto px-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="shadow rounded-xl overflow-hidden">
            <div className='w-full h-48'>
              <a href="#df">
                <img src={BlogImg} alt="blog img" className="w-full h-full object-cover" />
              </a>
            </div>

            <div className='grid grid-cols-2 gap-2 bg-[linear-gradient(to_right,#ff0048_0,#c300c3_100%)] rounded-3xl mx-4 -mt-4 px-4 py-2 z-10 relative'>
              <div>
                <p className='text-sm text-white'>Web Application</p>
              </div>
              <div>
                <p className='text-right text-sm text-white'>May 1 2023</p>
              </div>
            </div>

            <div className='px-6 pt-5 pb-7'>
              <h4 className='text-blue font-semibold text-2xl font-poppins mb-3'>
                <a href="#f">Best technology for Web Development</a>
              </h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
