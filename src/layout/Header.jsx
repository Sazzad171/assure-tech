import React from 'react'

export default function Index() {
  return (
    <header className='py-4 fixed top-0 left-0 right-0'>
        <div className="container max-w-full md:px-4 lg:px-6">
            <div className="grid grid-cols-[2fr_5fr] items-center gap-5">
                <div>
                    <h3 className="font-bold text-3xl font-poppins text-black">Assure Tech BD.</h3>
                </div>
                <div>
                <ul className='text-right'>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>Home</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>About</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>Services</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>Products</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>Blogs</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='font-poppins font-medium px-4 py-2 text-blue'>Contact</a>
                    </li>
                    <li className="inline-block">
                        <a href="#fsd" className='btn-1 ml-4'>Book an Appointment</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </header>
  )
}
