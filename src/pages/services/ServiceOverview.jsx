import React from 'react';

// image import
import OverviewImg from "../../assets/img/services/overview.jpg";
import RoundShapeImg from "../../assets/img/services/overview-round-shape.png";
import SquareShapeImg from "../../assets/img/services/overview-square-shape.png";

export default function ServiceOverview() {
  return (
    <section className="pt-20 pb-20">
      <div className="container max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-[2fr_3fr] gap-12 items-center">
          <div>
            <div className="relative">
              <img src={OverviewImg} alt="overview img" className='w-100 h-auto rounded-2xl shadow-lg' />
              <img src={RoundShapeImg} alt="shape img" className='absolute -bottom-14 -right-14 -z-10' />
              <img src={SquareShapeImg} alt="shape img" className='absolute -left-14 -top-14 -z-10' />
            </div>
          </div>
          <div>
            <p className="uppercase text-pink mb-3">overview</p>
            <h2 className="text-blue font-semibold text-4xl font-poppins mb-6">Premium Web Development Service</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
