import Image from 'next/image';
import React from 'react';
import aiGeneratorImg from '../public/assets/projects/image-generator.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ArticleSummarizer = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={aiGeneratorImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>AI Article Summarizer</h2>
          <h3>React JS / Vite </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is a ReactJS application that utilizes Vite as its build tool 
          and Tailwind CSS to create a visually stunning and responsive user interface. 
          The UI/UX is enhanced with a touch of glass morphism, which adds a modern and elegant 
          look to the application. The project includes advanced RTK query API requests that 
          fire on condition, allowing for optimized data retrieval, and local storage is used 
          to save history and provide a smoother user experience. Additionally, the application 
          includes a copy to clipboard feature for easy sharing of information.
          <br />
          <br />
          The main feature of this project is its ability to summarize articles from the internet 
          using chatGPT, a powerful language processing technology. This feature is made possible 
          through the use of the Article Extractor and Summarizer API from RapidAPI, which provides 
          the necessary tools to extract relevant information and summarize it in a concise and 
          understandable manner. With its combination of advanced AI technology and sleek UI/UX design, 
          this project showcases the potential of modern web development in creating innovative and 
          useful applications.
          </p>
          <a
            href='https://github.com/binyamdawit/AI-Article-Summarizer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cheery-mousse-2b1937.netlify.app/'
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
                <RiRadioButtonFill className='pr-1' /> ReactJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vite
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> RapidAPI
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

export default ArticleSummarizer;