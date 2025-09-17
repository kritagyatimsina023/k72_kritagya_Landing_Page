'use client';
import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import ProjectData from '@/data/ProjectData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Navbar from '@/components/common/Navigation/Navbar';
import FullScreenNav from '@/components/common/Navigation/FullScreenNav';

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.7,
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 10%',
        end: 'top -150%',
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div className=" bg-white text-black overflow-x-hidden ">
      <Navbar />
      <FullScreenNav />
      <div className="bg-red pt-[40vh] px-[2vw]">
        <h2 className="font-[font1] font-bold uppercase text-[8.5vw]">
          Projets
        </h2>
      </div>
      <div className="lol lg:-mt-10">
        {ProjectData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="hero w-full px-2 mb-4 grid lg:grid-cols-2 gap-3 grid-cols-1  h-[550px] "
            >
              <ProjectCard key={idx} data={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
