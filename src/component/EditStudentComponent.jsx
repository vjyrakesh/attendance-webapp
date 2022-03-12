import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import StudentService from "../api/StudentService"
import StandardService from "../api/StandardService"
import {Formik, Form, Field} from 'formik'

export default function EditStudentComponent(props) {

    const params = useParams()
    const [student, setStudent] = useState({firstName:'',lastName:'',username:'',standard:''})
    const [standards, setStandards] = useState([])
    
    useEffect(() => {
        console.log("inside fetch student hook")
        StandardService.getAllStandards()
        .then(response => {
            setStandards(response.data)
        })
        StudentService.getOneStudent(params.id)
        .then(response => {
            console.log(response.data)
            setStudent(response.data)
            
        })
        
    },[params.id])

    
    function handleOnSubmit(values) {
        console.log(values)
        StudentService.addStudentToStandard(student.id, values.standard)
        .then(response => {
            props.history.push("/students")
        })
    }

    
    return (
        <div className="container p-3 col-6">
            <h3>Edit Student</h3>
                <Formik onSubmit={handleOnSubmit} initialValues={{firstName:student.firstName, lastName:student.lastName,username:student.username,standard:student.standard}} enableReinitialize={true}>

                    <Form >
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
                            <label htmlFor='stdName' className='form-label'>Standard</label>
                            <div className='row'>
                                <div className='col-2'>
                                    <Field name='standard' className='form-select' as='select'>
                                        <option value='None'>Select</option>
                                        
                                        {
                                        standards.map(standard => <option value={standard.name} key={standard.id}>{standard.name}</option>)
                                    }
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