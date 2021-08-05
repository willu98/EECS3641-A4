import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Appointment from '../global/Appointment';
import './Appointments.css';

const Appointments = () => {
    const UID = useParams().UID;
    const APPOINTMENTS = [
        {
            id: 'A1',            
            date: new Date("July 3 2021 11:20"),
        },
        {
            id: 'A2',            
            date: new Date("July 4 2021 10:00"),
        }
    ];
    const history = useHistory();


    return(
        <div className = "appointments-main">
            <h1 className = "appointments-h1">Current Appointments</h1>
            <ul className="ul">
                {APPOINTMENTS.map(appointment => (
                    <Appointment
                        key = {appointment.id}
                        date = {appointment.date.toDateString() + " " + appointment.date.toTimeString()} 
                    />
                ))}
            </ul>    
            <button type="submit" className="appointments-button" onClick={() => history.push(`/locations/${UID}`)} >Book New Appointment</button>
        </div>    
    );
};


export default Appointments;