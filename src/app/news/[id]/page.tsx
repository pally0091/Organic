/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import { news } from "@/contents/news";
import React from "react";
import { FaUser } from "react-icons/fa6";

const NewsDetailPage = ({ params }: { params: { id: string } }) => {
  const selectedNews = news.find((item) => item.id === params.id);
  return (
    <div>
      {/* heading */}
      <div className="relative">
        <img
          src="/Images/portfolio/p5_description.png"
          alt=""
        />
        <div className="px-20 py-24 max-w-[1400px] rounded-2xl overflow-hidden bg-white absolute inset-x-0 mx-auto -bottom-32 z-10 shadow-lg shadow-gray-200">
          <div className="flex gap-7">
            {" "}
            <p>
              <b>Posted On:</b> January 6, 2022
            </p>
            <p className="flex gap-2 items-center">
              <FaUser className="text-[#7eb693]" /> By Rachi Card
            </p>
          </div>
          <h2 className="text-[70px] font-bold">{selectedNews?.title}</h2>
          <p className="mt-5 max-w-[726px] w-full">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed{" "}
          </p>
        </div>
      </div>
      {/* detail */}
      <div className="mt-[200px] px-[480px]">
        <p className="mb-5">
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h1 className="text-5xl font-bold">Preferred Form of Vitamin D?</h1>
        <p className="mt-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ul className="mt-7 list-disc flex flex-col gap-5">
          <li className="ms-7">
            {" "}
            Publishing packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-7">
            {" "}
            Content here, content here', making it look like readable
          </li>
          <li className="ms-7">
            {" "}
            Packages and web pageLorem Ipsum as their default
          </li>
        </ul>
        <div className="my-12 py-[70px] px-[60px] bg-[#F1EDEA] rounded-2xl text-center">
          <p className="text-xl font-bold">
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </p>
        </div>
        <h3 className="text-4xl font-bold">
          Make perfect organic product with us
        </h3>
        <p className="mt-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ol className="mt-7 list-decimal flex flex-col gap-5">
          <li className="ms-7">
            Publishing packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-7">
            Content here, content here', making it look like readable
          </li>
          <li className="ms-7">
            Packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-7"> more-or-less normal distribution of letters</li>
        </ol>
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default NewsDetailPage;
