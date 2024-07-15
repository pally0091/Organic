import Image from "next/image";
import React from "react";

const Items = () => {
  const data = [
    {
      id: 1,
      name: "Item 1",
      img: "/Images/e 1.png",
    },
    {
      id: 2,
      name: "Item 2",
      img: "/Images/e 2.png",
    },
    {
      id: 3,
      name: "Item 3",
      img: "/Images/e 3.png",
    },
  ];
  return (
    <div className="py-[190px] bg-[#F1F8F4]">
      <div className="grid grid-cols-3 gap-[40px]">
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt={item.name}
              width={610}
              height={580}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
