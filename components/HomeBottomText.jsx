'use client';
import Link from 'next/link';
import React from 'react';
import Timer from './timer/Timer';

const HomeBottomText = () => {
  return (
    <div className=" flex font-[font2] relative z-40 justify-center items-end gap-2 mb-3 ">
      <p className="absolute bottom-20 w-64 right-0 leading-tight lg:text-[0.986em] lg:w-[17vw] text-xs pb-10 mb-3 ">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la
        marque.&nbsp;&nbsp; Demain, dans 5 mois et dans 5 ans. On cherche la
        friction qui crée l’étincelle pour générer de l’émotion. Pour assurer
        une relation honnête, on est sans filtre, on dit ce qui doit être dit,
        on fait ce qui doit être fait.
      </p>
      <div className=" hidden lg:block left-30 bottom-3  ">
        <Timer />
      </div>
      <div className="flex  gap-3 items-center">
        <Link
          className="border-2   hover:text-[#D3FD50] border-w rounded-full px-7 pt-2 leading-[5.5vw]   text-[5.5vw] uppercase font-bold"
          href="/project"
        >
          Projects
        </Link>
        <Link
          className="border-2 border-w rounded-full hover:text-[#D3FD50]  px-7 pt-2 leading-[5.5vw]  text-[5.5vw] uppercase font-bold"
          href="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
