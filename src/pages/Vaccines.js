import React, { useContext } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';

import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import './Vaccines.css';


const Vaccines = () => {
    const history = useHistory();

    const VACCINES = [
        {
            id: 'M',
            name: "Moderna",
            numDoses: 2,
        },
        {
            id: 'P',
            name: "Phizer",
            numDoses: 2,
        },
        {
            id: 'JJ',
            name: "Johnson & Johnson",
            numDoses: 1,
        }
    ];

    const [appointment, setAppointment] = useContext(AppointmentContext);

    return (
        <div className="vaccines-main">
            <h1 className="vaccines-h1">Select Your Vaccine</h1>

            <Formik
                initialValues={{
                    picked: null,
                    terms: false,
                }}
                validationSchema={Yup.object({
                    picked: Yup.string('Required'),

                    terms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions'),
                })}
                onSubmit={values => {
                    setAppointment({ ...appointment, vID: values.picked });
                    history.push('/timebooking');              
                }}
            >
                {({ values }) => (
                    <Form>
                        <ul className="ul">
                            {VACCINES.map(vaccine => (
                                <React.Fragment key={vaccine.id}>
                                    <div className="appointment-date">{vaccine.name}</div>
                                    <div>
                                        <Field type="radio" value={"first " + vaccine.name} name="picked" />
                                        <span>First Dose</span>
                                        {vaccine.id !== 'JJ' ? (
                                            <>
                                                <Field type="radio" value={"second " + vaccine.name} name="picked" />
                                                <span>Second Dose</span>
                                            </>
                                        ) : null}

                                    </div>
                                </React.Fragment>
                            ))}
                            {values.picked == null && (
                                <b>Please select a vaccine</b>
                            )}
                        </ul>

                        <label>
                            <Field name="terms">
                                {({
                                    field, // { name, value, onChange, onBlur }
                                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                    meta,
                                }) => (
                                    <div>
                                        I Agree To Terms
                                        <input type="checkbox" {...field} />
                                        {meta.touched && meta.error && (
                                            <div className="error">{meta.error}</div>
                                        )}
                                    </div>
                                )}
                            </Field>
                        </label>
                        <br></br>
                        <button className="button" type="submit">Book Appointment</button>

                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default Vaccines;
