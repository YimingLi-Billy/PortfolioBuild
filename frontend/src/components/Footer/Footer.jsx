import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          mollitia rem labore necessitatibus nobis, dolores quos placeat fugiat
          iusto accusamus dolore hic quam veniam explicabo facere reprehenderit
          laboriosam expedita enim.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/meabhisingh/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/meabhisingh" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/meabhisingh" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
