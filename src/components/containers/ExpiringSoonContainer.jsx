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
      }, [items.length]);

    async function deleteItem(id) {
        await fetch(`http://localhost:3000/${id}`, {
            method: "DELETE"
        });
        
        const newItems = items.filter((el) => el._id !== id);
        setItems(newItems);
    }
    const hasDate = items.filter((el)=> el.expirationDate)
    items.sort((a, b) => {
        console.log('a', Date.parse(a.expirationDate), 'b', Date.parse(b.expirationDate))
        return Date.parse(a.expirationDate) - Date.parse(b.expirationDate)})
    console.log('first el', hasDate[0])
    console.log(items);
    const today = Date.now();
    const expiredDivs = [];
    const itemDivs = [];
    for (let i = 0; i < items.length; i++){
        let exp = items[i].expirationDate; 
        if (!exp || (Date.parse(exp) - today) < 0){
            expiredDivs.push(<PantryItem 
                item={items[i]}
                deleteItem={() => deleteItem(items[i]._id)}
                key={items[i]._id}
 
            />)
        }
        else {
        itemDivs.push(<PantryItem 
                       item={items[i]}
                       deleteItem={() => deleteItem(items[i]._id)}
                       key={items[i]._id}
        
            />)
        }
    }
    return (
        <div>
            <h3>Expired</h3>
            {expiredDivs}
            <h3>Expiring Soon</h3>
            {itemDivs}
        </div>
    )
}