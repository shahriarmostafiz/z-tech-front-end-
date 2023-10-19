
const Banner = () => {
    return (
        <div className=" flex bg-bg-6 bg-cover bg-center  items-center  mx-auto ">
            <div className="flex lg:w-[1440px] mx-auto justify-between items-center ">
                <div >
                    <h1 className="max-w-md text-teal-600 font-bold text-3xl lg:text-5xl text-center ">
                        <p className="text-red-950   w-full text-center p-2 rounded-lg ">Z-Tech</p>
                        Your one stop <br /> Tech Hub
                    </h1>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src="/src/assets/bg-animated.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;