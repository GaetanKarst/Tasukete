import React, { useEffect, useState } from 'react';
import wards from './data/tokyowards.json'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { services } from '../utils/constants'

export default function FormPage({ userInfo, setUserInfo }) {

    let history = useHistory();

    const redirect = () => {
        history.push('/helperPanel');
    }

    const passInformations = () => {

        // gets the form entries
        let name = document.getElementById('user-name').value;
        let contact = document.getElementById('user-contact').value;
        let date = document.getElementById('calendar-form-dropdown').value;
        let service = document.getElementById('services-list').value;
        let location = document.getElementById('location-list').value;
        let description = document.getElementById('problem-description').value;

        // assigns form entries to new object and update the state
        let newInfo = {};
        newInfo.name = name;
        newInfo.contact = contact;
        newInfo.date = date;
        newInfo.service = service;
        newInfo.location = location;
        newInfo.description = description;

        setUserInfo(userInfo.concat([newInfo]));
    }


    useEffect(() => {
        passInformations()
    }, []);

    return (
        <>
            <div className="form-container">
                <h1>Your Request:</h1>
                <p>This information will be used to select the right person to help you.</p>
                <form>
                    <label for="user-name">Name: </label><br />
                    <input type="text" id="user-name" value="John S." size="10" /><br />
                    <label for="user-contact">Contact: </label><br />
                    <input type="text" id="user-contact" value="079-7865-9876" />
                    <div id="form-calendar">
                        <label for="calendar-form-dropdowm">Date requested: </label><br />
                        <input type="date" id="calendar-form-dropdown" data-data-inline-picker="true" />
                    </div>
                    <div id="services-container">
                        <label for="services-list">Help me with: </label><br />
                        <select name="services list" id="services-list">
                            {services.map((service) => {
                                return <option value={service.name.toLowerCase()}>{service.name}: {service.price}</option>
                            })}
                        </select>
                    </div>
                    <div id="location-container">
                        <label for="location-list">Where: </label><br />
                        <select name="location list" id="location-list">
                            {wards.map((ward) => {
                                return <option value={ward.name.toLowerCase()}>{ward.name}</option>
                            })}
                        </select>
                    </div>
                    <div id="description-container">
                        <label htmlFor="">Description:</label><br />
                        <textarea name="problem description" id="problem-description" cols="50" rows="4"
                            value="I would like to open an account at Jp PostBank. Thank you very much for your help!"></textarea>

                    </div>
                    <button className="submitFormButton" onClick={() => { redirect(); passInformations(); }}>Submit Information</button>
                </form>
            </div>
        </>
    )
}