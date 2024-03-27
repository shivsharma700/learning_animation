import {motion} from 'framer-motion';

function Marquie() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" rounded-3xl w-full py-10 bg-[#004D43] " >
        <div className="text py-10  border-t-2 border-b-2 overflow-hidden border-zinc-300 flex gap-20 whitespace-nowrap ">
            <motion.h1 
              initial={{x:0}}
              animate={{x: "-100%" }}
              transition={{ repeat:Infinity, ease:"linear", duration:10 }}
              className=" text-[15vw] leading-none uppercase " 
            >
              Raadhe Shaam
            </motion.h1>
            <motion.h1 
              initial={{x:0}}
              animate={{x: "-100%" }}
              transition={{ repeat:Infinity, ease:"linear", duration:10 }}
              className=" text-[15vw] leading-none uppercase  " 
            >
              Raadhe Shaam
            </motion.h1>
            <motion.h1 
              initial={{x:0}}
              animate={{x: "-100%" }}
              transition={{ repeat:Infinity, ease:"linear", duration:10 }}
              className=" text-[15vw] leading-none uppercase " 
            >
              Raadhe Shaam
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquie