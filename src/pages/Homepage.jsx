import Hero from "../components/Hero";
import FirstNews from "../components/FirstNews";
import SecondNews from "../components/SecondNews";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstNews />
      <SecondNews />
      <Footer />
    </>
  );
}
