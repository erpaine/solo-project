import React, { Component } from 'react';

export default function PantryItem(props) {

    return(
        <div>
            <p>{props.item.name} Expires: {props.item.expirationDate}, Category: {props.item.category}</p>
            <button className="btn btn-link"
       onClick={() => {
         props.deleteItem(props.item._id);
       }}
        >
       Delete
        </button>
        </div>
    )
}