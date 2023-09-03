const { useState } = React

import { Home } from './pages/HomePage.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { About } from './pages/AboutUS.jsx'

export function App() {

    const [page, setPage] = useState('book')

    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <h1>Miss Book</h1>
                <nav className="app-nav">
                    <a onClick={() => setPage('home')} href="#">Home</a>
                    <a onClick={() => setPage('about')} href="#">About</a>
                    <a onClick={() => setPage('book')} href="#">Books</a>
                </nav>
            </header>

            <main>
                {page === 'home' && < Home />}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
} 
