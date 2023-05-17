import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import coderLogo from '../public/assets/coder.gif'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Motivated software developer and a graduate from Robertson College with a Full-Stack 
          Web Development diploma. I have been a self-taught for almost a now year. 
          I specialize in frontend, backend, and building smart contracts.
          </p>
          <p className='py-2 text-gray-600'>
          I have a solid foundation in Java, C#, JavaScript, 
          and HTML/CSS, along with experience working with various frameworks and technologies.
          </p>
          <p className='py-2 text-gray-600'>
          Having completed my diploma in Full-Stack Web Development, I&#39;ve gained practical knowledge in software development 
          principles, data structures, and algorithms. Throughout my academic journey, I undertook several projects 
          that involved developing web applications using HTML, CSS, and JavaScript. I also dived into backend 
          development using Java and C#, building robust and scalable solutions.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={coderLogo} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;