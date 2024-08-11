import React from "react";

const ProductDetail = ({ params }: { params: any }) => {
  const name = params.id;
  console.log(params.id);
  console.log(name);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default ProductDetail;
