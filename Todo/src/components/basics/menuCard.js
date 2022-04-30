import React from 'react';
import "./card.css";

const menuCard = ({ menuData }) => {

    return (
        <>
            <div className="container row my-4" style={{ margin: "auto" }}>
                {menuData.map((curElement) => {

                    const {id,category,price,description} = curElement;

                    return (
                        <div className="col-md-4" key={id}>

                            <div className="card m-2">
                                <div className="card-body">
                                    <h5 className="card-title">{category}</h5>
                                </div>
                                <img src="/images/card.jpg" className="card-img-top p-2" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-text">${price}</h6>
                                    <p className="card-text">{description}</p>
                                    <a href="#" className="btn btn-success card-link py-1">Order Now</a>
                                </div>
                            </div>
                        </div>

                    );
                })}

            </div>
        </>
    )
}

export default menuCard
