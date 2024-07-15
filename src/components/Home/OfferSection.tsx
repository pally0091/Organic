import { offeredProducts } from "@/contents/products";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ProductCard } from "./Products";

const OfferSection = () => {
  const data = offeredProducts;
  return (
    <div className="px-[250px] py-[200px] bg-[#274C5B]">
      <div className="flex justify-between mb-[50px]">
        <div>
          <span className="tag mb-2">Offer </span>
          <h1 className="text-white font-semibold text-[50px]">
            We Offer Organic For You
          </h1>
        </div>
        <div>
          <Link
            href="#"
            className="flex gap-1 items-center justify-center p-[26px] bg-[#EFD372] w-[220px] text-base rounded-md"
          >
            View All Products
            <FaCircleArrowRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
