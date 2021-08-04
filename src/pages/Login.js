import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../global/CustomInput'; 
import './Login.css';

const Login = () => {

  const history = useHistory();

  const formik = 
    <Formik
      initialValues={{
        versionCode: '',
        ohipNum:'',
      }}
      validationSchema={Yup.object({
        versionCode: Yup.string()
          .matches(/[A-Z][A-Z]/, 'Must be only 2 characters long and only letters')
          .required('required'),
        ohipNum: Yup.string()
          .matches(/^[0-9]{10}$/, 'Must be 10 digits')
          .required('required'),
      })}
      onSubmit={(values, {setSubmitting, resetForm}) =>{
        history.push(`/appointments/${values.ohipNum}`);
      }}
    >
      {props => (
        <Form className="login-form">
          <h1 className="login-h1">Log In</h1>
          <CustomInput label="Health Card Type" name="versionCode" type="text" placeholder="JV" length = "2"/>
          <CustomInput label="Health Card Number" name="ohipNum" type="text" placeholder="0123456789" length = "10"/>
          <button className="login-button">
            {props.isSubmitting ? 'Loading...' : 'Submit'}        
          </button>
        </Form>
      )}
    </Formik>;

    return(formik);
};

export default Login;