'use client';

import Image from 'next/image';
import Landing from '../public/Landing.jpg';
import Landing2 from '../public/landing-2.jpg';
import Landing3 from '../public/Landing-3.jpg';
import { useState } from 'react';
import TravelForm from './TravelForm';

const Hero = () => {
  const image = [Landing, Landing2, Landing3];
  const headingText = ['Switzerland', 'Australia', 'Indonesia'];
  const paragraphText = [
    'Explore the Scenic beauty of Zurich',
    'Forget in the peace of Sydney waters',
    'Be in the presence of Mythology',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const handleButtonClick = (direction: string) => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) =>
        prev === 0 ? image.length - 1 : prev - 1
      );
      setCurrentHeadingIndex((prev) =>
        prev === 0 ? headingText.length - 1 : prev - 1
      );
      setCurrentParagraphIndex((prev) =>
        prev === 0 ? paragraphText.length - 1 : prev - 1
      );
    }
    if (direction === 'next') {
      setCurrentImageIndex((next) =>
        next === image.length - 1 ? 0 : next + 1
      );
      setCurrentHeadingIndex((next) =>
        next === headingText.length - 1 ? 0 : next + 1
      );
      setCurrentParagraphIndex((next) =>
        next === paragraphText.length - 1 ? 0 : next + 1
      );
    }
  };

  return (
    <>
      <div className='relative text-center'>
        <Image
          src={image[currentImageIndex]}
          alt={`paragraphText${currentParagraphIndex}`}
          className='w-full h-auto'
        />
        {/* This way you can write texts on the middle of NextJs image tag */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h3
            className='text-6xl md:text-8xl lg:text-9xl font-cursive font pb-4
        '
          >
            {headingText[currentHeadingIndex]}
          </h3>
          <p className='text-xl md:text-2xl lg:yext-3xl font-serif'>
            {paragraphText[currentParagraphIndex]}
          </p>
        </div>

        <button
          onClick={() => handleButtonClick('prev')}
          className=' absolute left-0 h-24 top-1/2 transform -translate-y-1/2  p-1 border-none text-black cursor-pointer bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
            />
          </svg>
        </button>
        <button
          onClick={() => handleButtonClick('next')}
          className='absolute right-0 h-24 top-1/2 transform -translate-y-1/2  p-1 border-none text-black cursor-pointer bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
            />
          </svg>
        </button>
      </div>
      <TravelForm />
    </>
  );
};

export default Hero;
