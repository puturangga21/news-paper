import { useParams } from "react-router";
import { useFetch } from "../utils/useFetch";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import CardNews from "../components/CardNews";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SkeletonLoadingCard from "../components/SkeletonLoadingCard";

export default function Newspage() {
  const { category } = useParams();
  const [totalNews, setTotalNews] = useState(10);
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data, isLoading, error } = useFetch(`${apiUrl}/${category}`);

  function handleLoadMore() {
    setTotalNews(totalNews + 5);
  }

  return (
    <>
      <Navbar />

      <Layout pTop="pt-[140px] lg:pt-[204px] pb-[40px] lg:pb-[80px]">
        <div>
          <h1 className="gradient-font text-center font-display text-[28px] font-bold uppercase leading-[120%] md:text-[46px] lg:text-[76px] lg:leading-[90px]">
            Kategori {category}
          </h1>

          <p className="mt-4 text-center text-lg text-slate-600 md:text-2xl lg:mt-5 lg:text-[28px]">
            A description of the respective category goes right here. Be as
            expressive as possible, but in brief.
          </p>
        </div>
      </Layout>

      <Layout bgColor="bg-[#F2F4F7]" pTop="py-[40px] lg:py-[80px]">
        <div className="mt-7 flex w-[343px] flex-col gap-4 md:w-[670px] lg:mt-8 lg:w-full lg:gap-5">
          {isLoading && <SkeletonLoadingCard cards={8} />}
          {error && <p>{error}</p>}
          {data.slice(0, totalNews).map((data) => (
            <CardNews
              key={data.title}
              date={new Date(data.pubDate).toLocaleString("id-ID", {
                year: "numeric",
                day: "numeric",
                month: "long",
              })}
              title={data.title}
              description={data.description}
              img={data.thumbnail}
              link={data.link}
            />
          ))}
        </div>

        <div className="my-[60px] flex items-center justify-center">
          <Button
            onClick={() => handleLoadMore()}
            weight="w-[110px]"
            heigth="h-[44px]"
            color="bg-white"
            textColor="text-slate-800"
            display="block"
            hover="hover:bg-[#e2e8f0]">
            More article
          </Button>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
