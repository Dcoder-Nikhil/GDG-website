import {} from "react";
import { Box } from "@mui/material";

const EventHeader = () => {
  return (
    <Box>
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
            Events
          </h1>
          <p class="mt-6 text-gray-500 ">
            Our ultimate goal is to bring together all developers of Patna to
            create a thriving developer ecosystem.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default EventHeader;
