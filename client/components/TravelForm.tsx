import React from 'react';

const TravelForm = () => {
  return (
    <form className='w-full h-[19rem] bg-bgform px-2 pt-8 flex flex-col'>
      <h3 className='text-white text-2xl font-cursive'>
        Where do you want to go
      </h3>
      <input type='text' className='h-10 input input-bordered' />
    </form>
  );
};

export default TravelForm;
