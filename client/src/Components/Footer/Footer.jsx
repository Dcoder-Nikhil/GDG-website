import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Box>
      <footer className="bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link to="/">
              <img className="w-auto h-10" src={logo} alt="" />
            </Link>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <Link
                to="/"
                className="mx-4 text-sm  transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Home{" "}
              </Link>

              <Link
                to="/event"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Event{" "}
              </Link>

              <Link
                to="/gallery"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Gallery{" "}
              </Link>

              <Link
                to="/about"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                About{" "}
              </Link>

              <Link
                to="/teams"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Team{" "}
              </Link>

              <Link
                to="/faq"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                FAQ{" "}
              </Link>
              <Link
                to="/join"
                className="mx-4 text-sm transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Join Us{" "}
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 text-gray-300">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex -mx-2"></div>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export default Footer;
