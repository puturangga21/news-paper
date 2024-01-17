import Layout from "./Layout";

export default function Footer() {
  return (
    <>
      <Layout pTop="py-[40px] md:py-[60px]">
        <div className="flex w-[343px] flex-col items-center justify-center self-center text-center md:w-[472px] lg:w-[472px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="gradient-font font-display text-lg font-bold md:text-[28px]">
              Personally Newsletter
            </h1>
            <p className="text-base text-slate-600 md:text-lg">
              A bi-weekly newsletter of design inspiration, resources and
              anything related to career development.
            </p>
          </div>

          <div className="relative mt-[26px] flex w-[343px] flex-col gap-3 md:mt-8 md:block md:w-[400px]">
            <input
              type="text"
              placeholder="Email address"
              className="block w-full rounded-lg border border-gray-300 p-5 py-[15px] text-sm focus:outline-none md:border-y md:border-s md:pe-40 md:ps-5"
            />
            <button className="h-full w-full rounded-md bg-slate-800 p-5 text-sm font-semibold text-white md:absolute md:end-0 md:top-0 md:w-[136px] md:rounded-l-none md:rounded-r-lg md:p-0 ">
              Subscribe
            </button>
          </div>
        </div>
      </Layout>

      <div className="flex w-full flex-col items-center justify-center gap-3 border-t py-[60px]">
        <p className="max-w-sm text-center text-xs text-slate-800 md:max-w-xl">
          Copyright 2024 - Designed by Elikem Daniels and develop by Rangga
          using React & Tailwind
        </p>
        <span role="image" className="flex items-center justify-center gap-3">
          <img src="./react-logo.svg" alt="Logo" className="w-4" />
          <img src="./tailwind-logo.svg" alt="Logo" className="w-4" />
          <img src="./framer-logo.svg" alt="Logo" className="w-4" />
        </span>
      </div>
    </>
  );
}
