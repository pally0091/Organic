/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Giovani Bacardo",
    position: "Farmer",
    image: "/Images/team/member1.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
    ],
  },
  {
    name: "Marianne Loreno",
    position: "Designer",
    image: "/Images/team/member2.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
      {
        platform: "Twitter",
        icon: <FaTwitter />,
        link: "#",
      },
    ],
  },
  {
    name: "Riga Pelore",
    position: "Farmer",
    image: "/Images/team/member3.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
      {
        platform: "Twitter",
        icon: <FaTwitter />,
        link: "#",
      },
    ],
  },
  {
    name: "Keira Knightley",
    position: "Farmer",
    image: "/Images/team/member4.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
      {
        platform: "Twitter",
        icon: <FaTwitter />,
        link: "#",
      },
    ],
  },
  {
    name: "Scott Lawrence",
    position: "Designer",
    image: "/Images/team/member5.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
      {
        platform: "Twitter",
        icon: <FaTwitter />,
        link: "#",
      },
    ],
  },
  {
    name: "Karen Allen",
    position: "Farmer",
    image: "/Images/team/member6.jpg",
    social: [
      {
        platform: "Instagram",
        icon: <FaInstagram />,
        link: "#",
      },
      {
        platform: "Facebook",
        icon: <FaFacebook />,
        link: "#",
      },
      {
        platform: "Twitter",
        icon: <FaTwitter />,
        link: "#",
      },
    ],
  },
];

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/team/team-banner.jpg')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[60px] font-bold  mt-5">
        Our Team
      </p>
    </div>
  );
};

const Teams = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-[855px] w-full mx-auto flex flex-col justify-center items-center text-center mt-[150px]">
        <span className="tag">Team</span>
        <h1 className="text-5xl font-extrabold text-[45px] leading-tight text-center mt-2">
          Our Organic Experts
        </h1>
        <p className="mt-4">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      {/* <div className="px-[260px] mt-10">
        <div className="grid gap-7 grid-cols-3 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#f9f8f8] hover:bg-white hover:shadow-2xl hover:shadow-[#e8e8e8] transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <img src={member.image} alt={member.name} />
              <div className="py-8 px-7">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="tag-two">{member.position}</span>
                  <div className="flex gap-3">
                    {member.social.map((s, index) => (
                      <a
                        key={index}
                        href={s.link}
                        title={s.platform}
                        className="text-lg"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-[180px] xl:px-[260px] mt-10">
        <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#f9f8f8] hover:bg-white hover:shadow-2xl hover:shadow-[#e8e8e8] transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="py-6 sm:py-8 px-5 sm:px-7">
                <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="tag-two text-sm sm:text-base">
                    {member.position}
                  </span>
                  <div className="flex gap-3">
                    {member.social.map((s, index) => (
                      <a
                        key={index}
                        href={s.link}
                        title={s.platform}
                        className="text-lg hover:text-[#7eb693] transition-colors"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default Teams;
