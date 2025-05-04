"use client";
import Header from "@/components/header/Header";
import Hero from "@/components/common/Hero";
import Features from "@/components/service/components/Features";
import Portfolio from "@/components/service/components/Portfolio";
import Clients from "@/components/service/components/Clients";
import Cta from "@/components/service/components/Cta";
import Footer from "@/components/footer/Footer"
import { useEffect, useState } from "react";
import { useGetData } from "@/utils/hooks";
import { serviceHero } from "@/data/features";
import Testimonials from "@/components/service/components/Testimonials";
import { projects2 } from "@/data/portfolio";
export default function ProjectsType({ params }) {
  const { type } = params;
  const [ serializedInfo, setSerializedInfo] = useState(null);
  const [ subServices, setSubServices ] = useState([])
  const { data , isLoading, error, getData } = useGetData();
  useEffect(() => {
    getData(`/api/Services/${type}`)
  }, [type]);
  useEffect(() => {
    if (data?.posts) {
      fetchSerializedInfo();
    }
  }, [data]);

  const fetchSerializedInfo = async () => {
    try {
      const posts = data?.posts || [];
  
      const minimalPosts = posts.map(post => ({
        iconSrc: post.iconSrc || "",
        title: post.title || "",
        text: post.text || "",
        slug: post.slug || "",
        type: type || "",
      }));
      setSubServices(minimalPosts)

    } catch (error) {
      console.error("Error fetching serialized info:", error);
    }
  };
  

  return (
    <>
      <Header darkMode={true} />
      <Hero bgImage={serviceHero.bgImage} title={serviceHero.title}/>
      <Features featuresList={subServices} />
      <Portfolio projects={projects2[type] || []}/>
      <Testimonials />
      <Clients/>
      <Cta/>
      <Footer />
    </>
  );
}
