import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
    const { user } = useContext(AuthContext)
    const email = user.email
    console.log(email);
    return (
        <div>
            myCart
        </div>
    );
};

export default MyCart;