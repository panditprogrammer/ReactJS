import React from 'react'
import "./navbar.css"

const Navbar = ({ filter_item, menuItems }) => {
    return (
        <>
            <nav className="navbar bg-success">
                <div className="btn-group " role="group" aria-label="Basic outlined example">
                    {menuItems.map((curElement) => {
                        return <button onClick={() => filter_item(curElement)} className="btn btn-success" type="button">{curElement}</button>;
                    })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;
