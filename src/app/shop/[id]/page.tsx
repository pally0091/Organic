/* eslint-disable @next/next/no-img-element */
import { ProductCard } from "@/components/Home/Products";
import Subscribe from "@/components/Subscribe";
import { products } from "@/contents/products";
import { shopData } from "@/contents/ShopData";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="mb-16"
    >
      <div className="relative text-center">
        <img
          src="/Images/shop/singleBanner.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Shop Single
        </p>
      </div>
    </div>
  );
};

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const selectedProduct = shopData.find((data) => String(data.id) == id);
  console.log(selectedProduct);
  return (
    <div>
      <Banner />
      <div className="mt-[130px] px-[260px] flex items-center">
        <div className="w-1/2 relative p-10">
          <img
            className="w-full"
            src={selectedProduct?.image}
            alt=""
          />
          <p className="bg-[#274C5B] w-fit text-white px-1.5 py-1 rounded-md mb-[13px] absolute top-5 left-5">
            {selectedProduct?.type}
          </p>
        </div>
        <div className="px-[80px] w-1/2">
          <h2 className="text-4xl font-semibold">{selectedProduct?.name}</h2>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="mt-2">
            <span className="line-through text-gray-500">
              {selectedProduct?.price}
            </span>{" "}
            <span className="font-semibold">
              {selectedProduct?.discountedPrice}
            </span>
          </p>
          <p className="mt-6">{selectedProduct?.description}</p>
          <div className="flex items-center gap-5  mt-9">
            <p className="font-semibold">Quantity:</p>
            <input
              type="text"
              value={1}
              className="text-center py-7 font-semibold rounded-2xl border-2 border-[#274c5b] focus:outline-none w-[134px]"
            />
            <button className="py-7 px-12 rounded-xl bg-[#335b6b] text-white font-semibold flex gap-2 items-center">
              <span>Add to cart</span>{" "}
              <FaArrowAltCircleRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[90px] mb-[140px]">
        {/* product details tab  */}
        {/* need to be done  */}
        <p className="text-center">Product details tab</p>
      </div>
      {/* related products  */}
      <div className="mb-[150px]">
        <div className="text-center">
          <h1 className="text-[50px] font-bold">Related Products</h1>
        </div>
        <div className="my-[40px] max-w-[1400px] w-full mx-auto grid grid-cols-4 gap-[20px] mb-32">
          {products.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default ProductDetail;
