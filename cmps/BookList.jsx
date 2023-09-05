import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemoveBook, onSelectBookId, onEditBook }) {
    return (
        <ul className="book-list">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section className="book-buttons">
                        <button onClick={() => onRemoveBook(book.id)}><i className="fa-solid fa-trash-can"></i></button>
                        <button onClick={() => onSelectBookId(book.id)}><i className="fa-solid fa-circle-info"></i></button>
                        <button onClick={() => onEditBook(book.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                    </section>
                </li>
            )}
        </ul>
    )
}