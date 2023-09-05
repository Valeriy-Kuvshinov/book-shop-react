import { bookService } from "../services/book.service.js"
import { LongTxt } from "../cmps/LongTxt.jsx"

const { useState, useEffect } = React

export function BookDetails({ bookId, onBack }) {
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.get(bookId).then(setBook)
    }, [bookId])

    if (!book) return <div>Loading...</div>

    function getReadingLength(pageCount) {
        if (pageCount > 500) return "Serious Reading"
        if (pageCount > 200) return "Decent Reading"
        return "Light Reading"
    }

    function getVintageStatus(publishedDate) {
        const currentYear = new Date().getFullYear();
        if (currentYear - publishedDate > 10) return "Vintage"
        if (currentYear - publishedDate < 1) return "New"
        return ""
    }

    function getPriceColor(amount) {
        if (amount > 150) return "red"
        if (amount < 20) return "green"
        return "black"
    }

    return (
        <section className="book-details main-layout">
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
            <h3>Authors: {book.authors.join(', ')}</h3>
            <h4>Published Year: {book.publishedDate} {getVintageStatus(book.publishedDate)}</h4>
            <div className='book-description'>
                <LongTxt txt={book.description} length={100} />
            </div>
            <p>Page Count: {book.pageCount} ({getReadingLength(book.pageCount)})</p>
            <p>Book language: {book.language}</p>
            <p>Categories: {book.categories.join(', ')}</p>
            <p style={{ color: getPriceColor(book.listPrice.amount) }}>
                Price: {book.listPrice.amount} {book.listPrice.currencyCode}
            </p>
            {book.listPrice.isOnSale && <p className="on-sale">On Sale</p>}
            <img src={`../assets/img/${book.thumbnail}.jpg`} alt={book.title} />
            <button onClick={onBack}>Back</button>
        </section>
    )
}
