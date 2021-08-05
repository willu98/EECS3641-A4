import React, { useContext, useState } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory } from 'react-router-dom';
import './Confirm.css';

const RequiredInfo = () => {

  const history = useHistory();
  const [appointment, setAppointment] = useContext(AppointmentContext);
  const [confirmed, setConfirmed] = useState(false);
  return(
    <div className = "main">
      <h1 className = "h1">Confirmation</h1>

      {!confirmed?(
        <div>{appointment.first}, your appointment for the {appointment.vID} vaccine is set for {appointment.date}. <br></br>Please click the 'Confirm' button below to confirm your appointment.</div>)
        : <div>{appointment.first}, You have booked your appointment for the {appointment.vID} vaccine on {appointment.date}. <br></br>Please click the button below to book another appointment.</div>
      }
      <button type="submit" className="button" onClick={() => {
        if(confirmed){
          history.push(`/`);
        }
        setConfirmed(true);
        }}>
      {confirmed?(<span>Book Appointment</span>):<span>Confirm</span>}
      </button>
    </div>          

  );
};

export default RequiredInfo;