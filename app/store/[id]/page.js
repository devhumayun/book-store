import BookDetails from "@/components/book/BookDetails";
import { getBookById } from "@/libs/fake-data";

const BookDetailsPage = ({ params: { id } }) => {
  const bookDetails = getBookById(id);
  console.log(bookDetails);
  return <BookDetails bookDetails={bookDetails} />;
};

export default BookDetailsPage;
