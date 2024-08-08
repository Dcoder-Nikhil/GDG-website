import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const JoinHero = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container flex flex-col px-14 py-8 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Google Developers Group Patna
            </h1>
            <div>
              <hr className="border-white md:mt-8 border-gray-700"/>
              <p className="text-white py-4">
                We're on a mission to build the largest tech community in Bihar.
                Join us on this journey to make it possible.
              </p>
              <hr className="my-6 border-white md:mt-1 border-gray-700"/>

              <p className="text-white p-2">
                Click on the Buttons Below to join the respective forums or
                community
              </p>
              <div className="flex justify-center py-2">
                <button className="grid items-center border border-decoration-white rounded-lg p-2 text-white">
                  GDG Patna Chapter
                </button>
              </div>
              <div className="grid grid-cols-4 md:mx-10 my-6 gap-4">
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  LinkedIn
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  Twitter
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  YoutTube
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  Reddit
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  Facebook
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  {" "}
                  Telegram
                </button>
                <button className="border border-decoration-white rounded-lg p-2 text-white">
                  Instagram
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-lg lg:max-w-2xl"
            src={logo}
            alt="gdg logo"
          />
        </div>
      </div>
    </Box>
  );
};

export default JoinHero;
