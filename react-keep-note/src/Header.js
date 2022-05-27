import React from 'react'
import logo from "./logo.png"

function Header() {

    const refreshMe = ()=>{
        window.location.reload();
    }

    return (
        <>
            <div className="header_container" id='header'>
                <div className="header">
                    <img src={logo} className='logo' alt="" onClick={refreshMe} />
                    <div className="pnotes">
                        <h1>PNOTES <span>Online Note Taking App</span></h1> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header