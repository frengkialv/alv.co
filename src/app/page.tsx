import MarketingContent from "../components/MarketingContent";
import RatingCarousel from "@/components/RatingCarousel";
import SuggestionProduct from "@/components/SuggestionProduct";
import SkeletonLoadingSuggestionProduct from "@/components/SkeletonLoadingSuggestionProduct";
import { getProductsForDisplay } from "@/services/product.services";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));

  const { data: newArrivals } = await getProductsForDisplay("new-arrival", 4);

  const { data: topSelling } = await getProductsForDisplay("on-sale", 4);

  return (
    <div>
      <MarketingContent />
      <Suspense fallback={<SkeletonLoadingSuggestionProduct />}>
        <SuggestionProduct data={newArrivals} title="New Arrivals" />
      </Suspense>
      <Suspense fallback={<SkeletonLoadingSuggestionProduct />}>
        <SuggestionProduct data={topSelling} title="Top Selling" />
      </Suspense>
      <RatingCarousel />
    </div>
  );
}

export default Home;
