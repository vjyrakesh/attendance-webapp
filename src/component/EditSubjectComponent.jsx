import StandardService from "../api/StandardService";
import {Formik, Form, Field} from 'formik'
import { useEffect, useState } from "react";
import TeacherService from "../api/TeacherService";
import SubjectService from "../api/SubjectService";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function EditSubjectComponent(props) {
    
    const [teachers, setTeachers] = useState([])
    const [standards, setStandards] = useState([])
    const [subject, setSubject ] = useState({name:'', teacher:0, standard: 0})
    const params = useParams()

    useEffect(() => {
        TeacherService.getAllTeachers()
        .then(response => {
            setTeachers(response.data)
        })

        StandardService.getAllStandards()
        .then(response => {
            setStandards(response.data)
        })

        SubjectService.getOneSubject(params.id)
        .then(response => {
            setSubject({
                ...subject,
                'name': response.data.name,
                'teacher': response.data.teacher.id,
                'standard': response.data.standard.id
            })
        })

    },[params.id])

    function handleOnSubmit(values) {
        console.log(values)
        if(values.teacher !== subject.teacher) {
            TeacherService.addSubjectToTeacher(values.teacher, values.name)
            .then(response => {
                console.log('teacher added to subject')
                props.history.push("/subjects")
            })
            
        }
        if(values.standard !== subject.standard) {
            SubjectService.addSubjectToStandard(params.id, values.standard)
            .then(response => {
                console.log('subject added to standard')
                props.history.push("/subjects")
            })
            
        }
        
        
    }
    
    return (
        <div className="container">
            <h3>Edit Subject</h3>
            <Formik onSubmit={handleOnSubmit} initialValues={{name:subject.name, teacher:subject.teacher, standard:subject.standard}} enableReinitialize={true}>
                <Form>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field name='name' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label htmlFor='teacher' className='form-label'>Teacher</label>
                        <div className='row'>
                            <div className='col-6'>
                                <Field name='teacher' className='form-select' as='select'>
                                    <option value={0}>Select</option>
                                    {
                                    teachers.map(teacher => <option value={teacher.id} key={teacher.id}>{teacher.firstName + ' ' + teacher.lastName}</option>)
                                }
                                </Field>
                            </div>
                        </div>
                    </div><br/>
                    <div>
                        <label htmlFor='standard' className='form-label'>Standard</label>
                        <div className='row'>
                            <div className='col-6'>
                                <Field name='standard' className='form-select' as='select'>
                                    <option value={0}>Select</option>
                                    {
                                    standards.map(standard => <option value={standard.id} key={standard.id}>{standard.name}</option>)
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