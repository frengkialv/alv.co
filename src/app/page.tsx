import MarketingContent from "../components/MarketingContent";
import LogoBrand from "@/components/LogoBrand";
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/TopSelling";
import RatingCarousel from "@/components/RatingCarousel";
import BannerCarousel from "@/components/BannerCarousel";

export default function Home() {
  return (
    <>
      <MarketingContent />
      <LogoBrand />
      <NewArrival />
      <TopSelling />
      {/* <BannerCarousel /> */}
      <RatingCarousel />
    </>
  );
}
