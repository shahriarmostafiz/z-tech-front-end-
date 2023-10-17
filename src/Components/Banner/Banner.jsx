
const Banner = () => {
    return (
        <div className=" flex  items-center lg:max-w-7xl mx-auto ">
            <div>
                <h1 className="max-w-md text-teal-600 font-bold text-3xl lg:text-5xl text-center ">
                    <p className="text-red-950 border-white border w-fit p-2 rounded-lg ">Z-Tech</p> <br />
                    Your one stop Tech Hub
                </h1>
            </div>
            <div className="flex-1 flex justify-end">
                <img src="/src/assets/bg-animated.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;