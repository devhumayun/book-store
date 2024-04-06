import { getAllBooks } from "@/libs/fake-data";
import BookCard from "./BookCard";

const BooksList = () => {

    const books = getAllBooks()

    return (
        books ? books?.map((book) => (<BookCard key={book.id} book={book} />)) : (<p>No Books Found</p>)
    )
}

export default BooksList
