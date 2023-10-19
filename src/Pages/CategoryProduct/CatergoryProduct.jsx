import { useLoaderData } from "react-router-dom";
import ProductCard from "../Products/ProductCard";

const CatergoryProduct = () => {
    const categoryData = useLoaderData()
    console.log("category data is ", categoryData);
    return (
        <div className="my-6 md:my-8 lg:my-12">
            <h1 className="text-3xl text-center"> List of all the  {categoryData[0].type}s available </h1>

            <div className="flex justify-center lg:max-w-7xl lg:mx-auto my-6 md:my-8 lg:my-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        categoryData?.map(data => <ProductCard key={data._id} product={data}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CatergoryProduct;