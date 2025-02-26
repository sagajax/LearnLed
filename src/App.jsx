import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Section from "./components/Section";
import Roadmap from "./components/Roadmap";
import Enroll from "./components/Enroll";
import Reward from "./components/Reward";
import Partner from "./components/Partner";

function App() {
  return (
    <div className="w-full h-auto flex flex-col overflow-scroll no-scrollbar items-center">
      <div className="relative w-full">
        <Hero />
        <Partner />
        <Roadmap /> 
        <Enroll />
        <Section />
        {/* <div className="absolute -right-24 mt-5 w-[200px] h-[700px]  bg-[#CECDFF] blur-[100px] transform -translate-y-1/2 scale-x-150 scale-y-75 rounded-full z-0">
        </div>
        <Reward /> */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
