import './App.css';
import data from './data.json';
import Book from './Book';

function App() {
  const { books } = data;

  return (
    <div className="book-container">
      <h1>THE LIBRARY</h1>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          year={book.year}
          genre={book.genre}
          rating={book.rating}
          description={book.description}
          image={book.image}
          url={book.url}
        />
      ))}
    </div>
  );
}

export default App;
