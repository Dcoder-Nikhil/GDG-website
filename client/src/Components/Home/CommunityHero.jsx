import Button from "@mui/material/Button"; // MUI Button
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const CommunityHero = () => {
  const events = [
    {
      title: "DevFest",
      description:
        "Meet local developers and technologists. All are welcome, including those with diverse backgrounds and from various companies and industries.",
      image: "path-to-your-image", // Replace with correct path to images
    },
    {
      title: "I/O Extended",
      description:
        "Google I/O connects developers from around the world for thoughtful discussions, hands-on learning with Google experts, and a first look at Google’s latest developer products.",
      image: "path-to-your-image", // Replace with correct path to images
    },
    {
      title: "And Many More",
      description: "Check out all upcoming events!",
      image: "path-to-your-image", // Replace with correct path to images
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <Typography
              variant="h4"
              component="h2"
              className="text-3xl font-bold"
            >
              Our Community Events
            </Typography>
            <Typography variant="body1" className="text-lg">
              Our events are open to newbies, developers, managers, and
              organizations who are interested in Google’s technologies or use
              them as part of their projects.
            </Typography>
            <Typography variant="body1" className="text-lg">
              About different Google technologies
            </Typography>
            <Button
              variant="outlined"
              className="text-white border-white hover:bg-white hover:text-blue-900"
            >
              See Events
            </Button>
          </div>

          {/* Right Section: Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="bg-white text-black rounded-md shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    className="font-semibold"
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body2" className="mt-2 text-gray-700">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
