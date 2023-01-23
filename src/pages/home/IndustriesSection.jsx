import React from 'react';

// img import
import icon1 from '../../assets/img/home/industries/icon-2.png';
import icon2 from '../../assets/img/home/industries/icon-3.png';
import icon3 from '../../assets/img/home/industries/icon-5.png';
import icon4 from '../../assets/img/home/industries/icon-6.png';
import icon5 from '../../assets/img/home/industries/icon-7.png';
import icon6 from '../../assets/img/home/industries/icon-8.png';
import icon7 from '../../assets/img/home/industries/icon-9.png';
import icon9 from '../../assets/img/home/industries/icon-10.png';
import icon10 from '../../assets/img/home/industries/icon-11.png';
import icon11 from '../../assets/img/home/industries/icon-12.png';

export default function IndustriesSection() {
  return (
    <section className='py-24 bg-[linear-gradient(to_bottom,#fbf9ed_0,#fbeaf8_100%)]'>
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-[2fr_3fr] gap-6 items-center">
          <div>
            <p className="uppercase text-pink mb-3">industries we work for</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">Helping Businesses in All Domains</h2>
            <p className='mb-8'>
              Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
              <div className="w-1/4 px-2 mb-4">
                <div className='w-full h-30 bg-white rounded-tl-2xl rounded-br-2xl rounded-tr-[36px] rounded-bl-[36px] text-center p-4'>
                  <img src={ icon1 } alt="icon" className="max-w-full h-auto mx-auto mb-2" />
                  <p className="font-blue">Banking Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
