import "./App.css";
import Enroll from "./components/Enroll";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Roadmap from "./components/Roadmap";
import Section from "./components/Section";

function App() {
  return (
    <div className="w-full h-auto flex flex-col overflow-scroll no-scrollbar items-center">
      <div className="relative w-full">
        <Hero />
        <Partner />
        <Enroll />
        <Section />
        {/* <div className="absolute -right-24 mt-5 w-[200px] h-[700px]  bg-[#CECDFF] blur-[100px] transform -translate-y-1/2 scale-x-150 scale-y-75 rounded-full z-0">
        </div>
        <Reward /> */}
        <Roadmap />
        {/* <MobRoadmap />  */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default App;
