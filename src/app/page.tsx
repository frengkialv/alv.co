import MarketingContent from "../components/MarketingContent";
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/TopSelling";
import RatingCarousel from "@/components/RatingCarousel";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <MarketingContent />
      <NewArrival />
      <TopSelling />
      <RatingCarousel />
    </>
  );
}
