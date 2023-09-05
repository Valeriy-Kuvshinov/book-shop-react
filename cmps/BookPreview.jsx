
export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <h2>{book.title}</h2>
            <h4>Author: {Array.isArray(book.authors) ? book.authors.join(', ') : book.authors}</h4>
            <h4>Published Year: {book.publishedDate}</h4>
            <h4>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h4>
            <img src={`../assets/img/${book.thumbnail}.jpg`} alt={book.title} />
        </article>
    )
}