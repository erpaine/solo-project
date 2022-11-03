import React, { Component } from 'react';
import PantryItem from '../PantryItem';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ExpiringSoonContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems() {
          const response = await fetch(`http://localhost:3000/`);
      
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const items = await response.json();
          setItems(items);
        }
      
        getItems();
      
        return;
      });

    async function deleteItem(id) {
        await fetch(`http://localhost:3000/${id}`, {
            method: "DELETE"
        });
        
        const newItems = items.filter((el) => el._id !== id);
        setItems(newItems);
    }
    
    items.sort((a, b) => {
        return Date.parse(a.expirationDate) - Date.parse(b.expirationDate)})
    const today = Date.now();
    //console.log(today.toString())
    const expiredDivs = [];
    const expiringDivs = [];
    const goodDivs = [];
    for (let i = 0; i < items.length; i++){
        let exp = items[i].expirationDate; 
        if (!exp || (Date.parse(exp) - today) < - 86400000){
            expiredDivs.push(<PantryItem 
                item={items[i]}
                deleteItem={() => deleteItem(items[i]._id)}
                key={items[i]._id}
 
            />)
        }
        else if (Date.parse(exp) - today < 604800000){
        expiringDivs.push(<PantryItem 
                       item={items[i]}
                       deleteItem={() => deleteItem(items[i]._id)}
                       key={items[i]._id}
            />)
        } else {
            goodDivs.push(
                <PantryItem 
                       item={items[i]}
                       deleteItem={() => deleteItem(items[i]._id)}
                       key={items[i]._id}
                       
            />)
        }
    }
    return (
        <div className="display">
                <h3>Expired</h3>
            <div className="expired">
                {expiredDivs}
            </div>
            <h3>Expiring Soon</h3>
            <div className="expiring">
            {expiringDivs}
            </div>
            <h3>Other Pantry Items</h3>
            <div className="other">
            {goodDivs}
            </div>
        </div>
    )
}