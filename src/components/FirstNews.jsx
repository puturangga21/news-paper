import { useFetch } from "../utils/useFetch";

import CardNews from "./CardNews";
import HeadingNews from "./HeadingNews";
import Layout from "./Layout";

import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoadingCard from "./SkeletonLoadingCard";

export default function FirstNews() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { data, error, isLoading } = useFetch(`${apiUrl}/terbaru`);

  return (
    <Layout bgColor="bg-[#F2F4F7]" pTop="py-[40px] lg:py-[80px]">
      <div className="flex flex-col items-center justify-between">
        <HeadingNews
          title="Terbaru"
          textColor="text-slate-800"
          link="terbaru"
        />

        <div className="mt-7 flex w-[343px] flex-col gap-4 md:w-[670px] lg:mt-8 lg:w-full lg:gap-5">
          {isLoading && <SkeletonLoadingCard />}
          {error && <p>{error}</p>}
          {data.slice(0, 3).map((data) => (
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
      </div>
    </Layout>
  );
}
