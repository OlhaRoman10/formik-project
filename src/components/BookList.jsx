const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li ke={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

export default BookList;