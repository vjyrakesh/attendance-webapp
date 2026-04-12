import StandardService from "../api/StandardService";
import {Formik, Form, Field} from 'formik'
import { useEffect, useState } from "react";
import TeacherService from "../api/TeacherService";
import SubjectService from "../api/SubjectService";
import { useGetTeachersQuery, useGetStandardsQuery } from "../hooks/queries";


export default function AddSubjectComponent(props) {
    const [subject, setSubject ] = useState({name:'', teacher:0, standard: 0});
    const getTeachersQuery = useGetTeachersQuery();
    const getStandardsQuery = useGetStandardsQuery();

    function handleOnSubmit(values) {
        SubjectService.addNewSubject(values.name)
        .then(response => {
            if(values.teacher > 0) {
                TeacherService.addSubjectToTeacher(values.teacher, values.name)
                .then(response => {
                    console.log('teacher added to subject')
                })
            }
            if(values.standard > 0) {
                SubjectService.addSubjectToStandard(response.data.id, values.standard)
                .then(response => {
                    console.log('subject added to standard')
                })
            }
        })
    }

    if(getTeachersQuery.isLoading || getStandardsQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }
    const teachers = getTeachersQuery.data;
    const standards = getStandardsQuery.data;

    return (
        <div className="container">
            <h3>Add subject</h3>
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