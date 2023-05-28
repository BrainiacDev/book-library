import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">
                        Find your book of choice 
                    </h2><br />
                    <p className="header-text fs-10 fw-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quia tenetur eligendi minima quo perspiciatis molestiae provident,
                        sint nesciunt. Voluptas sed doloribus optio veritatis, inventore labore.
                    </p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header