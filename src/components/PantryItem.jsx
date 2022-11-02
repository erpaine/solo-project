import React, { Component } from 'react';

export default function PantryItem(props) {

    return(
        <div>
            <p>Item: {props.item.name}, Expiration Date: {props.item.expirationDate}, Category: {props.item.category}</p>
        </div>
    )
}