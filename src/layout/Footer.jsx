import React from 'react'

export default function Index() {
  return (
    <footer>
        {/* footer top */}
        <div className="pt-12 pb-12 bg-gray-50">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center gap-5">
                    <div>
                        <h3 className="text-2xl font-medium">Assure Tech BD.</h3>
                        <p className=' text-gray-700'>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

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
