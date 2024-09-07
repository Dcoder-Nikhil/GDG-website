import React from "react";
import { Chip, Typography } from "@mui/material";

const WhatHero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column - What Do We Do */}
          <div>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-4"
            >
              What do we do?
            </Typography>
            <Typography variant="body1" className="mb-4">
              Google Developer Groups (GDGs) are for developers who are
              interested in Google’s developer technology.
            </Typography>
            <Typography variant="body1" className="mb-4">
              About different Google technologies
            </Typography>

            {/* Tags/Chips for Technologies */}
            <div className="space-x-2 space-y-2">
              <Chip
                label="Web"
                variant="outlined"
                className="text-white border-white"
              />
              <Chip
                label="App"
                variant="outlined"
                className="text-white border-white"
              />
              <Chip
                label="Firebase"
                variant="outlined"
                className="text-white border-white"
              />
              <Chip
                label="Flutter"
                variant="outlined"
                className="text-white border-white"
              />
              <Chip
                label="Google Cloud Platform"
                variant="outlined"
                className="text-white border-white"
              />
            </div>
          </div>

          {/* Second Column - Connect */}
          <div>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-4"
            >
              Connect
            </Typography>
            <Typography variant="body1">
              Meet local developers and technologists. All are welcome,
              including those with diverse backgrounds and from various
              companies and industries.
            </Typography>
          </div>

          {/* Third Column - Learn */}
          <div>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-4"
            >
              Learn
            </Typography>
            <Typography variant="body1">
              Learn about a range of technical topics and gain new skills
              through hands-on workshops, training, events, talks, and meetups -
              both online and in-person.
            </Typography>
          </div>

          {/* Fourth Column - Grow */}
          <div>
            <Typography
              variant="h5"
              component="h2"
              className="text-2xl font-bold mb-4"
            >
              Grow
            </Typography>
            <Typography variant="body1">
              Apply your knowledge and connections to build great products &
              advance your skills, career, and network. Give back to your
              community by helping others learn, too.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHero;
