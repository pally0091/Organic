import Banner from "@/components/Home/Banner";
import Banner2 from "@/components/Home/Banner2";
import Econis from "@/components/Home/Econis";
import Items from "@/components/Home/Items";
import News from "@/components/Home/News";
import OfferSection from "@/components/Home/OfferSection";
import Products from "@/components/Home/Products";
import Promotion from "@/components/Home/Promotion";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Promotion />
      <Banner2 />
      <Products />
      <Testimonial />
      <OfferSection />
      <Econis />
      <Items />
      <News />
      <Subscribe />
    </div>
  );
}
