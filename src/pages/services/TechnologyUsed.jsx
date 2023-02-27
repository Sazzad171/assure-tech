import React from 'react';

// image import
import Technology1 from "../../assets/img/services/technologies/bootstrap.png";
import Technology2 from "../../assets/img/services/technologies/tailwindcss.png";
import Technology3 from "../../assets/img/services/technologies/reactjs.png";
import Technology4 from "../../assets/img/services/technologies/js.png";
import Technology5 from "../../assets/img/services/technologies/php.png";
import Technology6 from "../../assets/img/services/technologies/mysql.webp";
import Technology7 from "../../assets/img/services/technologies/wordpress.png";

export default function TechnologyUsed() {
  return (
    <section className="pt-16 pb-16 bg-slate-100">
      <div className="container max-w-4xl mx-auto px-2">
        <div className="grid grid-cols-7 gap-8 items-center">
          <div className='flex items-center h-full bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology1} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology2} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology3} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology4} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology5} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology6} alt="technology img" className='w-100 h-auto' />
          </div>
          <div className='flex items-center h-full  bg-white rounded-full p-6 shadow-lg'>
            <img src={Technology7} alt="technology img" className='w-100 h-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}
