import React, { Component } from 'react';

export default function PantryItem(props) {
    const name = props.item.name;
    //const newName = name[0].toUpperCase() + name.substring(1);
    const category = props.item.category;
    //const newCategory =category[0].toUpperCase() + category.substring(1);
    return(
        <div className="itemBox">
            <p>{name}</p><p> Expires: {props.item.expirationDate}</p> <p>Category: {category}</p>
            <button className="button"
       onClick={() => {
         props.deleteItem(props.item._id);
       }}
        >
       Delete
        </button>
        </div>
    )
}