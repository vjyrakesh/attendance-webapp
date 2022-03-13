import {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik'
import PersonService from '../api/PersonService'

export default function RegisterPersonComponent(props) {

    const [person, setPerson] = useState({'firstName':'', 'lastName':'', 'username':'', 'password':'','personType':''})

    function handleOnSubmit(values) {
        console.log(values)
        PersonService.registerPerson(values)
        .then(response => {
            props.history.push("/students")
        })
    }

    return (
        <div className='container p-3 col-4'>
            <h3>Register Person</h3>
            <Formik onSubmit={handleOnSubmit} initialValues={{'firstName':'', 'lastName':'', 'username':'', 'password':'', 'personType':''}} enableReinitialize={true}>
                <Form>
                    <div>
                        <label htmlFor='firstName' className="form-label">First Name</label>
                        <Field name='firstName' type='text' className='form-control'/>
                    </div><br/>
                    <div>
                        <label htmlFor='lastName' className="form-label">Last Name</label>
                        <Field name='lastName' type='text' className='form-control'/>
                    </div><br/>
                    <div>
                        <label htmlFor='username' className="form-label">Username</label>
                        <Field name='username' type='text' className='form-control'/>
                    </div><br/>
                    <div>
                        <label htmlFor='password' className="form-label">Password</label>
                        <Field name='password' type='password' className='form-control'/>
                    </div><br/>
                    <div>
                        <label htmlFor='personType' className='form-label'>Person Type</label>
                        <div className='row'>
                            <div className='col-3'>
                                <Field name='personType' className='form-select' as='select'>
                                    <option value='NONE'>Select</option>
                                    <option value='STUDENT'>Student</option>
                                    <option value='TEACHER'>Teacher</option>
                                </Field>
                            </div>
                        </div>
                    </div><br/>
                    <div className='row'>
                        <div className='col-1'>
                            <button type='submit' className='btn btn-success mx-3'>Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}