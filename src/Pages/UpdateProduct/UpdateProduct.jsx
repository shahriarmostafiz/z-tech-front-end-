import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {

    const data = useLoaderData()
    // console.log(data);
    const { _id, brand, name, details, rating, img, price, type } = data
    // console.log(name);
    // console.log(img, price, type);
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const rating = form.rating.value
        const img = form.img.value
        const type = form.type.value
        const details = form.details.value
        // const details = form.details.value
        const updatedInfo = { name, brand, price, rating, img, type, details }
        fetch(`https://z-tech-server.vercel.app/products/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("product updated successfully")
                }
            })

    }
    return (
        <div>
            <form onSubmit={handleUpdateProduct}>
                <div className="w-2/3  mx-auto mt-8 space-y-3 " >
                    {/* row-1  */}
                    <div className="w-full space-y-3 ">
                        <label >Product Name: </label>
                        <div>
                            <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered input-md w-full " required />
                        </div>
                    </div>
                    {/* row-2  */}
                    <div className="w-full  flex items-center gap-4">
                        <div className="flex-1 space-y-3">
                            <label >Brand Name  : </label>
                            <div>
                                <select name="brand" className="select select-bordered w-full " required>
                                    {/* <option value='default' disabled selected>Choose the brand</option> */}
                                    {/* <option defaultValue={brand} value={brand} disabled >Choose the brand</option> */}
                                    <option disabled value={brand} selected  >{brand}</option>
                                    <option value='apple'>Apple </option>
                                    <option value='samsung'>Samsung</option>
                                    <option value='google'>Google</option>
                                    <option value='intel'>Intel </option>
                                    <option value='sony'>Sony </option>
                                    <option value='asus'>Asus </option>
                                    {/* <option value= ''></option> */}
                                </select>
                                {/* <input type="text" name="brand" placeholder="Brand" className="input input-bordered input-md w-full " required /> */}
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <label >Product Type: </label>
                            <div>
                                <input type="text" defaultValue={type} name="type" placeholder="Product Type" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>

                    </div>
                    {/* row-3  */}
                    <div className="w-full  flex items-center gap-4">
                        <div className="flex-1 space-y-3">
                            <label >Rating: </label>
                            <div>
                                <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <label >Price  : </label>
                            <div>
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                    </div>
                    {/* row-4  */}
                    <div className="w-full space-y-3  ">
                        <div>
                            <label >Product Image Link : </label>
                            <div>
                                <input type="url" defaultValue={img} name="img" placeholder="Image URL" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                    </div>
                    {/* row-5  */}
                    <div className="w-full space-y-3  ">
                        <div>
                            <label >Product Details: </label>
                            <div>
                                <input type="text" name="details" defaultValue={details} placeholder="Product Details" className="input input-bordered input-lg w-full " required />
                            </div>
                        </div>
                    </div>
                </div>
                {error && <p className="text-red-500 text-center my-4">{errorMessage}</p>}
                <div className=" my-4 text-center">
                    <button type="submit" className="btn btn-warning btn-outline rounded-md btn-wide">Update Product </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;