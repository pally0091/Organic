/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Subscribe from "@/components/Subscribe";
import { portfolioLists } from "@/contents/portfolioList";
import React from "react";

const PortfolioDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const selectedPortfolio = portfolioLists.find((item) => item.id === id);

  console.log(selectedPortfolio);
  return (
    <div className="">
      {/* Heading */}
      <div className="relative">
        <img
          src="/Images/portfolio/p5_description.png"
          alt=""
        />
        <div className="flex justify-between items-center max-w-[1400px] rounded-2xl overflow-hidden bg-white absolute inset-x-0 mx-auto -bottom-32 z-10 shadow-lg shadow-gray-200">
          <div className="px-20 py-24 ">
            <h2 className="text-[70px] font-bold">
              {selectedPortfolio?.title}
            </h2>
            <p className="mt-4">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed{" "}
            </p>
          </div>
          <div className="px-20 py-28 max-w-[510px] w-full bg-[#fafafa]">
            <table className="w-full">
              <tbody>
                <tr className="my-2">
                  <td className="font-semibold w-24 py-2">Date</td>
                  <td>: December 4, 2022</td>
                </tr>
                <tr className="my-2">
                  <td className="font-semibold w-24 py-2">Client</td>
                  <td>: Kevin Martin</td>
                </tr>
                <tr className="my-2">
                  <td className="font-semibold w-24 py-2">Category</td>
                  <td>: Agriculture, Eco</td>
                </tr>
                <tr className="my-2">
                  <td className="font-semibold w-24 py-2">Service</td>
                  <td>: Organic Products</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Details  */}
      <div className="mt-[200px] px-[480px]">
        <div className="mb-8">
          <h3 className="text-4xl font-semibold mb-6">About The Farm:</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and
            auncover many web sites still in their infancy. Various versions
            have evolved over the years
          </p>
        </div>
        <div className="mb-[70px]">
          <img
            src="/Images/portfolio/detail_content.png"
            alt=""
          />
        </div>
        <div className="mb-8">
          <h3 className="text-4xl font-semibold mb-6">How To Farm:</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and auncover many web sites still in their infancy. Various versions
            have evolved over the years
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-4xl font-semibold mb-6">Conclusion:</h3>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and
            auncover many web sites still in their infancy. Various versions
            have evolved over the years
          </p>
        </div>
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default PortfolioDetail;
