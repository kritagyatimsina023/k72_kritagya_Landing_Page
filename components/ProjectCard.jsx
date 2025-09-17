import React from 'react';

const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="relative group hover:rounded-[50px] cursor-pointer  transition-all duration-300 ease-in-out overflow-hidden  h-full ">
        <img
          className="object-cover group-hover:scale-105 transition-all duration-200  h-full w-full"
          src={data.imgSrc1}
          alt=""
        />

        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
          <h2 className=" text-white uppercase border-2 font-bold border-white  px-4 rounded-full font-[font1] text-[3.2vw]">
            Vior le Projets
          </h2>
        </div>
      </div>
      <div className="relative  group hover:rounded-[50px] cursor-pointer  transition-all duration-300 ease-in-out overflow-hidden  h-full ">
        <img
          className="object-cover group-hover:scale-105 transition-all duration-200  h-full w-full"
          src={data.imgSrc2}
          alt=""
        />

        <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center ">
          <h2 className=" text-white uppercase border-2 font-bold border-white  px-4 rounded-full font-[font1] text-[3.2vw]">
            Vior le Projets
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
