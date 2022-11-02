import React, { Component } from 'react';
import EntryCreator from '../EntryCreator.jsx';
import ExpiringSoonContainer from './ExpiringSoonContainer.jsx';

export default function MainContainer() {
    return (
        <div>
            <EntryCreator />
            <ExpiringSoonContainer />
        </div>
    )
}