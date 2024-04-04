import { Footer } from "./components/Footer";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { Offers } from "./components/Offers";
import { TopNavbar } from "./components/TopNavbar";

function App() {
  return (
    <div>
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Offers></Offers>
      <FooterSection></FooterSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
