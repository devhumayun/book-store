import { BsCartCheck } from "react-icons/bs";
const AddToCart = () => {
    return (
        <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-purple-500 text-white px-3 py-2 rounded-lg">
                <BsCartCheck />
                <button> Buy Now </button>
            </div>
            <div className="flex items-center gap-2 bg-purple-500 text-white px-3 py-2 rounded-lg">
                <BsCartCheck />
                <button> Rent Now </button>
            </div>
        </div>
    )
}

export default AddToCart
