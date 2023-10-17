
const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const rating = form.rating.value
        const price = form.price.value
        const img = form.img.value
        const details = form.details.value
        const product = { name, brand, type, rating, price, img, details }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (
        <div>
            <h1 className="text-center text-5xl font-semibold">Add Product Page </h1>
            <form onSubmit={handleAddProduct}>
                <div className="w-2/3  mx-auto mt-8 space-y-3 " >
                    {/* row-1  */}
                    <div className="w-full space-y-3 ">
                        <label >Product Name: </label>
                        <div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered input-md w-full " required />
                        </div>
                    </div>
                    {/* row-2  */}
                    <div className="w-full  flex items-center gap-4">
                        <div className="flex-1 space-y-3">
                            <label >Brand Name  : </label>
                            <div>
                                <input type="text" name="brand" placeholder="Brand" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <label >Product Type: </label>
                            <div>
                                <input type="text" name="type" placeholder="Product Type" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>

                    </div>
                    {/* row-3  */}
                    <div className="w-full  flex items-center gap-4">
                        <div className="flex-1 space-y-3">
                            <label >Rating: </label>
                            <div>
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                        <div className="flex-1 space-y-3">
                            <label >Price  : </label>
                            <div>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                    </div>
                    {/* row-4  */}
                    <div className="w-full space-y-3  ">
                        <div>
                            <label >Product Image Link : </label>
                            <div>
                                <input type="url" name="img" placeholder="Image URL" className="input input-bordered input-md w-full " required />
                            </div>
                        </div>
                    </div>
                    {/* row-5  */}
                    <div className="w-full space-y-3  ">
                        <div>
                            <label >Product Details: </label>
                            <div>
                                <input type="text" name="details" placeholder="Product Details" className="input input-bordered input-lg w-full " required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" my-4 text-center">
                    <button type="submit" className="btn btn-success btn-outline rounded-md btn-wide">Add Product </button>

                </div>
            </form>
        </div>
    );
};

export default AddProduct;