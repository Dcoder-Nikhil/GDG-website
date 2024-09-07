import { Box } from "@mui/material";
import React from "react";

const HeroHome = () => {
  return (
    <Box className="bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container flex flex-col px-14 py-8 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              The Community of Developers
            </h1>
            <div>
              <hr className="border-white md:mt-8 border-gray-700" />
              <p className="text-white py-4">
                We're on a mission to build the largest tech community in Bihar.
                Join us on this journey to make it possible.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/V6s5kjSoqzw`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </Box>
  );
};

export default HeroHome;
