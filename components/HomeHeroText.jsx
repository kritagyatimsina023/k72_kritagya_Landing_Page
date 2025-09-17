import React from 'react';
import Video from './Video';

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:pt-5  lg:h-full h-full pt-35  text-center ">
      <div className="text-[9.5vw] uppercase flex items-center justify-center leading-[8vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-start justify-center ">
        qui
        <div className="h-[8vw] -mt-2 rounded-full overflow-hidden ">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
