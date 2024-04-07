import Image from 'next/image'
import Link from 'next/link'
const BookDetails = ({ bookDetails }) => {
    const { title, description, author, cover, genre, pages, stock, sellPrice, rentPrice, sold } = bookDetails
    return (
        <div className='flex flex-col gap-5 justify-center items-center px-4 bg-gray-50 max-w-[70%] m-auto p-4 rounded-md shadow-sm mt-2'>
            <div>
                <Image
                    src={cover}
                    alt={title}
                    height={100}
                    width={200}
                    style={{ width: "300px", height: "auto", objectFit: "cover" }}
                />
            </div>
            <div className='w-[80%]'>
                <h2 className='text-xl font-medium mb-2'>{title}</h2>
                <p className="text-sm mb-2">{description}</p>
                <div className='flex gap-3 mb-1'>
                    <span>Author:</span>
                    <span className='font-bold'>{author}</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Genre:</span>
                    <span className='font-bold'>{genre}</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Sell Price:</span>
                    <span className='font-bold'>{sellPrice}৳</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Rent Price:</span>
                    <span className='font-bold'>{rentPrice}৳</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Rent Price:</span>
                    <span className='font-bold'>{rentPrice}৳</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Pages:</span>
                    <span className='font-bold'>{pages}৳</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Stocks:</span>
                    <span className='font-bold'>{stock}</span>
                </div>
                <div className='flex gap-3 mb-1'>
                    <span>Sold:</span>
                    <span className='font-bold'>{sold}</span>
                </div>
            </div>
            <Link href="/store" className='text-xl text-purple-500'> Go to store </Link>
        </div>
    )
}

export default BookDetails
