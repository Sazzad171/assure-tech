import React from 'react';

export default function BottomBannerSection() {
	return (
		<section className='py-24 bg-[linear-gradient(to_bottom,#fffdf2_0,#ffeff5_100%)]'>
			<div className="container max-w-6xl mx-auto px-2">
				<div className="grid grid-cols-[1fr_1fr] gap-6 items-center">
					<div>
						<h4 className='text-blue font-semibold text-3xl font-poppins mb-4'>Take Our Service Now</h4>
						<p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
					</div>
					<div>
						<p className="text-right">
						<a href="#fds" className="btn btn-pink px-12">Contact Us</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
