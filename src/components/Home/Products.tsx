"use client";

import { motion } from "framer-motion";
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

// ✅ Product Card Component with hover + framer motion animation
export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const { name, price, discountedPrice, image, type } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group bg-[#F9F8F8] rounded-xl p-5 hover:shadow-2xl transition-all duration-500
             hover:-translate-y-2 relative overflow-hidden"
    >
      {/* Category Tag */}
      <p
        className="bg-[#274C5B] w-fit text-white px-3 py-1 rounded-full mb-3 text-sm font-medium 
                transition-all duration-300 group-hover:bg-[#1f3b44]"
      >
        {type}
      </p>

      {/* Image Section */}
      <div className="aspect-square rounded-xl overflow-hidden mb-3 relative">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Light Sweep Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                 translate-x-[-100%] group-hover:translate-x-[100%]
                 transition-transform duration-1000 ease-in-out"
        ></div>

        {/* Soft Overlay Glow */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        ></div>
      </div>

      {/* Text Section */}
      <div className="relative z-10">
        <p className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-[#274C5B]">
          {name}
        </p>
        <hr className="w-full border-gray-300 my-2" />
        <div className="flex justify-between items-center text-sm md:text-base">
          <p>
            <span className="line-through text-gray-400 mr-2">{price}</span>
            <span className="font-semibold text-[#274C5B]">
              {discountedPrice}
            </span>
          </p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      {/* Elegant Border Glow */}
      <span
        className="absolute inset-0 rounded-xl border border-transparent 
               group-hover:border-[#EFD372] transition-all duration-500"
      ></span>
    </motion.div>
  );
};

// ✅ Products Section
const Products = () => {
  return (
    <div className="mb-12 px-4 md:px-10 lg:px-24 mt-6">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <span className="tag mb-4 block text-[#EFD372] font-medium uppercase tracking-widest">
          Categories
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#1F3B44]">
          Our Products
        </h1>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <ProductCard data={item} />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="w-full flex justify-center mt-12"
      >
        <Link
          href="#"
          className="flex gap-2 items-center justify-center px-6 py-3 bg-[#274C5B] w-max text-white text-base rounded-md font-bold 
                     hover:bg-[#1f3b44] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Load more
          <FaCircleArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Products;
