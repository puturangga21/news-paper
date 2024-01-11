import Layout from "./Layout";

export default function FirstNews() {
  return (
    <Layout bgColor="bg-[#F2F4F7]" pTop="pt-[80px]">
      <div className="flex items-center justify-between">
        <p>CNBC</p>

        <button>View all</button>
      </div>
    </Layout>
  );
}
