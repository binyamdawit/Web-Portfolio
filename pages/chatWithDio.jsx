import Image from 'next/image';
import React from 'react';
import chatWithDioImg from '../public/assets/projects/chatwithdio.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ChatWithDio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={chatWithDioImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Chatbot</h2>
          <h3>NextJS | OpenAI </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is a chatbot that utilizes the advanced language processing capabilities of 
          OpenAI and is built with JavaScript, Tailwindcss, and NextJS. The unique aspect of this chatbot 
          is that it is designed to emulate the personality traits of a popular anime character, creating a 
          more engaging and immersive chat experience. Users can interact with the bot, asking questions or 
          engaging in conversation, and receive responses that are in line with the personality traits of the 
          chosen anime character. The use of advanced AI technology, coupled with the engaging personality of 
          the anime character, makes this chatbot a fascinating and innovative project.
          </p>
          <a
            href='https://github.com/binyamdawit/chatbot'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://chat-with-dio.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> NextJS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwindcss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI
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

export default ChatWithDio;