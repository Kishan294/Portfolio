import React from "react";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Kishan294">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kishan-kumar-060113201/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100030120062876">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/kishankumar4685/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
