import Banner from "@/components/about/Banner";
import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center">
      {/* Left Image */}
      <div className="flex-1 overflow-hidden group">
        <Image
          src="/Images/about/banner2.png"
          alt="About Us Banner"
          width={1920}
          height={1080}
          className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
          priority
        />
      </div>

      {/* Right Content */}
      <div className=" flex-1 max-w-[675px] w-full">
        <span className="tag">About Us</span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 leading-snug">
          We do Creative <br /> Things for Success
        </h1>

        <div className="mt-5 flex flex-col gap-4  text-base sm:text-lg">
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to be the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to be the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/Images/about/Tractor.png"
              alt="Modern Agriculture Equipment"
              height={56}
              width={56}
            />
            <h4 className="text-xl sm:text-2xl font-semibold">
              Modern Agriculture Equipment
            </h4>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/Images/about/Chemical Plant.png"
              alt="No growth hormones are used"
              height={56}
              width={56}
            />
            <h4 className="text-xl sm:text-2xl font-semibold">
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
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-[#F9F8F8]">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">
            Why Choose us?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 leading-snug">
            We do not buy from the open market & traders.
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-col gap-6 max-w-full">
            {/* Feature 1 */}
            <div>
              {/* <div className="bg-[#ECECEC] flex items-center gap-3 p-6 md:p-8 rounded-full w-full md:w-[340px]">
                <Image src="/Images/Icon.png" alt="" height={24} width={24} />
                <p className="font-semibold text-lg md:text-xl">
                  100% Natural Product
                </p>
              </div> */}

              <div
                className="bg-[#ECECEC] flex items-center justify-center sm:justify-start gap-3 
             p-4 sm:p-5 md:p-5 rounded-full w-full sm:w-[280px] md:w-[320px] 
             group cursor-pointer transition-all duration-500 hover:bg-[#E5E5E5]"
              >
                {/* Icon Container */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  {/* Animated gradient ring */}
                  <div
                    className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr 
                    from-[#7EB693] via-[#B6D6A8] to-[#7EB693] animate-gradientMove"
                  ></div>

                  {/* Background circle */}
                  <div className="absolute inset-[2px] bg-[#ECECEC] rounded-full"></div>

                  {/* Icon itself */}
                  <Image
                    src="/Images/Icon.png"
                    alt="Natural Product Icon"
                    height={24}
                    width={24}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <p
                  className="font-semibold text-base sm:text-lg md:text-xl 
               transition-colors duration-300 group-hover:text-[#1F3B44] text-center sm:text-left"
                >
                  100% Natural Product
                </p>
              </div>

              <p className="text-gray-600 mt-3 ml-12 md:ml-16 text-base md:text-lg">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div
                className="bg-[#ECECEC] flex items-center justify-center sm:justify-start gap-3 
             p-4 sm:p-5 md:p-5 rounded-full w-full sm:w-[280px] md:w-[320px] 
             group cursor-pointer transition-all duration-500 hover:bg-[#E5E5E5]"
              >
                {/* Icon Container */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  {/* Animated gradient ring */}
                  <div
                    className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr 
                    from-[#7EB693] via-[#B6D6A8] to-[#7EB693] animate-gradientMove"
                  ></div>

                  {/* Background circle */}
                  <div className="absolute inset-[2px] bg-[#ECECEC] rounded-full"></div>

                  {/* Icon itself */}
                  <Image
                    src="/Images/Icon.png"
                    alt="Natural Product Icon"
                    height={24}
                    width={24}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text */}
                <p
                  className="font-semibold text-base sm:text-lg md:text-xl 
               transition-colors duration-300 group-hover:text-[#1F3B44] text-center sm:text-left"
                >
                  Increases resistance
                </p>
              </div>
              <p className="text-gray-600 mt-3 ml-12 md:ml-16 text-base md:text-lg">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/Images/about/choose.png"
            alt="Why Choose Us"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Grid Section */}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          {
            img: "/Images/about/grid_icon4.png",
            title: "Return Policy",
            desc: "Simply dummy text of the print in type setting industry.",
          },
          {
            img: "/Images/about/grid_icon1.png",
            title: "100% Fresh",
            desc: "Simply dummy text of the print in type setting industry.",
          },
          {
            img: "/Images/about/grid_icon2.png",
            title: "Support 24/7",
            desc: "Simply dummy text of the print in type setting industry.",
          },
          {
            img: "/Images/about/grid_icon3.png",
            title: "Secured Payment",
            desc: "Simply dummy text of the print in type setting industry.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center 
                 bg-white rounded-3xl py-8 px-6 md:py-12 md:px-8 
                 shadow-md hover:shadow-xl transition-all duration-500 
                 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer"
          >
            {/* Next.js Image */}
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <p className="text-xl md:text-[21px] font-semibold group-hover:text-[#264a59] transition-colors duration-300">
              {item.title}
            </p>
            <p className="text-center text-gray-600 text-base md:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
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
    <div className="py-16 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="max-w-[862px] w-full flex flex-col gap-3 justify-center items-center mx-auto text-center">
        <span className="tag">Teams</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-snug">
          Our Organic Experts
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mt-2">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      {/* Team List */}
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f9f8f8] hover:bg-white hover:shadow-2xl hover:shadow-[#e8e8e8] transition-all duration-300 rounded-2xl overflow-hidden flex flex-col"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover"
            />

            <div className="py-6 px-5 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 font-medium">
                  {member.position}
                </span>
                <div className="flex gap-3">
                  {member.social.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.link}
                      title={s.platform}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-lg"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f9f8f8] rounded-2xl overflow-hidden flex flex-col
                 transition-transform duration-300 transform
                 hover:scale-105 hover:shadow-xl hover:shadow-[#e8e8e8]/40 cursor-pointer group"
          >
            {/* Team Image */}
            <div className="relative w-full h-64 md:h-72 lg:h-64 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Team Info */}
            <div className="py-6 px-5 flex flex-col flex-1">
              <h3 className="text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#264a59]">
                {member.name}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                  {member.position}
                </span>
                <div className="flex gap-3">
                  {member.social.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.link}
                      title={s.platform}
                      className="text-gray-600 hover:text-[#264a59] transition-colors duration-300 text-lg"
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
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-[#274C5B]">
      {/* Section Header */}
      <div className="max-w-[500px] mx-auto flex flex-col justify-center items-center gap-4 text-center">
        <span className="tag">About Us</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug">
          What We Offer for You
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Single Offer */}
        {[
          { img: "/Images/about/offer2.png", title: "Spicy" },
          { img: "/Images/about/offer3.jpg", title: "Nuts & Feed" },
          { img: "/Images/about/offer4.jpg", title: "Fruits" },
          { img: "/Images/about/offer1.png", title: "Vegetable" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div
              className="bg-white rounded-lg overflow-hidden flex justify-center items-center w-full h-72 sm:h-80 md:h-80 
                      transition-transform duration-500 transform
                      group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#EFD372]/40"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p
              className="text-white text-center mt-4 font-semibold text-lg sm:text-xl
                    transition-colors duration-300 group-hover:text-[#EFD372]"
            >
              {item.title}
            </p>
          </div>
        ))}
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
