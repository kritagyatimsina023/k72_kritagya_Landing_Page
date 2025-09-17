'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react';
import imgArr from '@/data/imgArr';
import Navbar from '@/components/common/Navigation/Navbar';
import FullScreenNav from '@/components/common/Navigation/FullScreenNav';

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (imgArr.length - 1));
          imgRef.current.src = imgArr[imageIndex];
        },
      },
    });
  });
  return (
    // this div is whole page
    <div className="parent ">
      {/* this is only half */}
      <Navbar />
      <FullScreenNav />
      <div className="section1 py-1  ">
        <div
          ref={imgDivRef}
          className="absolute lg:h-[20vw] h-[30vw] w-[25vw] lg:w-[15vw] top-80 lg:top-45 overflow-hidden rounded-2xl left-[30vw] lg:left-[25vw]  "
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh] gap-17">
            <h1 className="text-[19vw] text-center uppercase leading-[15vw] ">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-[20] p-3">
            <p className="lg:text-4xl leading-tight text-xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
