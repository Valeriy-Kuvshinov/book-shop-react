
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookEdit({ bookId, onBack }) {
    const [newBook, setNewBook] = useState({
        title: '',
        subtitle: '',
        authors: '',
        publishedDate: '',
        description: '',
        pageCount: 0,
        categories: '',
        thumbnail: '6',
        language: '',
        listPrice: {
            amount: 0,
            currencyCode: 'USD',
            isOnSale: true
        }
    })

    useEffect(() => {
        if (bookId) {
            bookService.get(bookId).then((book) => {
                setNewBook({
                    ...book,
                    authors: book.authors.join(", "),
                    categories: book.categories.join(", ")
                })
            })
        }
    }, [bookId])

    const handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        if (name.includes(',')) {
            const [parent, child] = name.split(',')
            setNewBook({
                ...newBook,
                [parent]: {
                    ...newBook[parent],
                    [child]: value
                }
            })
        } else {
            setNewBook({
                ...newBook,
                [name]: value,
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Transform the string fields to array
        const authorsArray = newBook.authors.split(',')
        const categoriesArray = newBook.categories.split(',')

        const bookToSubmit = {
            ...newBook,
            authors: authorsArray,
            categories: categoriesArray,
            pageCount: Number(newBook.pageCount),
            listPrice: {
                ...newBook.listPrice,
                amount: Number(newBook.listPrice.amount)
            }
        }
        if (bookId) {
            // Update existing book
            bookService.save(bookToSubmit).then(() => {
                console.log("Book Updated")
                onBack()
            })
        } else {
            // Create a new book
            bookService.createBook(bookToSubmit)
                .then(book => {
                    console.log("New Book Created", book)
                })
        }
    }

    return (
        <form className="editor-container main-layout" onSubmit={handleSubmit}>
            <label>
                Title:
                <input name="title" value={newBook.title} onChange={handleChange} type="text" placeholder="Book Title" required />
            </label>

            <label>
                Subtitle:
                <input name="subtitle" value={newBook.subtitle} onChange={handleChange} type="text" placeholder="Book Subtitle" required />
            </label>

            <label>
                Authors (comma-separated):
                <input name="authors" value={newBook.authors} onChange={handleChange} type="text" placeholder="Author1, Author2" required />
            </label>

            <label>
                Published Date:
                <input name="publishedDate" value={newBook.publishedDate} onChange={handleChange} type="number" placeholder="1999" required />
            </label>

            <label>
                Description:
                <textarea name="description" value={newBook.description} onChange={handleChange} placeholder="Enter book description here" required></textarea>
            </label>

            <label>
                Page Count:
                <input name="pageCount" value={newBook.pageCount} onChange={handleChange} type="number" placeholder="200" required />
            </label>

            <label>
                Categories (comma-separated):
                <input name="categories" value={newBook.categories} onChange={handleChange} type="text" placeholder="Fiction, Adventure" required />
            </label>

            <label>
                Language:
                <select name="language" value={newBook.language} onChange={handleChange} required>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="ru">Russian</option>
                </select>
            </label>

            <label>
                Price:
                <input name="listPrice,amount" value={newBook.listPrice.amount} onChange={handleChange} type="number" placeholder="100" required />
            </label>

            <label>
                Is On Sale:
                <input name="listPrice,isOnSale" value={newBook.listPrice.isOnSale} onChange={handleChange} type="checkbox" checked={newBook.listPrice.isOnSale} />
            </label>

            <button type="submit">Submit Book</button>
        </form>
    )
}