import { toast } from "react-toastify";
import { addToWishlistService } from "../../services";

const addToWishlistHandler = async (product, wishlistDispatch, token) => {
    try {
        const response = await addToWishlistService(product, token);
        if (response.status === 201) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist })
        toast.info("Product saved in your wishlist")
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { addToWishlistHandler }