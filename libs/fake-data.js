const user = [
  {
    _id: {
      $oid: "660403f7ffc0f4bc050e7fb9",
    },
    name: "Maria Com Com",
    email: "mcomcom@hitmail.com",
    image_url:
      "https://res.cloudinary.com/atapas/image/upload/v1711539480/litloop/users/maria-com-com_gvjjwv.jpg",
  },
  {
    _id: {
      $oid: "66040596ffc0f4bc050e7fba",
    },
    name: "José da Silva",
    email: "josedasilva@gmail.com",
    image_url:
      "https://res.cloudinary.com/atapas/image/upload/v1711539480/litloop/users/joao-da-silva_js2jpw.jpg",
  },
];

const books = [
  {
    id: "6604060cffc0f4bc050e7fbc",
    title: "The Great Gatsby",
    description:
      "The Great Gatsby, the third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner's Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
    author: "F. Scott Fitzgerald",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539684/litloop/books/tgg_lid6da.jpg",
    genre: "Novel",
    pages: 256,
    isRented: false,
    stock: 34,
    rentPrice: 24,
    sellPrice: 230,
    sold: 12,
    ISBN: "1-86092-049-7",
  },
  {
    id: "66040753ffc0f4bc050e7fbd",
    title: "Murder!",
    description:
      "Stories in the Travelman Short Stories series take the reader to places of mystery, fantasy, horror, romance, and corners of the universe yet unexplored.",
    author: "Arnold Bennett",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539685/litloop/books/murder_luiyw1.jpg",
    genre: "Crime",
    pages: 198,
    isRented: true,
    stock: 7,
    rentPrice: 15,
    sellPrice: 120,
    sold: 10,
    ISBN: "1-86092-050-3",
    renterIds: ["d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa"],
  },
  {
    id: "66040bd9ffc0f4bc050e7fbe",
    title: "Alice's Adventures in Wonderland",
    description:
      "Alice's Adventures in Wonderland (commonly Alice in Wonderland) is an 1865 English children's novel by Lewis Carroll, a mathematics don at Oxford University. It details the story of a young girl named Alice who falls through a rabbit hole into a fantasy world of anthropomorphic creatures.",
    author: "Lewis Carroll",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539687/litloop/books/alice_dqjnxu.jpg",
    genre: "Children",
    pages: 128,
    isRented: false,
    stock: 12,
    rentPrice: 10,
    sellPrice: 100,
    sold: 15,
    ISBN: "1-86092-051-X",
  },
  {
    id: "66040c9fffc0f4bc050e7fbf",
    title: "Pride and Prejudice",
    description:
      "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
    author: "Jane Austen",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539684/litloop/books/pandp_le7cxz.jpg",
    genre: "Classic",
    pages: 280,
    isRented: false,
    stock: 20,
    rentPrice: 15,
    sellPrice: 120,
    sold: 10,
    ISBN: "1-86092-052-8",
  },
  {
    id: "66040d0effc0f4bc050e7fc0",
    title: "War and Peace",
    description:
      "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment;",
    author: "Leo Tolstoy",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539681/litloop/books/war-and-peace_k3dbo9.jpg",
    genre: "Historical Fiction",
    pages: 928,
    isRented: false,
    stock: 15,
    rentPrice: 20,
    sellPrice: 250,
    sold: 10,
    ISBN: "1-86092-053-6",
  },
  {
    id: "66040d33ffc0f4bc050e7fc1",
    title: "The Man",
    description:
      "The story of a brilliant man whose unflinching dedication to independence of thought and transparency in business sparked an entire industry--and whose personal tribulations humbled and strengthened him. Through it all, Alfred Best remained the eternal optimist.",
    author: "AM Best",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539682/litloop/books/the_man_lyortl.jpg",
    genre: "Biography",
    pages: 700,
    isRented: true,
    stock: 10,
    rentPrice: 15,
    sellPrice: 120,
    sold: 10,
    ISBN: "1-86092-054-4",
    renterIds: [
      "d0cdfaa6-beee-4dd9-bfe6-cbcfeceffa",
      "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    ],
  },
  {
    id: "66040d4affc0f4bc050e7fc2",
    title: "The Alchemist",
    description:
      "The Alchemist is a novel by Brazilian 'author' Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    author: "Paulo Coelho",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539688/litloop/books/alchemist_cwdh5y.jpg",
    genre: "Fiction",
    pages: 280,
    isRented: false,
    stock: 0,
    rentPrice: 15,
    sellPrice: 120,
    sold: 1,
    ISBN: "1-86092-055-2",
  },
  {
    id: "66040d85ffc0f4bc050e7fc3",
    title: "Moby Dick",
    description:
      "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
    author: "Herman Melville",
    cover:
      "https://res.cloudinary.com/atapas/image/upload/v1711539686/litloop/books/mobydick_dqtkvc.jpg",
    genre: "Novels",
    pages: 320,
    isRented: false,
    stock: 10,
    rentPrice: 15,
    sellPrice: 120,
    sold: 1,
    ISBN: "1-86092-056-0",
  },
];

const getAllBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find((book) => book.id === id);
};

module.exports = {
  getAllBooks,
  getBookById,
};
