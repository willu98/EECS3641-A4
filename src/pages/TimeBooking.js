import React, { useState, useContext } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import './TimeBooking.css';


const TimeBooking = () => {

    const [appointment, setAppointment] = useContext(AppointmentContext);

    const [currentDate, onChangeDate] = useState(new Date());
    const appointmentDaysAndTimesDictionary = 
    [{ "day": 2, "time": "10:00", "avaliability": "Unavaliable" },
    { "day": 3, "time": "11:20", "avaliability": "Avaliable" },
    { "day": 5, "time": "14:10", "avaliability": "Unavaliable" },
    { "day": 7, "time": "15:40", "avaliability": "Avaliable" },
    { "day": 11, "time": "17:30", "avaliability": "Unavaliable" }]
    const history = useHistory();


    return (
        <React.Fragment>
            <div className="appointments-main">
                <h1 className="appointments-h1">Book Appoitment</h1>
                <div className="date-div">
                    <h2 className="date-h2">Date: </h2>
                    <DatePicker
                        minDate={new Date()}
                        onChange={onChangeDate}
                        value={currentDate}
                        className="date-calendar" />
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            Time
                        </th>
                        <th>
                            Avaliablity
                        </th>
                    </tr>
                    {appointmentDaysAndTimesDictionary.map(item => {
                        
                        if (currentDate != null && currentDate.getDate() % item.day === 0 ) {
                            return (
                                <tr key = {item.time}>
                                    <td className="table-border">
                                        {item.time}
                                    </td>
                                    <td>
                                        {item.avaliability}
                                    </td>
                                    <td>
                                        {item.avaliability==="Avaliable"?
                                        <button className="book-on" onClick={() => {
                                            history.push(`/confirmation`);
                                            setAppointment({ ...appointment, date: currentDate.toDateString() });
                                            //console.log(appointment);
                                        }}>                                        
                                            Book
                                        </button>:
                                        <button disabled>Book</button>
                                        }
                                        
                                        {/* <button type="submit" className="appointments-button" onClick={() => history.push(`/locations/${UID}`)} >Book New Appointment</button> */}
                                        
                                    </td>
                                </tr>
                            );
                        }
                        return <></>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );
};
export default TimeBooking;