
const Banner = () => {
    return (
        <div className=" flex bg-bg-6 bg-cover bg-center  items-center  mx-auto mb-6 md:mb-8 lg:mb-12 ">
            <div className="flex p-4 lg:w-[1240px] lg:min-h-[600px] mx-auto justify-between items-center ">
                <div >
                    <h1 className="max-w-md text-teal-600 font-bold text-2xl lg:text-5xl text-center ">
                        <div className=" flex gap-2 justify-center items-center text-red-950  w-full text-center p-2 rounded-lg ">Z-Tech
                            <img src={'/z-tech.svg'} className="w-7 lg:w-12" alt="" />
                        </div>
                        Your one stop <br /> Tech Hub
                    </h1>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src="https://i.ibb.co/jzVRfT6/bg-animated.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;