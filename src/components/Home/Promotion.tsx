import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <div className="flex gap-[35px] justify-center py-[150px]">
      <div>
        <Image
          src="/Images/Frame1.png"
          alt="Frame1"
          width={500}
          height={300}
        />
      </div>
      <div>
        <Image
          src="/Images/Frame2.png"
          alt="Frame2"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Promotion;
