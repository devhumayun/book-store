
import Image from 'next/image';
import Link from 'next/link';
import { RxDividerVertical } from "react-icons/rx";
import AddToCart from './AddToCart';

const BookCard = ({ book }) => {
    return (
        <div>
            <div className='bg-gray-50 flex flex-col items-center p-2 m-3 shadow-sm rounded-md w-[300px]'>
                <Link
                    href={`/store/${book.id}`}>
                    <div className='flex justify-center'>
                        <Image
                            src={book.cover}
                            height={100}
                            width={150}
                            alt={book.title}
                            style={{ height: "250px", width: "auto", objectFit: "cover" }}
                            property={true}
                        />
                    </div>

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

                </Link>
                <div className='mt-2'>
                    <AddToCart book={book} />
                </div>
            </div>
        </div>

    )
}

export default BookCard
