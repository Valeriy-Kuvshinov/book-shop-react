export function About() {

    return (
        <div className="about-container main-layout">
            <h1 className="about-header">About Us</h1>
            <img src="assets/img/miss-book.jpg" alt="About us" className="about-image" />
            <p className="about-text">
                Welcome to Miss Book, the online haven for book lovers! Founded in 2020, at the midst of the covid pandemic,
                our mission was to bring to the readers worldwide a new experience, and provide the best writings there are to the user.
                Be it Engish or Russian, we'll be sure to provide you the book in the language that you want, as soon as possible.
            </p>
            <p className="about-text">
                Our library consists of dozens of categories, be it family books and comics, guidebooks and life advice,
                to fiction, romance, fantasy, thriller and much more , making sure there's a book
                for every reader out there. Our team works tirelessly to curate lists, find hidden gems,
                and provide recommendations.
            </p>
            <p className="about-text">
                Whether you're a casual reader or a hardcore bookworm, we believe that writings have the
                power to change lives. We're here to help you discover, read, and share books you'll love.
            </p>

            <h2 className="section-header">Our Journey</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <h3>2020: Founded</h3>
                    <p>We launched our platform.</p>
                </div>
                <div className="timeline-item">
                    <h3>2023: First Milestone</h3>
                    <p>Reached 1 million users.</p>
                </div>
            </div>

        </div>
    )
}
