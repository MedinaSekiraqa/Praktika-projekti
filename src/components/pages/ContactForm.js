import React from 'react'
import {Formik, Form} from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup';

//import * as moment from 'moment'



export const ContactForm = () => {
    const validate=Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        age:Yup.string()
      .required("DOB is Required")
      .test("DOB", "Please choose a valid date of birth", (value) => {
        //return moment().diff(moment(value), "years") >= 10;
      }),
      email: Yup.string()
      .email('Email i invalid')
      .required('Email is required'),
      description: Yup.string()
      .max(50, 'Must be 15 characters or more')
      .required('Required'),

    })
    return(
      <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            description: ''
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
        }}
      
      >
        {formik =>(
           <div>
                <h1 className='my-4 font-weight-bold-display-4'>Contact Us</h1>
                
                <Form>
                    <TextField label="First Name" name="firstName" type="text"/>
                    <TextField label="Last Name" name="last tName" type="text"/>
                    <TextField label="Date of Birth" name="date of birth" type="date"/>
                    <TextField label="email" name="email" type="email"/>
                    <TextField label="Description" name="description" type="text"/>
                    <button className="btn btn-dark mt-3" type="submit">Send</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                </Form>
           </div>
        )}
      </Formik>
    )
}