import { Box } from "@mui/material";
import React from "react";


const WhatHero = () => {
  return (
    <Box className="bg-gray-900">
      <div className="container flex flex-col px-14 py-8 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-lg font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              What we do ?
            </h1>
            <div>
              <hr className="border-white md:mt-8 border-gray-700" />
              <p className="text-white py-4">
                Our events are open to newbies, developers, managers, and
                organizations who are interested in Google's technologies or use
                them as part of their projects.
              </p>
              <p className="text-white">About different Google technologies</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2"></div>
      </div>
    </Box>
  );
};

export default WhatHero;
