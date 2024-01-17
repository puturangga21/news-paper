export default function Layout({ children, pTop, bgColor }) {
  return (
    <div className={`container min-w-full ${bgColor}`}>
      <div
        className={`flex w-[343px] md:w-[670px] lg:w-[970px] ${pTop} m-auto flex-col justify-center`}>
        {children}
      </div>
    </div>
  );
}
