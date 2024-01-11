export default function Layout({ children, mTop }) {
  return (
    <div className="container">
      <div
        className={`flex w-[343px] md:w-[560px] lg:w-[970px] ${mTop} m-auto flex-col items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}
