import MarketingContent from "../components/MarketingContent";
import SuggestionProduct from "@/components/SuggestionProduct";
import RatingCarousel from "@/components/RatingCarousel";
import { getProductsForDisplay } from "@/services/product.services";

export const dynamic = "force-dynamic";

async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  const { data: newArrivals } = await getProductsForDisplay("new-arrival", 4);

  const { data: topSelling } = await getProductsForDisplay("on-sale", 4);

  return (
    <div>
      <MarketingContent />
      <SuggestionProduct data={newArrivals} title="New Arrivals" />
      <SuggestionProduct data={topSelling} title="Top Selling" />
      <RatingCarousel />
    </div>
  );
}

export default Home;
