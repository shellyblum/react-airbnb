import React, { Component } from 'react';
import Details from './Details';
import {
    Link
} from 'react-router-dom';

export default ({ name, imageUrl, price, maxGuests, id }) => {
    return (
        <div className="card">
            <img className="lacationImg" src={imageUrl}></img>
            <h3>{name}</h3>
            <p>{price} per night</p>
            <p>Max guests: {maxGuests}</p>
            <p>
                <button className="btn btn-primary">
                    <Link to="/booking">Book Now!</Link>
                </button>
                <button className="btn btn-default" >
                    <Link to={`/details/${id}`}>More Details</Link>
                </button>
            </p>
        </div>
    );
}
