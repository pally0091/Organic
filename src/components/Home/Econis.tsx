import Image from "next/image";

const Econis = () => {
  return (
    <div>
      {/* ------------------ LG Layout (existing) ------------------ */}
      <div className="relative hidden lg:block">
        <Image src="/Images/eco.png" alt="" height={900} width={900} />
        <div className="max-w-[785px] w-full h-[720px] p-16 bg-white absolute top-28 right-64 rounded-2xl flex flex-col gap-9">
          <div>
            <span className="tag">Eco Friendly</span>
            <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
              Econis is a Friendly Organic Store
            </h1>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Start with Our Company First
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Learn How to Grow Yourself
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Farming Strategies of Today
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------ MD / SM Layout (responsive) ------------------ */}
      <div className="block lg:hidden max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
        <Image
          src="/Images/eco.png"
          alt=""
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-2xl shadow-md"
        />

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <div>
            <span className="tag">Eco Friendly</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Econis is a Friendly Organic Store
            </h1>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold">
              Start with Our Company First
            </h4>
            <p className="mt-2 text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold">
              Learn How to Grow Yourself
            </h4>
            <p className="mt-2 text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-semibold">
              Farming Strategies of Today
            </h4>
            <p className="mt-2 text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Econis;
