import { getBookById } from "@/libs/fake-data";

const BookDetailsPage = ({ params: { id } }) => {
  const bookDetails = getBookById(id);
  console.log(bookDetails);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default BookDetailsPage;
