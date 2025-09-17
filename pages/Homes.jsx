'use client';
import React, { useState } from 'react';
import Video from '@/components/Video';
import HomeHeroText from '@/components/HomeHeroText';
import HomeBottomText from '@/components/HomeBottomText';
import Navbar from '@/components/common/Navigation/Navbar';
import FullScreenNav from '@/components/common/Navigation/FullScreenNav';

const Homes = () => {
  return (
    <div className="text-white overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <div className="h-full w-full fixed">
        <Video />
      </div>
      <div className="h-screen  w-screen relative flex flex-col justify-between ">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Homes;
