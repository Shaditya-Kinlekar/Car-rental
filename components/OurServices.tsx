import React from 'react';
import Link from 'next/link';
import { LiaTaxiSolid, MdOutlineCarRental, RiMotorbikeLine } from '@/lib/ReactIcons';

const OurServices = () => {
  return (
    <section className='py-14' id='OurServices'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-lg text-center'>
          <h3 className='font-semibold  tracking-wide text-sky-500'>
            Your Journey, Your Choice: <span className='uppercase'>Car, Bike, or Taxi</span>.
          </h3>
          <h2 className='mt-4 font-bold tracking-wide text-sky-950/90 sm:text-4xl md:text-5xl'>
            Our Services
          </h2>
        </div>
        <div className='mt-14 grid grid-cols-1 place-items-center gap-10 *:flex *:flex-grow *:flex-col *:justify-between *:rounded-md *:border *:border-sky-900/10 *:bg-white *:p-10 *:shadow-lg *:shadow-sky-900/10 *:focus:outline-none *:focus-visible:ring *:sm:w-4/5 md:grid-cols-2 *:md:w-auto lg:grid-cols-3'>
          <section id='rent-a-bike' className=''>
            <div>
              <div className='w-fit rounded-full bg-sky-900 p-2 text-gray-200 shadow-lg shadow-sky-900/20 md:p-3'>
                <RiMotorbikeLine className='h-6 w-6 text-gray-200 md:h-7 md:w-7' />
              </div>
              <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>
                Rent a Bike
              </h2>
              <p className='min-h-[4em] leading-relaxed tracking-tight text-base lg:text-lg text-gray-600'>
                &quot;Experience convenience like never before with our top-notch bike rental
                services&quot;
              </p>
            </div>
            <div>
              <Link
                href={'/'}
                className='mt-6 block w-max rounded-md bg-sky-900 px-6 py-2 text-center text-base font-medium tracking-tight text-white transition-shadow duration-200 hover:bg-sky-900/90 hover:shadow-lg hover:shadow-sky-900/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 active:bg-sky-900'>
                Call to Inquire
              </Link>
            </div>
          </section>

          <section id='rent-a-car' className=''>
            <div>
              <div className='w-fit rounded-full bg-sky-900 p-2  text-gray-200 shadow-lg shadow-sky-900/20 md:p-3'>
                <MdOutlineCarRental className='h-6 w-6 text-gray-200 md:h-7 md:w-7' />
              </div>
              <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>
                Rent a Car
              </h2>
              <p className='min-h-[4em] leading-relaxed tracking-tight text-base lg:text-lg text-gray-600'>
                &quot;Explore our diverse car fleet with effortless booking. Browse cars now!&quot;
              </p>
            </div>
            <div>
              <Link
                href={'/'}
                className='mt-6 block w-max rounded-md bg-sky-900 px-6 py-2 text-center text-base font-medium tracking-tight text-white transition-shadow duration-200 hover:bg-sky-900/90 hover:shadow-lg hover:shadow-sky-900/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 active:bg-sky-900'>
                Browse Cars <span className='font-bold'>→</span>
              </Link>
            </div>
          </section>

          <section id='book-a-cab' className=''>
            <div>
              <div className='w-fit rounded-full bg-sky-900 p-2 text-gray-200 shadow-lg shadow-sky-900/20 md:p-3'>
                <LiaTaxiSolid className='h-6 w-6 text-gray-200 md:h-7 md:w-7' />
              </div>
              <h2 className='my-5 pt-1 text-xl font-bold tracking-wide text-gray-800'>
                Book a Cab
              </h2>
              <p className='min-h-[4em] leading-relaxed tracking-tight text-base lg:text-lg text-gray-600'>
                &quot;Looking for reliable cab services? Trust us for a seamless, hassle-free
                journey&quot;
              </p>
            </div>
            <div>
              <Link
                href={'/'}
                className='mt-6 block w-max rounded-md bg-sky-900 px-6 py-2 text-center text-base font-medium tracking-tight text-white transition-shadow duration-200 hover:bg-sky-900/90 hover:shadow-lg hover:shadow-sky-900/20 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 active:bg-sky-900'>
                Call to Inquire
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
