import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import EntryCreator from '../EntryCreator.jsx';
import ExpiringSoonContainer from './ExpiringSoonContainer.jsx';

export default function MainContainer() {
     
    return(
        <div>
            <EntryCreator />
            <ExpiringSoonContainer />
        </div>
    )
}
    
