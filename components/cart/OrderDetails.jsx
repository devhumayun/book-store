"use client"
import { StoreContext } from "@/context"
import { useContext } from "react"
const OrderDetails = () => {
    const { cartData } = useContext(StoreContext)

    const bookToBuy = cartData.filter((book) => {
        return book.type === "buy"
    })
    const priceForBuy = bookToBuy.reduce(
        (accumulator, book) => accumulator + book.sellPrice,
        0,
    )
    const bookToRent = cartData.filter((book) => {
        return book.type === "rent"
    })
    const priceForRent = bookToBuy.reduce(
        (accumulator, book) => accumulator + book.rentPrice,
        0,
    )

    const deliveryCharge = 20;

    return (
        <div className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            <h2 className="text-2xl pb-4">Order Details</h2>
            {
                (bookToBuy?.length + bookToRent?.length > 0) ? (
                    <>
                        <ul className="mb-2">
                            <li>Buying {bookToBuy?.length} books for: <strong>{priceForBuy} {" "}</strong>BDT</li>
                            <li>Buying {bookToRent?.length} books for: <strong>{priceForRent} {" "}</strong>BDT</li>
                            <li>Delivery Charge: <strong>{deliveryCharge} {" "}</strong>BDT</li>
                        </ul>
                        <div className="border"></div>
                        <div>Total amount for pay: {priceForBuy + priceForRent + deliveryCharge} {" "} BDT</div>
                    </>
                ) :
                    ("No book found in the cart")
            }


        </div>
    )
}

export default OrderDetails


