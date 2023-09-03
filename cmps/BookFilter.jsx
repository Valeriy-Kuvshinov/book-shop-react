const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }
    const { txt, minPrice, maxPrice, language, publishedBefore, publishedAfter } = filterByToEdit

    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title: </label>
                <input value={txt} onChange={handleChange} type="text" placeholder="By Title" id="txt" name="txt" />

                <label htmlFor="minPrice">Min Price: </label>
                <input value={minPrice} onChange={handleChange} type="number" placeholder="By Min Price" id="minPrice" name="minPrice" />

                <label htmlFor="maxPrice">Max Price: </label>
                <input value={maxPrice} onChange={handleChange} type="number" placeholder="By Max Price" id="maxPrice" name="maxPrice" />

                <label htmlFor="language">Language: </label>
                <input value={language} onChange={handleChange} type="text" placeholder="By Language" id="language" name="language" />

                <label htmlFor="publishedBefore">Published Before: </label>
                <input value={publishedBefore} onChange={handleChange} type="number" placeholder="Published Before" id="publishedBefore" name="publishedBefore" />

                <label htmlFor="publishedAfter">Published After: </label>
                <input value={publishedAfter} onChange={handleChange} type="number" placeholder="Published After" id="publishedAfter" name="publishedAfter" />
            </form>
        </section>
    )
}