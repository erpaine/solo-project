import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function EntryCreator() {
    const [form, setForm] = useState({
        name: "",
        expirationDate: "",
        category: "",
    });
    
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value}
        })
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newItem = { ...form };
        console.log(newItem.expirationDate);
        
        
        await fetch("http://localhost:3000/route/item", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem)
        }).catch(error => {
            window.alert(error);
            return;
        });
        
        setForm({ name: "", expirationDate: "", category: ""});
        navigate("/");
    }

    return(
        <div>
            <h2>Enter Pantry Item</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expirationDate">Expiration Date</label>
                    <input
                    type="date"
                    className="form-control"
                    id="expirationDate"
                    value={form.expirationDate}
                    onChange={(e) => updateForm({ expirationDate: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                    type="text"
                    className="form-control"
                    id="category"
                    value={form.category}
                    onChange={(e) => updateForm({ category: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                    type="submit"
                    value="Create pantry item"
                    className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}