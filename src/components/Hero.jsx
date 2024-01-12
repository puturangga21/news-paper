import Layout from "./Layout";

export default function Hero() {
  return (
    <Layout pTop="h-screen">
      <div className="flex h-10 w-[160px] self-center rounded-[100px] bg-[#F2F4F7]">
        <p className="m-auto text-sm font-semibold">👋 Meet Personally</p>
      </div>

      <div className="mt-[40px]">
        <h1 className="gradient-font text-center font-display text-[28px] font-bold leading-[120%] md:text-[46px] lg:text-[76px] lg:leading-[90px]">
          Minimal blog template for creative expressions
        </h1>

        <p className="mt-4 text-center text-lg text-slate-600 md:text-2xl lg:mt-5 lg:text-[28px]">
          100% customisable and SEO-friendly blog template for personal and
          commercial purposes.
        </p>
      </div>
    </Layout>
  );
}
