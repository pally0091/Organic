import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    // <div className="flex gap-[35px] justify-center py-[150px]">
    //   <div>
    //     <Image src="/Images/Frame1.png" alt="Frame1" width={500} height={300} />
    //   </div>
    //   <div>
    //     <Image src="/Images/Frame2.png" alt="Frame2" width={500} height={300} />
    //   </div>
    // </div>
    <div className="py-24 px-4 md:px-10 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        <div className="w-full max-w-[500px]">
          <Image
            src="/Images/Frame1.png"
            alt="Frame1"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full max-w-[500px]">
          <Image
            src="/Images/Frame2.png"
            alt="Frame2"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
