import React from 'react'
import "./BookList.css"
import { Link } from 'react-router-dom'

const Book = (books) => {
    const { cover_img, id, title, author, edition_count, first_publish_year } = books
    return (
        <div className='book-item flex flex-column flex-sb'>
            <Link to={`/book/${id}`} {...books}>
                <div className="book-item-img">
                    <img src={cover_img} alt="cover" />
                </div>
                <div className="book-item-info text-center">
                    <div className="book-item-info-item title fw-7 fs-18">
                        <span>{title}</span>
                    </div>

                    <div className="book-item-info-item author fs-15">
                        <span className="text-capitalize fw-7">Author: </span>
                        <span>{author.join(", ")}</span>
                    </div>

                    <div className="book-item-info-item edition-count fs-15">
                        <span className="text-capitalize fw-7">Total Editions: </span>
                        <span>{edition_count}</span>
                    </div>

                    <div className="book-item-info-item publish-year fs-15">
                        <span className="text-capitalize fw-7">First Publish Year: </span>
                        <span>{first_publish_year}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Book