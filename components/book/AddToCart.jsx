"use client"
import { StoreContext } from "@/context";
import { useContext } from "react";
import { BsCartCheck } from "react-icons/bs";
import { toast } from 'react-toastify';
const AddToCart = ({ book }) => {
    const { cartData, setCartData } = useContext(StoreContext)
    const handleBuyOrRent = (e, reason) => {
        e.preventDefault()

        const newData = { ...book, type: reason }

        if (cartData.includes(newData.id)) {
            return toast.info(`${book.title} already added to your cart`)
        } else {
            setCartData([...cartData, newData])
            toast.success(`${book.title} added to the cart`)
        }
    }

    return (
        <div className="flex gap-4">
            <div onClick={(e) => handleBuyOrRent(e, "buy")} className="flex items-center gap-2 bg-purple-500 text-white px-3 py-2 rounded-lg">
                <BsCartCheck />
                <button> Buy Now </button>
            </div>
            <div onClick={(e) => handleBuyOrRent(e, "rent")} className="flex items-center gap-2 bg-purple-500 text-white px-3 py-2 rounded-lg">
                <BsCartCheck />
                <button> Rent Now </button>
            </div>
        </div>
    )
}

export default AddToCart
