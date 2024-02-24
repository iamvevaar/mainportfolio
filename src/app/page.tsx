import Portfolio from "../components/Portfolio/page";
import Header from "../components/Header/page";
import About from "../components/About/page";
import Experiences from "../components/Experiences/page";
import Contact from "../components/Contact/page";
import Footer from "../components/Footer/page";
import Animation from "../components/Animation/page";
import Navbar from "../components/Navbar/page";

export default function Home() {
  return (
    <div>
      <Header />
      <About  />  
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer/>
      <Animation />
      <Navbar />  

    </div>
  );
}
