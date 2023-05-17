import Image from 'next/image';
import React from 'react';
import todoAppImg from '../public/assets/projects/todoapp.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          objectPosition="0px 80px"
          src={todoAppImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] 
        translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Todo Firebase App</h2>
          <h3>ReactJS / Firebase </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is a web-based Todo application built using React JS, Firebase backend, and TailwindCSS 
          for styling. The application allows users to create, read, update, and delete tasks, which are stored 
          in the Firebase cloud storage. The project was self-assigned and built with the support I gained from Codecademy 
          community. By building the project, I gained a better understanding of creating CRUD 
          functionality within a React JS website and learned how to manage the backend using the Firestore cloud 
          storage within Firebase. The use of TailwindCSS provides a modern and customizable styling approach, 
          while the use of Firebase backend ensures seamless data management and easy scalability. With its focus 
          on practical functionality and backend management.
          </p>
          <a
            href='https://github.com/binyamdawit/Todo-Firebase-App'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cheerful-medovik-9b1780.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ReactJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
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

export default netflix;