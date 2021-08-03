import React from 'react';
import './Appointment.css';

const Appointment = props => {
    return(
        <div className="appointment-main">
            <div className="appointment-date">{props.date}</div>
            <button className = "appointment-button1">Reschedule</button>
            <button className = "appointment-button2">Cancel</button>
        </div>
    );
};

export default Appointment;