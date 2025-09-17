import { useGSAP } from '@gsap/react';
import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { NavbarContext } from '@/context/NavContext';
import Timer from '@/components/timer/Timer';
import SocialMediaLinks from '@/components/socioLinks/SocialMediaLinks';

const FullScreenNav = () => {
  const fullnavRefLinks = useRef(null);
  const fullScreenLinks = useRef(null);
  const socialMediaRef = useRef(null);
  const stairRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function GsapAnimation() {
    const tl = gsap.timeline();
    tl.to('.fullscreennav', {
      display: 'block',
    });
    // from 0 -> 100%
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.1,
      },
    });
    tl.to(fullnavRefLinks.current, {
      opacity: 1,
    });
    tl.to('.Link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.navLink', {
      //   delay: 0.5,
      opacity: 1,
    });
    tl.to(socialMediaRef.current, {
      opacity: 1,
      x: -20,
      stagger: {
        amount: 0.3,
      },
    });
  }
  function CloseAnimation() {
    const tl = gsap.timeline();
    tl.to('.navLink', {
      opacity: 0,
    });
    tl.to('.Link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: -0.1,
      },
    });
    tl.to(socialMediaRef.current, {
      opacity: 0,
      stagger: {
        amount: -0.1,
      },
    });
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: -0.1,
      },
    });

    tl.to('.fullscreennav', {
      display: 'none',
    });
  }

  useGSAP(() => {
    if (navOpen) {
      GsapAnimation();
    } else {
      CloseAnimation();
    }
  }, [navOpen]);
  const arr = ['Project', 'Agence', 'Contact', 'Blogue'];
  return (
    // whole page
    <div
      ref={fullScreenLinks}
      id="full-screen-nav"
      className="fullscreennav  h-screen overflow-hidden w-full  top-0 left-0 z-50 fixed "
    >
      <div ref={stairRef} className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
          <div className=" stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      {/* actual working whole page it contains navLink and Link classname  */}
      <div ref={fullnavRefLinks} className="relative">
        <div className="flex navLink w-full p-2   justify-between items-start">
          <div id="svg" className="">
            <div className="lg:w-40 w-28">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            id="cross"
            onClick={() => setNavOpen(false)}
            className="lg:h-28 lg:w-28 h-18 w-18  relative group cursor-pointer   "
          >
            <div className="lg:h-39 w-1 h-25 absolute -rotate-45 origin-top bg-white  group-hover:bg-[#D3FD50]"></div>
            <div className="lg:h-39 w-1 h-25 absolute right-0 rotate-45 origin-top bg-white  group-hover:bg-[#D3FD50]"></div>
          </div>
        </div>
        {/* for all the links div it contains Link */}
        <div id="all-links  " className="lg:mt-10 mt-30">
          {/* 1 */}
          {arr.map((elem) => {
            return (
              <div
                key={elem}
                className="Link  origin-top relative cursor-pointer overflow-hidden border-white border-y-1 "
              >
                <div className=" flex justify-center items-center pt-3">
                  <h1 className="font-[font1] font-bold  text-[8vw] text-center leading-[0.8] text-white  uppercase">
                    {elem}
                  </h1>
                </div>
                <div className="moveLink absolute flex top-0 bottom-0 bg-[#D3FD50] text-black ">
                  <div className="moveX flex items-center  ">
                    <h2 className="whitespace-nowrap  font-[font1] text-5xl lg:text-[8vw] pt-4 lg:pt-7  lg:leading-[0.8]  text-center  uppercase">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0 h-14 w-32 lg:h-36 lg:w-96 rounded-full object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />

                    <h2 className="whitespace-nowrap   font-[font1] text-5xl lg:text-[8vw] pt-4 lg:pt-7 text-center lg:leading-[0.8]  uppercase">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0 h-14 w-32 lg:h-36 lg:w-96 rounded-full object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                    {/* </div> */}
                  </div>
                  <div className="moveX flex items-center  ">
                    <h2 className="whitespace-nowrap  font-[font1] text-5xl lg:text-[8vw] pt-4 lg:pt-7  lg:leading-[0.8]  text-center  uppercase">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0 h-14 w-32 lg:h-36 lg:w-96 rounded-full object-cover"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />

                    <h2 className="whitespace-nowrap   font-[font1] text-5xl lg:text-[8vw] pt-4 lg:pt-7 text-center lg:leading-[0.8]  uppercase">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0 h-14 w-32 lg:h-36 lg:w-96 rounded-full object-cover"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* for social media icons  */}
      </div>

      <div
        ref={socialMediaRef}
        className=" absolute  bottom-10 text-white  w-full lg:flex-row flex flex-col gap-10 items-center justify-between  px-10"
      >
        <Timer />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default FullScreenNav;
