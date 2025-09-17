'use client';
import React, { useState } from 'react';

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="w-full h-full object-cover "
        src="/videos/video.mp4"
        loop
        muted
        autoPlay
        playsInline
      ></video>
    </div>
  );
};

export default Video;
