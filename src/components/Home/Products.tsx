import { products } from "@/contents/products";
import Image from "next/image";
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
    <div className="bg-[#F9F8F8] rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
      <p className="bg-[#274C5B] w-fit text-white px-2 py-1 rounded-full mb-3 text-sm">
        {type}
      </p>
      <div className="aspect-square rounded-xl overflow-hidden mb-3">
        {/* <img src={image} alt={name} className="w-full h-full object-cover" /> */}
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div>
        <p className="font-semibold text-lg mb-2">{name}</p>
        <hr className="w-full border-gray-300 my-2" />
        <div className="flex justify-between items-center text-sm md:text-base">
          <p>
            <span className="line-through text-gray-400 mr-2">{price}</span>
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
    <div className="mb-12 px-4 md:px-10 lg:px-24 mt-6">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="tag mb-4 ">Categories</span>
        <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#1F3B44]">
          Our Products
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="w-full flex justify-center mt-12">
        <Link
          href="#"
          className="flex gap-2 items-center justify-center px-6 py-3 bg-[#274C5B] w-max text-white text-base rounded-md font-bold hover:bg-[#1f3b44] transition"
        >
          Load more
          <FaCircleArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Products;
