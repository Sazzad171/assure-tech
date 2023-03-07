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

            <div>

            </div>

            <div className='px-6 py-7'>
              <h4 className='text-blue font-semibold text-2xl font-poppins mb-4'>
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
