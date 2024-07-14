/* eslint-disable @next/next/no-img-element */
import { products } from "@/contents/products";
import Link from "next/link";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";

interface Product {
  id: number;
  name: string;
  price: string;
  discountedPrice: string;
  image: string;
  type: string;
}

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { name, price, discountedPrice, image, type } = data;
  return (
    <div className="bg-[#F9F8F8] rounded-md p-[30px]">
      <p className="bg-[#274C5B] w-fit text-white px-1.5 py-1 rounded-md mb-[13px]">
        {type}
      </p>
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-1">
        <p className="font-semibold">{name}</p>
        <hr className="w-full bg-gray-400 my-[10px]" />
        <div className="flex justify-between">
          <p>
            <span className="line-through text-gray-500">{price}</span>{" "}
            <span className="font-semibold">{discountedPrice}</span>
          </p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="">
      <div className="text-center">
        <span className="tag mb-2">Categories </span>
        <h1 className="text-[50px] font-bold">Our Products</h1>
      </div>
      <div className="my-[40px] max-w-[1400px] w-full mx-auto grid grid-cols-4 gap-[20px] mb-32">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link
          href="#"
          className="flex gap-1 items-center justify-center p-[26px] bg-[#274C5B] w-[220px] text-base rounded-md font-bold text-white"
        >
          Load more
          <FaCircleArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Products;
