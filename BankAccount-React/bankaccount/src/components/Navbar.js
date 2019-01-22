import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div>
                <p className="title">Bank of React</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>
        </nav>
    )
}
export default Navbar