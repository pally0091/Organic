/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/about/Banner";
import Subscribe from "@/components/Subscribe";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <img
          src="/Images/about/banner2.png"
          alt="About Us Banner"
        />
      </div>
      <div className="max-w-[675px] w-full">
        <span className="tag">About Us</span>
        <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
          We do Creative <br /> Things for Success
        </h1>
        <div className="flex flex-col gap-5 mt-5">
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2">
          <div className="flex gap-3">
            <img
              className="w-14 h-14"
              src="/Images/about/Tractor.png"
              alt=""
            />
            <h4 className="text-2xl font-semibold">
              Modern Agriculture Equipment
            </h4>
          </div>
          <div className="flex gap-3">
            <img
              className="w-14 h-14"
              src="/Images/about/Chemical Plant.png"
              alt=""
            />
            <h4 className="text-2xl font-semibold">
              No growth hormones are used
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Choose = () => {
  return (
    <div className="py-[190px] px-[260px] bg-[#F9F8F8]">
      <div className="flex justify-between items-center gap-12">
        <div className="w-1/2">
          <span className="tag">Why Choose us?</span>
          <h1 className="text-5xl font-extrabold text-[50px] leading-tight mt-3">
            We do not buy from the open market & traders.
          </h1>
          <p className="mt-2">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div className="mt-9 flex flex-col gap-6 max-w-[500px] w-full">
            <div>
              <div className="bg-[#ECECEC] flex items-center gap-2 p-8 w-[340px] rounded-full">
                <img
                  src="/Images/Icon.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="font-semibold text-xl">100% Natural Product</p>
              </div>
              <p className="text-lg ms-16 mt-3 text-[#525C60]">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div>
              <div className="bg-[#ECECEC] flex items-center gap-2 p-8 w-[340px] rounded-full">
                <img
                  src="/Images/Icon.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="font-semibold text-xl">Increases resistance</p>
              </div>
              <p className="text-lg ms-16 mt-3 text-[#525C60]">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Images/about/choose.png"
            alt=""
          />
        </div>
      </div>
      {/* Grid Section  */}
      <div className="mt-[90px] mx-[140px] grid grid-cols-4 gap-7">
        <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-3xl py-12 px-8">
          <img
            src="Images/about/grid_icon4.png"
            alt=""
          />
          <p className="text-[21px] font-semibold">Return Policy</p>
          <p className="text-lg text-center">
            Simply dummy text of the print in type setting industry.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-3xl py-12 px-8">
          <img
            src="Images/about/grid_icon1.png"
            alt=""
          />
          <p className="text-[21px] font-semibold">100% Fresh</p>
          <p className="text-lg text-center">
            Simply dummy text of the print in type setting industry.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-3xl py-12 px-8">
          <img
            src="Images/about/grid_icon2.png"
            alt=""
          />
          <p className="text-[21px] font-semibold">Support 24/7</p>
          <p className="text-lg text-center">
            Simply dummy text of the print in type setting industry.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-3xl py-12 px-8">
          <img
            src="Images/about/grid_icon3.png"
            alt=""
          />
          <p className="text-[21px] font-semibold">Secured Payment</p>
          <p className="text-lg text-center">
            Simply dummy text of the print in type setting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
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
  ];
  return (
    <div className="py-[175px] px-[260px]">
      <div className="max-w-[862px] w-full flex flex-col gap-3 justify-center items-center mx-auto">
        <span className="tag">Teams</span>
        <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
          Our Organic Experts
        </h1>
        <p className="text-center">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      {/* team list  */}
      <div className="grid gap-7 grid-cols-3 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f9f8f8] hover:bg-white hover:shadow-2xl hover:shadow-[#e8e8e8] transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
            />
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
    </div>
  );
};

const Offer = () => {
  return (
    <div className="py-[188px] px-[260px] bg-[#274C5B]">
      <div className="max-w-[500px] mx-auto flex flex-col justify-center items-center gap-4">
        <span className="tag">About Us</span>
        <h1 className="text-5xl font-extrabold text-[45px] leading-tight text-white">
          What We Offer for You
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-5">
        <div>
          <div className="h-[314px] w-[334px] bg-white rounded-lg overflow-hidden flex justify-center">
            <img
              src="/Images/about/offer2.png"
              alt=""
            />
          </div>
          <p className="text-white text-center mt-6 font-semibold">Spicy</p>
        </div>
        <div>
          <div className="h-[314px] w-[334px] bg-white rounded-lg overflow-hidden flex justify-center">
            <img
              src="/Images/about/offer3.jpg"
              alt=""
            />
          </div>
          <p className="text-white text-center mt-6 font-semibold">
            Nuts & Feesd
          </p>
        </div>
        <div>
          <div className="h-[314px] w-[334px] bg-white rounded-lg overflow-hidden flex justify-center">
            <img
              src="/Images/about/offer4.jpg"
              alt=""
            />
          </div>
          <p className="text-white text-center mt-6 font-semibold">Fruits</p>
        </div>
        <div>
          <div className="h-[314px] w-[334px] bg-white rounded-lg overflow-hidden flex justify-center">
            <img
              src="/Images/about/offer1.png"
              alt=""
            />
          </div>
          <p className="text-white text-center mt-6 font-semibold">Vegetable</p>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Choose />
      <Team />
      <Offer />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default AboutPage;
