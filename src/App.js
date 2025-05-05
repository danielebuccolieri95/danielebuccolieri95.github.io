import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import ChiSiamo from "./Components/ChiSiamo";
import ServiziOfferti from "./Components/ServiziOfferti";
import EventiTornei from "./Components/Eventi";
import PrezziOrari from "./Components/Prezzi";
import Gallery from "./Components/Galleria";
import DoveSiamo from "./Components/doveSiamo";
import Partner from "./Components/Partner";
import GoogleReviews from "./Components/Recensioni";
import Footer from "./Components/Footer";
import HeroSection2 from "./Components/HeaderProva";

function App() {
  return (
    <div className="App">
      <HeroSection />
      {/*       <HeroSection2 />
       */}{" "}
      <div className="backgroundHome">
        <ChiSiamo />
        <ServiziOfferti />
        <EventiTornei />
        <PrezziOrari />
        <Gallery />
        <Partner />
        <DoveSiamo />
        <GoogleReviews />{" "}
      </div>
      <Footer />
    </div>
  );
}

export default App;
