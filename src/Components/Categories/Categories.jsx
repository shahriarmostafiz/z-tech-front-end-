import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    // const [categories, setCategories] = useState(null)

    // const navigate = useNavigate()
    // useEffect(() => {
    //     fetch('/categories.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setCategories(data)
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch('/categories.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data)
    //         }), []
    // } )
    // console.log(categories);
    return (
        <div>
            <h1 className="text-center text-3xl lg:text-5xl font-medium">Shop by Categories </h1>
            <div className="flex justify-center gap-4 items-center p-4 lg:max-w-7xl lg:mx-auto ">
                <Link to={`/category/smartphone`}>
                    <div className="flex flex-col justify-center items-center">
                        <img src='https://i.ibb.co/0sJDBHh/phones.jpg' className="w-60 rounded-full" alt="" />
                        <h1 className="my-2">Smartphone </h1>
                    </div>
                </Link>
                <Link to={`/category/Laptop`}>
                    <div className="flex flex-col justify-center items-center"  >
                        <img src='https://i.ibb.co/Jdv68hH/laptop.jpg' className="w-60 rounded-full" alt="" />
                        <h1 className="my-2">Laptops </h1>
                    </div>
                </Link>
                <Link to={"/category/smartwatch"}>
                    <div className="flex flex-col justify-center items-center">
                        <img src='https://i.ibb.co/HdHkzb2/smartwatch.jpg' className="w-60 rounded-full" alt="" />
                        <h1 className="my-2">Smart Watches </h1>
                    </div>
                </Link>
                <Link to={`/category/monitor`}>
                    <div className="flex flex-col justify-center items-center">
                        <img src='https://i.ibb.co/StNpRgS/monitors.jpg' className="w-60 rounded-full" alt="" />
                        <h1 className="my-2">Monitors </h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;