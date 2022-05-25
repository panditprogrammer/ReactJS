import React from 'react'

function Card(props) {

    let bgStyle = {
        backgroundColor: props.bg 
    }

    return (
        <div className="card" style={bgStyle}>
            <div className="card-head"> <h3>{props.h3}</h3> </div>
            <div className="card-body"><h2> {props.h2}</h2></div>
        </div>
    )
}

export default Card