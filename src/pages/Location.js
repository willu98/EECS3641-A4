import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../global/CustomInput';
import './Location.css';

const Location = () => {
    // const history = useHistory();
    const locationList = [{ "name": "t", "location": "location 1" }, { "name": "b", "location": "location 2" }]
    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    postalCode: '',
                }}
                validationSchema={Yup.object({
                    postalCode: Yup.string()
                        .matches(/[a-z][0-9][a-z][0-9][a-z][0-9]/, 'Please Enter a valid postal code')
                        .required('required').lowercase(),
                })}
            >
                {props => (
                    <Form className="location-form">
                        <h1 className="location-h1">Pick Location</h1>
                        <h2 className="location-h2">Find nearby locations:</h2>
                        <CustomInput label="Postal Code:" name="postalCode" type="text" placeholder="L1H2H3" length="6" />
                        <button className="location-button">
                            {'Search'}
                        </button>
                    </Form>
                )}
            </Formik>
            {locationList.map(obj => {
                return (
                    <button className="table-button">
                        {obj.location}
                    </button>
                );
            })}
        </React.Fragment>
    )
}


export default Location;