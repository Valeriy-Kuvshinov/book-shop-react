
import { Home } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { About } from './pages/AboutUS.jsx'

const { useState } = React

export function App() {

    const [page, setPage] = useState('book');

    return (
        <section className="app main-layout">
            <header className="app-header main-layout">
                <div className='header-content'>
                    <img src="assets/img/miss-book.jpg" alt="logo" className="header-img" />
                    <h1>Miss Book</h1>
                </div>
                <nav className="app-nav">
                    <a onClick={() => setPage('home')} href="#">Home</a>
                    <a onClick={() => setPage('about')} href="#">About</a>
                    <a onClick={() => setPage('book')} href="#">Books</a>
                    <a onClick={() => setPage('edit')} href="#">Add Book</a>
                </nav>
            </header>

            <main>
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
                {page === 'edit' && <BookEdit />}
            </main>

            <footer className="app-footer">
                <p>© 2023 Valeriy Kuvshinov - All rights reserved</p>
            </footer>
        </section>
    )
}