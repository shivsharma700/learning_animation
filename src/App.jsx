import About from "./components/About"
import Eye from "./components/Eye"
import Featured from "./components/Featured"
import LandingPage from "./components/LandingPage"
import Marquie from "./components/Marquie"
import Navbar from "./components/Navbar"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div  className=" w-full min-h-screen bg-zinc-900 text-white " >
      <Navbar/>
      <LandingPage/>
      <Marquie/>
      <About/>
      <Eye/>
      <Featured/>
    </div>
  )
}

export default App