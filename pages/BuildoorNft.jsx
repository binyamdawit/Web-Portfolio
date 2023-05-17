import Image from 'next/image';
import React from 'react';
import buildoorNftImg from '../public/assets/projects/buildoor.png'
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
          src={buildoorNftImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] 
        translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Buildoor NFT</h2>
          <h3>NextJS | TypeScript | Web3.js | Solana </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This project is a NFT (Non-Fungible Token) marketplace that allows users to mint their own 
          tokens, which were created by myself through the creation of a blockchain. The project 
          leverages Web.js, a JavaScript library that provides a convenient way to interact with the blockchain 
          node. The backend functionality, including the interaction with the blockchain, is implemented 
          using Web.js. On the frontend, the project is written in TypeScript, a statically-typed superset 
          of JavaScript, which offers improved code maintainability and type safety.
          <br />
          <br />
          With this NFT marketplace, users can mint their unique tokens, which are stored and managed on the 
          blockchain. This decentralized approach ensures the security and immutability of the token data. 
          The marketplace provides an interface for users to showcase and trade their NFTs, creating a platform 
          for artists and collectors to engage with the digital art market.
          </p>
          <a
            href='https://github.com/binyamdawit/Buildoor-NFT'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://buildoor-nft.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chakra UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Web3.js
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