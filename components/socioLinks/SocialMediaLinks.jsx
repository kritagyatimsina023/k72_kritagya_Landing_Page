import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-3 items-center ">
      <FaFacebook size={30} />
      <FaInstagram size={30} />
      <FaYoutube size={30} />
      <FaGithub size={30} />
    </div>
  );
};

export default SocialMediaLinks;
