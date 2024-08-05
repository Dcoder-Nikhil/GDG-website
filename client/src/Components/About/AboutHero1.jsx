import React from "react";
import { Box } from "@mui/material";
import gdg from "../../assets/gdg.png";

const AboutHero1 = () => {
  return (
    <Box className="bg-gray-800">
      <div class="lg:flex  grid grid-cols-2">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] ">
          <div class="max-w-xl">
            <p class="mt-4 text-lg text-gray-500  lg:text-xl">
              Google Developer Group Patna is inspired by GDG Family . We
              started our journey in Feb 2019 . We try to engage student
              developers, fresh graduates and professionals through our hack
              events & meetups. The motive is to create a local ecosystem of
              programmers & developers in and around patna. The technology
              awareness is main goal for first few years of the group.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img src={gdg} alt="GDG" className="object-contain" />
        </div>
      </div>
    </Box>
  );
};

export default AboutHero1;
