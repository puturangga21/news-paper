import Hero from "../components/Hero";
import FirstNews from "../components/FirstNews";
import SecondNews from "../components/SecondNews";
import ThirdNews from "../components/ThirdNews";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstNews />
      <SecondNews />
      <ThirdNews />
      <Footer />
    </>
  );
}
