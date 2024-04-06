
import Image from 'next/image';
import Link from 'next/link';
import { RxDividerVertical } from "react-icons/rx";
import AddToCart from './AddToCart';

const BookCard = ({ book }) => {
    return (
        <Link
            href={`/store/${book.id}`}>
            <div>
                <div className='bg-gray-50 flex flex-col items-center p-2 m-3 shadow-sm rounded-md w-[300px]'>
                    <Image
                        src={book.cover}
                        height={100}
                        width={150}
                        alt={book.title}
                        style={{ height: "250px", width: "auto", objectFit: "cover" }}
                        property={true}
                    />

                    <h1 className='mt-1'> {book.title} </h1>
                    <div className='mt-1'>
                        <div className='flex gap-3 items-center '>
                            <p>{book.author}</p>
                            <RxDividerVertical />
                            <p>{book.genre}</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3 items-center mt-1'>
                            {
                                book.sellPrice &&
                                <div className='flex items-center gap-1'>
                                    <span className='text-sm'>sell:</span>
                                    <p>৳:{book.sellPrice}</p>
                                </div>

                            }
                            <RxDividerVertical />
                            {
                                book.sellPrice &&
                                <div className='flex items-center gap-1'>
                                    <span className='text-sm'>rent:</span>
                                    <p>৳:{book.rentPrice}</p>
                                    <span className='text-sm'>per month</span>
                                </div>

                            }
                        </div>
                    </div>
                    <div className='mt-2'>
                        <AddToCart />
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow-sm">
                <div className="flex p-4">
                    <h3 className="ml-2 text-sm font-medium">{book.title}</h3>
                </div>
                <div className="mb-2 h-13">
                    <Image
                        className="mr-2 rounded-md"
                        src={book.cover}
                        alt={book.title}
                        width={150}
                        height={100}
                        style={{ height: '200px', width: 'auto' }}
                        priority={true} />
                </div>
                <div className="flex flex-col justify-around truncate rounded-xl bg-white px-4 py-8 w-full text-xs">
                    <div className="flex justify-around">
                        <div>{book.stock ?
                            <div className="flex">
                                <span className="text-sm">{book.stock} in stock</span>
                            </div> :
                            <div className="flex">
                                <span className="text-sm">No Stock</span>
                            </div>}</div>
                        <div className="flex">
                            <span className="text-sm"> {book.sellPrice} to buy</span>
                        </div>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-sm">Rent for {book.rentPrice} INR per month</p>
                        <p className="text-xs">{book.isRented ?
                            `Currently this book is rented by ${book?.renterIds?.length} customer` :
                            `Currently no one has rented this book`}</p>
                    </div>
                </div>
            </div> */}
        </Link>
    )
}

export default BookCard
