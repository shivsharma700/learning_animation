
function About() {
  return (
    <div className=" w-full px-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black " >
        <h1 className=" text-[3.5vw] leading-[4vw] tracking-tight " >
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className=" flex gap-6 w-full border-t-[1px] pt-10 mt-20 border-[#e4f1b3] " >
            <div className=" w-1/2 " >
                <h1 className=" text-6xl " >Our Approach</h1>
                <button className=" flex gap-10 uppercase items-center px-8 py-4 bg-zinc-900 mt-10 rounded-full text-white " >Read More
                   <div className=" w-2 h-2 rounded-full bg-zinc-100 " ></div>
                </button>
            </div>
            <div className=" w-1/2 h-[65vh] rounded-3xl bg-[#9fbb3b]  " ></div>
        </div>
    </div>
  )
}

export default About