function Book({ title, author, year, genre, rating, description, image, url }) {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <p className="rating">Rating: {rating}</p>
      <p className="description">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Buy from Amazon.com
      </a>
    </div>
  );
}

export default Book;
