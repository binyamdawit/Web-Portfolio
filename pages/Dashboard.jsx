import Image from 'next/image';
import React from 'react';
import chartapp from '../public/assets/projects/chartapp.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          objectPosition='0px 100px'
          src={chartapp}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] 
        translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>User Dashboard</h2>
          <h3>NextJS | Chart.js </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is a web-based dashboard application that utilizes the NextJS framework and TailwindCSS 
          for styling. The application includes various features such as bar charts created using Chart.js and 
          icons from the React Icons library to make the user interface more visually appealing. The dashboard 
          provides users with a comprehensive overview of relevant data and statistics, making it easier to 
          monitor and analyze important information. The use of NextJS allows for faster page load times and 
          improved performance, while TailwindCSS provides a customizable and efficient way to style the application. 
          With its focus on data visualization and user experience, this project showcases the power of 
          modern web development frameworks and libraries in creating functional and visually stunning applications..
          </p>
          <a
            href='https://github.com/binyamdawit/Chart-App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://chart-app-jet.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
            <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chart.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;