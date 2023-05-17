import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import articleSumImg from '../public/assets/projects/AI-article-summarizer.png';
import chatWithDioImg from '../public/assets/projects/chatwithdio.png'
import aiGeneratorImg from '../public/assets/projects/image-generator.png'
import sharePromptImg from '../public/assets/projects/share_prompt.png'
import sortingImg from '../public/assets/projects/sorting-visualizer.png'
import chartapp from '../public/assets/projects/chartapp.png'
import todoAppImg from '../public/assets/projects/todoapp.png'
import buildoorNftImg from '../public/assets/projects/buildoor.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] pt-10'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Chat With Dio app'
            backgroundImg={chatWithDioImg}
            projectUrl='/chatWithDio'
            tech='React JS'
          />
          <ProjectItem
            title='AI Image Generator'
            backgroundImg={aiGeneratorImg}
            projectUrl='/ImageGenerator'
            tech='React JS'

          />
          <ProjectItem
            title='AI Article Summarizer'
            backgroundImg={articleSumImg}
            projectUrl='/ArticleSummarizer'
            tech='React JS'

          />
          <ProjectItem
            title='Sorting Visualizer'
            backgroundImg={sortingImg}
            projectUrl='/SortingVisualizer'
            tech='Typescript'

          />
          <ProjectItem
            title='Share Prompt'
            backgroundImg={sharePromptImg}
            projectUrl='/SharePrompt'
            tech='Next JS'

          />
          <ProjectItem
            title='Dashboard App'
            backgroundImg={chartapp}
            projectUrl='/Dashboard'
            tech='Next JS'

          />
          <ProjectItem
            title='Dashboard App'
            backgroundImg={todoAppImg}
            projectUrl='/TodoApp'
            tech='React JS'

          />
          <ProjectItem
            title='Buildoor NFT'
            backgroundImg={buildoorNftImg}
            projectUrl='/BuildoorNft'
            tech='TypeScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;