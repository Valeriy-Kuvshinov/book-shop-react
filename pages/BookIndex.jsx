import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"
import { BookEdit } from "./BookEdit.jsx"

const { useState, useEffect } = React

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBookId, setSelectedBookId] = useState(null)
    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(() => {
        console.log('mount')
        bookService.query(filterBy).then(books => setBooks(books))
    }, [filterBy])

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId))
        })
    }

    function onSetFilterBy(newFilterBy) {
        console.log('filterBy:', newFilterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...newFilterBy }))
    }

    function onEditBook(bookId) {
        setIsEditMode(true)
        setSelectedBookId(bookId)
    }

    function onSelectBookId(bookId) {
        setSelectedBookId(bookId)
        setIsEditMode(false)
    }

    console.log('render')
    if (!books) return <div>Loading...</div>
    return (
        <section className="book-index main-layout">
            {!selectedBookId ? (
                <React.Fragment>
                    <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    <BookList books={books} onRemoveBook={onRemoveBook} onSelectBookId={onSelectBookId} onEditBook={onEditBook} />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {isEditMode ? (
                        <BookEdit
                            onBack={() => { setSelectedBookId(null); setIsEditMode(false); }}
                            bookId={selectedBookId}
                        />
                    ) : (
                        <BookDetails
                            onBack={() => setSelectedBookId(null)}
                            bookId={selectedBookId}
                        />
                    )}
                </React.Fragment>
            )}
        </section>
    )
}
