'use client';
import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLocation } from 'react-router-dom';

const Staris = ({ children }) => {
  const currentPath = usePathname();
  const stairRef = useRef(null);

  const pageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: 'block',
    });
    // from 0 -> 100%
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairRef.current, {
      display: 'none',
    });
    tl.to('.stair', {
      y: '0%',
    });
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.1,
      scale: 1.2,
    });
  }, [currentPath]);
  return (
    <div>
      <div ref={stairRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
          <div className=" stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Staris;
