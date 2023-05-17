import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Binyam | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Binyam Dawit</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/binyamdawit1/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/binyamdawit'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Marketing Specialist <span className='px-1'>|</span> Software Development{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Marketing Specialist</p>
            <p className='py-2'>Software Development</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills and team collaboration. 
          Consummate professional with solid interpersonal abilities and 
          complex problem-solving skills.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>NextJS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwindcss
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>RESTAPI
            <span className='px-2'>|</span>Solidity
          </p>
        </div>
        
        {/* Education */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
    
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Robertson College</span>
          </p>
          <p className='py-1 italic'>Diploma in Full Stack Web Development, Computer Science (Septemeber 2022 – June 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                GPA: 4/4
            </li>
            <li>
                Honor Student
            </li>
          </ul>
        </div>

        {/* Experience */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>IntegrateIT</span>
            <span className='px-2'>|</span>Brandon, MB
          </p>
          <p className='py-1 italic'>Marketing & Business Development Associate (2023 – Currently)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                Assisted in the development and execution of digital marketing campaigns, including SEO, PPC, social 
                media, email marketing, and content marketing.
            </li>
            <li>
                Monitored and reported on campaign performance, providing insights and recommendations for 
                optimization.

            </li>
            <li>
                Conducted research and analysis to inform digital marketing strategies and tactics.
            </li>
            <li>
                Assisted in the management and optimization of Google AdWords and Facebook campaigns.
            </li>
          </ul>
        </div>
        <p className='py-1 font-bold text-blue-600 underline'>
            <a href='https://docs.google.com/document/d/1pnGSRUWjM--hsxR5ZGqQaHVRkCS4Wt0Z/edit?usp=share_link&ouid=104840985122173252549&rtpof=true&sd=true'>
                DOWNLOAD FULL RESUME
            </a>
        </p>
      </div>
    </>
  );
};

export default resume;