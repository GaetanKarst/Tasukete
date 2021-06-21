import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CheckoutButton from './checkout'
import { helpers } from '../utils/constants'

let i = 0;

export default function HelperPanel() {

    const [matchingHelpers, setMatchingHelpers] = useState(helpers);

    // allows to navigate through helpers
    function nextHelper() {
        if (i >= helpers.length - 1) i = 0;
        else if (i < helpers.length) i++; 

        setMatchingHelpers(matchingHelpers.concat(helpers[i]));
    }

    function displayHelperPanel() {
        return (
            <div className="helper-information">
                <h3 key={matchingHelpers[i].first_name}>{matchingHelpers[i].first_name} is ready to help...</h3>
                <img src={matchingHelpers[i].image} id="helper-picture" alt="helper-picture" />
                <p>{matchingHelpers[i].description}</p>
            </div>
        )
    }

    useEffect(() => {
        displayHelperPanel();
    }, []);

    return (
        <>
            <div className="helper-panel">
                {displayHelperPanel()}

                <div id="button-container">
                    <button id="next-btn" onClick={() => { nextHelper() }}>Next</button>
                    <CheckoutButton />
                </div>
            </div>
        </>
    )
}