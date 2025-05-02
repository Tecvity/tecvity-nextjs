"use client";
import Header from "@/components/header/Header";
import Hero from "@/components/common/Hero";
import Features from "@/components/service/components/Features";
import Portfolio from "@/components/service/components/Portfolio";
import Clients from "@/components/service/components/Clients";
import Cta from "@/components/service/components/Cta";
import Video from "@/components/service/components/Video";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer"
import { useEffect, useState } from "react";
import { useGetData } from "@/utils/hooks";
import { serviceHero } from "@/data/features";
import { serialize } from 'next-mdx-remote/serialize';
import Testimonials from "@/components/service/components/Testimonials";
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

  useEffect(()=>{console.log({data, serializedInfo})},[data, serializedInfo])
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
      console.log(minimalPosts)
      setSubServices(minimalPosts)

    } catch (error) {
      console.error("Error fetching serialized info:", error);
    }
  };

    // const getSerializedContent = async (data) => {
    //   if (!data) return null;
      
    //   const serialized = await serialize(data);
    //   return serialized;
    // };
  

  return (
    <>
      <Header darkMode={true} />
      <Hero bgImage={serviceHero.bgImage} title={serviceHero.title}/>
      <Features featuresList={subServices} />
      <Portfolio />
      <Testimonials />
      <Clients/>
      <Cta/>
      <Footer />
    </>
  );
}
