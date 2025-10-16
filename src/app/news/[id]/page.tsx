import Subscribe from "@/components/Subscribe";
import { news } from "@/contents/news";
import { FaUser } from "react-icons/fa6";

const NewsDetailPage = ({ params }: { params: { id: string } }) => {
  const selectedNews = news.find((item) => item.id === params.id);
  return (
    <div>
      {/* heading */}
      <div className=" ">
        <div
          className="relative w-full h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/portfolio/p5_description.png')",
          }}
        ></div>

        {/* Blog Header */}
        <div className="px-6 sm:px-10 lg:px-20 py-16 sm:py-24 max-w-[1400px] rounded-2xl overflow-hidden bg-white absolute inset-x-0 mx-auto -bottom-32 z-10 shadow-lg shadow-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 text-sm sm:text-base">
            <p>
              <b>Posted On:</b> January 6, 2022
            </p>
            <p className="flex gap-2 items-center">
              <FaUser className="text-[#7eb693]" /> By Rachi Card
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[70px] font-bold mt-4 leading-snug">
            {selectedNews?.title}
          </h2>
          <p className="mt-5 max-w-[726px] text-sm sm:text-base">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed.
          </p>
        </div>
      </div>
      {/* detail */}

      <div className="mt-[120px] sm:mt-[200px] px-4 sm:px-8 md:px-16 lg:px-[180px] xl:px-[480px]">
        <p className="mb-5 text-sm sm:text-base leading-relaxed">
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-6">
          Preferred Form of Vitamin D?
        </h1>
        <p className="mt-6 text-sm sm:text-base leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &lsquo;Content here, content here&lsquo;,
          making it look like readable English.
        </p>

        {/* UL List */}
        <ul className="mt-7 list-disc flex flex-col gap-3 sm:gap-5 text-sm sm:text-base">
          <li className="ms-6">
            Publishing packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-6">
            Content here, content here&lsquo;, making it look like readable
          </li>
          <li className="ms-6">
            Packages and web pageLorem Ipsum as their default
          </li>
        </ul>

        {/* Quote Box */}
        <div className="my-10 sm:my-12 py-6 sm:py-[70px] px-6 sm:px-[60px] bg-[#F1EDEA] rounded-2xl text-center">
          <p className="text-base sm:text-xl font-bold leading-relaxed">
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </p>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Make perfect organic product with us
        </h3>
        <p className="mt-6 text-sm sm:text-base leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here&lsquo;,
          making it look like readable English.
        </p>

        {/* OL List */}
        <ol className="mt-7 list-decimal flex flex-col gap-3 sm:gap-5 text-sm sm:text-base">
          <li className="ms-6">
            Publishing packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-6">
            Content here, content here&lsquo;, making it look like readable
          </li>
          <li className="ms-6">
            Packages and web pageLorem Ipsum as their default
          </li>
          <li className="ms-6">more-or-less normal distribution of letters</li>
        </ol>
      </div>
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default NewsDetailPage;
