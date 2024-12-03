function BookInfo({ year, genre, rating, description }) {
  return (
    <div className="book-info">
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
      <p>{description}</p>
    </div>
  );
}

export default BookInfo;
