import {motion} from 'framer-motion';

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" w-full h-screen bg-zinc-900 pt-1 " >
        <div className=" textStructure mt-52 px-20  " >
            {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
            return (
                <div className="masker" key={index} >
                   <div className=" w-fit flex items-end overflow-hidden " >
                     { index === 1 && (
                        <motion.div initial={{width: 0}} animate={{width: "8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className=" mr-[1vw] w-[8vw] rounded-md h-[5.6vw]  relative bg-green-500 " ></motion.div>
                     ) }
                     <h1 className=" uppercase text-[7.5vw] leading-[6.4vw] tracking-tighter font-medium " >
                         {item}
                     </h1>
                   </div>
                </div>
            )
            })}
        </div>
        <div className=" border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20 " >
            {[
                "For public and private companies",
                "From the first pitch to IPO "
            ].map((item, index) => (
                <p key={index} className=" text-md font-light tracking-light leading-none " >{item}</p>
            ))}
            <div className="start flex justify-center ">
                <div className=" uppercase tracking-tight font-light text-sm px-5 py-2 border-[2px] shadow shadow-zinc-400 border-zinc-500 rounded-full " >
                    Start the Project
                </div>
                <div className="rotate-[330deg]  flex justify-center items-center  font-light text-sm w-10 h-10 border-[2px] shadow shadow-zinc-400 border-zinc-500 rounded-full " >
                    {"-->"}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage