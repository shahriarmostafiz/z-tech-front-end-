import { useLoaderData } from "react-router-dom";

const CatergoryProduct = () => {
    const data = useLoaderData()
    console.log("category data is ", data);
    return (
        <div>
            category
        </div>
    );
};

export default CatergoryProduct;