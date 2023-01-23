import React from 'react'

export default function Index() {
  return (
    <footer>
        {/* footer top */}
        <div className="pt-12 pb-12 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-2">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5">
                    <div>
                        <h3 className="text-blue text-3xl font-bold font-poppins mb-3">Assure Tech BD.</h3>
                        <p className=' text-gray-700'>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div>
                        <h5 className="text-blue font-medium font-poppins text-2xl mb-3">Contact Us</h5>
												<ul>
													<li className='flex gap-3 mb-3'>
														<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
															<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
														</svg>
														<div>
															<h5 className="text-xl font-semibold">Email</h5>
															<a href="#ds">info@test.com</a>
														</div>
													</li>
													<li className='flex gap-3 mb-3'>
														<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
															<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
														</svg>
														<div>
															<h5 className="text-xl font-semibold">Phone</h5>
															<a href="#f">+88013445522</a>
														</div>
													</li>
													<li className='flex gap-3 mb-3'>
														<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
															<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
															<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
														</svg>
														<div>
															<h5 className="text-xl font-semibold">Address</h5>
															<a href="#fs">Dhaka, Bangladesh</a>
														</div>
													</li>
												</ul>
                    </div>
                    <div>
											<h5 className="text-blue font-medium font-poppins text-2xl mb-3">Company</h5>
											<ul>
												<li className='mb-2'>
													<a href="#d">Contact</a>
												</li>
												<li className='mb-2'>
													<a href="#d">Contact</a>
												</li>
											</ul>
                    </div>
                    <div>
											<h5 className="text-blue font-medium font-poppins text-2xl mb-3">Privacy & Policy</h5>
											<ul>
												<li className='mb-2'>
													<a href="#d">Terms of use</a>
												</li>
												<li className='mb-2'>
													<a href="#d">Privacy policy</a>
												</li>
												<li className='mb-2'>
													<a href="#d">Refund policy</a>
												</li>
											</ul>
                    </div>
                </div>
            </div>
        </div>

        {/* footer bottom */}
        <div className='pt-4 pb-4 bg-gray-100'>
            <p className="text-center font-medium">&copy; 2022-2023. All Rights Reserved by <span className='text-sky-700'>Assure Tech BD.</span></p>
        </div>
    </footer>
  )
}
