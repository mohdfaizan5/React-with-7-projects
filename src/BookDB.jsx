import { useState } from "react"

function BookDB() {
  const [books, setBooks] = useState([
    {
      title: "$100m Offers",
      rating: 8,
      author: "Alex Harmozi"
    },
    {
      title: "The Secret Sauce of Life",
      rating: 9,
      author: "Faizan"
    },
    {
      title: "Rework",
      rating: 6,
      author: "Founders Basecamp"
    },
  ])

  const updateDB = () => {

    setBooks(books.map(b => b.rating == 6 ? { ...b, rating: 9 } : b))
  }

  return (
    <div>
      {books.map((book) => (

        <article key={Math.random()}>
          <h1>{book.title}</h1>
          <p>Rating: {book.rating}</p>
          <p>Author: {book.author}</p>
          <button className="border-2 border-black" onClick={updateDB}>Update</button>
        </article>
      ))}

    </div>

  )
}

export default BookDB