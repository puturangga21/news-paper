import FirstNews from "./components/FirstNews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondNews from "./components/SecondNews";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FirstNews />
      <SecondNews />
      <Footer />
      <Analytics />
    </>
  );
}
