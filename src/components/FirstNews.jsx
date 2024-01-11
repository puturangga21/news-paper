import CardNews from "./CardNews";
import HeadingNews from "./HeadingNews";
import Layout from "./Layout";

export default function FirstNews() {
  return (
    <Layout bgColor="bg-[#F2F4F7]" pTop="pt-[40px] lg:pt-[80px]">
      <div className="flex flex-col items-center justify-between">
        <HeadingNews title="CNBC" textColor="text-slate-800" />

        <div className="mt-7 flex w-[343px] flex-col gap-4 md:w-[670px] lg:mt-8 lg:w-full lg:gap-5">
          <CardNews
            date="August 13, 2021"
            title="10 Hilarious Cartoons That Depict Real-Life Problems of Programmers"
            description="Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks."
            img="./thumbnail.jpg"
          />
        </div>
      </div>
    </Layout>
  );
}
