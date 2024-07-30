import React from "react";
import { Box } from "@mui/material";
import gdg from "../../assets/gdg.png";

const AboutHero1 = () => {
  return (
    <Box>
      <div class="lg:flex bg-gray-800 grid grid-cols-2">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] ">
          <div class="max-w-xl">
            <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Build Your New{" "}
              <span class="text-blue-600 dark:text-blue-400">Idea</span>
            </h2>

            <p class="mt-4 text-sm text-gray-500  lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
            </p>
          </div>
        </div>
        <div class="w-full h-64 lg:h-auto">
          <img src={gdg} alt="" />
        </div>
      </div>
    </Box>
  );
};

export default AboutHero1;
