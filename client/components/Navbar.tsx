import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.jpg';
import travel from '../public/travel.svg';

const Navbar = () => {
  return (
    <div className='flex h-[6.5rem] w-auto items-center justify-between bg-primary md:flex md:justify-around md:space-x-10'>
      <div className='gap-12 px-4'>
        <Link href='/' className='flex items-center justify-between '>
          <Image
            src={travel}
            alt='Plane Circling of the World'
            width={60}
            height={60}
          />
          <p className='mx-2'>Travel Buddy</p>
        </Link>
      </div>

      <div className='flex items-center justify-end  px-4 md:space-x-16'>
        <Link href='/' className='rounded p-2 hover:text-green-400 '>
          Home
        </Link>
        <Link href='/about' className='rounded p-2 hover:text-green-400 '>
          About
        </Link>
        <Link href='/blog' className='rounded p-2 hover:text-green-400 '>
          Blog
        </Link>
        <Link href='/destination' className='rounded p-2 hover:text-green-400 '>
          Destination
        </Link>
        <Link href='/news' className='rounded p-2 hover:text-green-400 '>
          News
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
