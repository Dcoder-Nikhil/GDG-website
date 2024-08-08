import { Box } from "@mui/material";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiArchiveRegister, GiGroupedDrops } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import React from "react";

const FAQHero = () => {
  return (
    <Box>
      <section className="bg-[#CDF5FD]">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-black lg:text-3xl">
            Frequently asked questions.
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <HiMiniUserGroup />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  What is Google Developers Group (GDG) ?
                </h1>

                <p className="mt-2 text-sm text-gray-900">
                  Google Developer Groups (GDGs) are for developers who are
                  interested in Google's developer technology; everything from
                  the Android, Chrome, Drive, and Google Cloud platforms, to
                  product APIs like the Cast API, Maps API, and YouTube API.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <GiArchiveRegister />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  Who can register for GDG Patna community event ?
                </h1>

                <p className="mt-2 text-sm text-gray-900">
                  Beginners, experts, literally everyone. Anyone with the
                  passion of learning, who’s fond of technology, passionate
                  programmers , everybody can register and attend.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <FaQuestionCircle />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  How can I become a member of GDG Patna ?
                </h1>

                <p className="mt-2 pb-4 text-sm text-gray-900">
                  Simply click on Join Us button you can see in Navbar or at
                  home page. and if you aren't from Bihar then find the nearest
                  GDG in your location at GDG Community Page
                </p>
                <a
                  className="border border-black rounded-lg p-1.5 text-black"
                  href="https://gdg.community.dev/"
                >
                  Click Here to Visit
                </a>
              </div>
            </div>

            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <AiFillMessage />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  How can I communicate my queries ?
                </h1>

                <p className="mt-2 text-sm text-gray-900">
                  Reach out to us on various social media sites. You can find
                  all our Social media handles at the home page and at footer
                  section. Our Volunteers/Admins will respond to all your
                  queries ASAP.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <GiGroupedDrops />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  What is Monthly Meetups ?
                </h1>

                <p className="mt-2 text-sm text-gray-900">
                  We hold monthly meetups in Patna, on Last Sunday of each
                  month, Get help and Mentor others, It also includes time to
                  talk and networking opportunities, a summary of new software
                  and hardware releases from local experts, and time to announce
                  anything new you have shipped this month. Bring your laptop
                  with something to work on.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block p-3 text-white bg-[#00A9FF] rounded-lg">
                <GiArchiveRegister />
              </div>

              <div>
                <h1 className="text-xl font-semibold text-black">
                  Is it mandatory to register and participate in the community
                  event ?
                </h1>

                <p className="mt-2 text-sm text-gray-900">
                  Yes. Each individual may register for only one ticket. You may
                  not register on behalf of anyone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default FAQHero;
