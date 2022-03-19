import StandardService from "../api/StandardService";
import {Formik, Form, Field} from 'formik'
import { useEffect, useState } from "react";
import TeacherService from "../api/TeacherService";

export default function CreateStandardComponent(props) {

    const [teachers, setTeachers] = useState([])
    const [standard, setStandard] = useState({name:'', classTeacher:0})

    useEffect(() => {
        TeacherService.getAllTeachers()
        .then(response => {
            setTeachers(response.data)
        })
    }, [])

    function handleOnSubmit(values) {
        console.log(values)
        StandardService.addStandard(values.name)
        .then(response => {
            console.log('standard created')
            const stdId = response.data.id
            if(values.classTeacher > 0) {
                StandardService.addClassTeacherToStandard(stdId, values.classTeacher)
                .then(response => {
                    console.log('class teacher added')
                })
            }
        })
    }

    return (
        <div className="container p-3 col-4">
            <h3>Add New Standard</h3>
            <Formik onSubmit={handleOnSubmit} initialValues={{name:standard.name, classTeacher:standard.classTeacher}} enableReinitialize={true}>
                <Form>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field name='name' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label htmlFor='classTeacher' className='form-label'>Class Teacher</label>
                        <div className='row'>
                            <div className='col-6'>
                                <Field name='classTeacher' className='form-select' as='select'>
                                    <option value={0}>Select</option>
                                    
                                    {
                                    teachers.map(teacher => <option value={teacher.id} key={teacher.id}>{teacher.firstName + ' ' + teacher.lastName}</option>)
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