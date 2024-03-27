
function Featured() {
  return (
    <div className=" w-full py-20 " >
        <div className=" w-full px-20 border-b-[1px] border-zinc-700 pb-20 " >
            <h1 className=" text-7xl tracking-tight " >Featured projects</h1>
        </div>
        <div className=" px-20 " >
            <div className=" cards w-full flex gap-10 mt-10 " >
                <div className="cardcontainer relative rounded-xl w-1/2 h-[70vh] overflow-hidden  ">
                    <h1 className=" absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tight z-[9] " > Fyde </h1>
                    <div className=" card w-full h-full rounded-xl overflow-hidden  " >
                        <img className=" w-full h-full bg-cover "  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="cardcontainer rounded-xl w-1/2 h-[70vh] overflow-hidden ">
                    <div className=" card w-full h-full rounded-xl overflow-hidden border border-white  " >
                        <img className=" w-full h-full bg-cover " src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured