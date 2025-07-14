
import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Programs/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [play,setPlay]=useState(false);
  return (
    <div>
      <Navbar />

      <Hero />

      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Program />
        <Title subTitle="About Us" title="Who We Are" />
        <About play={play} setPlay={setPlay}/>
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer play={play} setPlay={setPlay} />
    </div>
  );
};

export default App;
