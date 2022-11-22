import React from 'react';

// components
import Button from '../../Button/Button';
import ProjectCard from '../../ProjectCard/ProjectCard';

export default function RecentProject() {
  return (
    <section className=' rs-py-12 md:rs-py-28 !rs-pb-0 ' id='projects'>
      <div className="rs-container">
        <div className='rs-text-center rs-mb-8 lg:rs-mb-12'>
          <h2 className='rs-text-3xl lg:rs-text-4xl rs-uppercase rs-font-bold rs-text-primary rs-mb-2 lg:rs-mb-3'> Recent Projects</h2>
          <p className=' rs-max-w-xl rs-mx-auto rs-text-sm rs-text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat alias quidem, maxime deleniti quis ipsam eligendi in quod iusto nobis, facilis fugiat consequatur minima excepturi ullam cumque eius? Ducimus.
          </p>
        </div>
        <div className="rs-grid rs-gap-4 sm:rs-grid-cols-2 lg:rs-grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className='rs-flex rs-justify-center rs-py-12 '>
          <Button label='View All Projects' />
        </div>
      </div>
    </section>
  )
}
