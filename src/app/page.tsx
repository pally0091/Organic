import Banner from "@/components/Home/Banner";
import Banner2 from "@/components/Home/Banner2";
import Products from "@/components/Home/Products";
import Promotion from "@/components/Home/Promotion";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col gap-[150px]">
      <Banner />
      <Promotion />
      <Banner2 />
      <Products />
      <Testimonial />
    </div>
  );
}
