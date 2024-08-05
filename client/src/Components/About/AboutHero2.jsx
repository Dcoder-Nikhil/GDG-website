import React from "react";
import { Box } from "@mui/material";
import gdg from "../../assets/gdg.png";

const AboutHero1 = () => {
  return (
    <Box className="bg-gray-800">
      <div className="lg:flex">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full">
          <img src={gdg} alt="GDG" className="object-contain" />
        </div>

        {/* Text Section */}
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem]">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">
              Google Developer Group Patna{" "}
            </h2>
            <hr className="my-6 border-gray-200 md:my-10 border-gray-700" />
            <h2 className="text-xl font-semibold text-white lg:text-3xl">
              The Community of Developers, For Developers, By Developers{" "}
            </h2>

            <p className="mt-4 text-sm text-gray-500 lg:text-base">
              When you join a Google Developer Group, you’ll have the
              opportunity to meet local developers with similar interests in
              technology. A GDG meetup event includes talks on a wide range of
              technical topics where you can learn new skills through hands-on
              workshops. The community prides itself on being an inclusive
              environment where everyone and anyone interested in tech - from
              beginner developers to experienced professionals - all are welcome
              to join.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AboutHero1;
