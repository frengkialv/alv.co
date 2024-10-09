import * as React from "react";
import {
  BannerWrapper,
  FeaturedBrandWrapper,
  FeaturedImage,
  FeaturedImageWrapper,
  Header,
  HeaderWrapper,
  HighlightedImage,
  ImageBanner,
  LinkList,
  List,
  ListWrapper,
  TitleFeaturedBrand,
  Wrapper,
} from "./styles";
import { BrandType } from "@/types/brand";
import BannerNewArrivals from "@/../public/assets/banners/Banner-New-Arrivals.png";
import FeaturedAdidas from "@/../public/assets/featured/Featured_Adidas.jpg";
import FeaturedCK from "@/../public/assets/featured/Featured_Calvin_Klein.jpg";
import FeaturedFjallravenKanken from "@/../public/assets/featured/Featured_FjallravenKanken.jpg";
import FeaturedGap from "@/../public/assets/featured/Featured_GAP.jpg";
import FeaturedTimberland from "@/../public/assets/featured/Featured_Timberland.jpg";
import FeaturedUnderArmour from "@/../public/assets/featured/Featured_Under_Armour.jpg";
import ScrollToTop from "@/components/ScrollToTop";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Brands",
  };
}

const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/brand`;

async function BrandsPage() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));
  let data;

  try {
    const res = await fetch(URL, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    data = await res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }

  const {
    data: brands,
  }: {
    data: BrandType[];
  } = data;

  return (
    <Wrapper>
      <ScrollToTop />
      <BannerWrapper href="/new-arrivals">
        <ImageBanner
          alt="banner sale"
          src={BannerNewArrivals}
          unoptimized
          priority
        />
      </BannerWrapper>
      <HeaderWrapper>
        <Header>Browse Our Brands</Header>
      </HeaderWrapper>
      <ListWrapper>
        {brands.map((brand) => {
          return (
            <List key={brand.id}>
              <LinkList href={`/brand?brand=${brand.name}`}>
                {brand.name}
              </LinkList>
            </List>
          );
        })}
      </ListWrapper>

      <FeaturedBrandWrapper>
        <TitleFeaturedBrand>Featured Brands</TitleFeaturedBrand>
        <FeaturedImageWrapper>
          <HighlightedImage href="/brand?brand=adidas">
            <FeaturedImage
              alt="featured image Adidas"
              src={FeaturedAdidas}
              unoptimized
              priority
            />
          </HighlightedImage>
          <HighlightedImage href="/brand?brand=calvin%20klein">
            <FeaturedImage
              alt="featured image Calvin Klein"
              src={FeaturedCK}
              unoptimized
              priority
            />
          </HighlightedImage>
          <HighlightedImage href="/brand?brand=fjallraven%20kanken">
            <FeaturedImage
              alt="featured image Fjallraven Kanken"
              src={FeaturedFjallravenKanken}
              unoptimized
              priority
            />
          </HighlightedImage>
          <HighlightedImage href="/brand?brand=gap">
            <FeaturedImage
              alt="featured image Gap"
              src={FeaturedGap}
              unoptimized
              priority
            />
          </HighlightedImage>
          <HighlightedImage href="/brand?brand=timberland">
            <FeaturedImage
              alt="featured image Timberland"
              src={FeaturedTimberland}
              unoptimized
              priority
            />
          </HighlightedImage>
          <HighlightedImage href="/brand?brand=under%20armour">
            <FeaturedImage
              alt="featured image Under Armour"
              src={FeaturedUnderArmour}
              unoptimized
              priority
            />
          </HighlightedImage>
        </FeaturedImageWrapper>
      </FeaturedBrandWrapper>
    </Wrapper>
  );
}

export default BrandsPage;
