import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import './Vaccines.css';


const Vaccines = () => {
    const VACCINES = [
        {
            id: 'M',            
            name: "Moderna",
        },
        {
            id: 'P',            
            name: "Phizer",
        },
        {
            id: 'JJ',            
            name: "Johnson & Johnson",
        }          
    ];

    return(
        <div className = "vaccines-main">
            <h1 className = "vaccines-h1">Select Your Vaccine</h1>

            <Formik
                initialValues={{
                    picked: '',
                }}
            >
                {({ values }) => (
                    <Form>
                        <ul className="ul">
                            {VACCINES.map(vaccine => (
                                <React.Fragment key={vaccine.id}>
                                    <div className="appointment-date">{vaccine.name}</div>
                                    <label>
                                        <Field type="radio" name="picked" value={vaccine.id + "1"} />
                                        First Dose
                                    </label>
                                    <label>
                                        <Field type="radio" name="picked" value={vaccine.id + "2"} />
                                        Second Dose
                                    </label>                                    
                                </React.Fragment>
                            ))}
                        </ul> 

                        <button className="button" type="submit">Book Appointment</button>
                    </Form>
                )}
            </Formik>

              
        </div>
   );
};

export default Vaccines;