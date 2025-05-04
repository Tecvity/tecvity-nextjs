"use client";
import Header from "@/components/header/Header";
import ServiceDetails from "@/components/service/components/ServiceDetails";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import { useGetData } from "@/utils/hooks";

export default function ProjectPageDetails({ params }) {
  const { sub, type } = params;
  const { data, isLoading, error, getData } = useGetData();
  useEffect(() => {
    getData(`/api/Services/${type}/${sub}`);
  }, [sub]);

  return (
    <>
      <Header />
      {data && <ServiceDetails serviceItem={data.services} />}
      <MarqueeComponent />
      <Footer />
    </>
  );
}
