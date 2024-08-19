"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Header from "../components/Header";
import MarketingContent from "../components/MarketingContent";
import LogoBrand from "@/components/LogoBrand";
import NewArrival from "@/components/NewArrival";
import TopSelling from "@/components/TopSelling";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <Wrapper>
      <Header />
      <MarketingContent />
      <LogoBrand />
      <NewArrival />
      <TopSelling />
      <Carousel />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  isolation: isolate;
`;
