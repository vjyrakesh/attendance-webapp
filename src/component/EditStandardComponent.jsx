import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import StandardService from '../api/StandardService'
import TeacherService from '../api/TeacherService'
import {Formik, Form, Field} from 'formik'

export default function EditStandardComponent(props) {

    const [standard,setStandard] = useState({name:'',classTeacher:0})
    const [teachers, setTeachers] = useState([])
    const params = useParams()

    useEffect(() => {
        TeacherService.getAllTeachers()
        .then(response => {
            setTeachers(response.data)
        })

        StandardService.getOneStandard(params.id)
        .then(response => {
            console.log(response)
            setStandard({
                ...standard,
                'name':response.data.name,
                'classTeacher':response.data.classTeacher.id
            }
            )
        })
    }, [params.id])

    function handleOnSubmit(values) {
        console.log(values)
        StandardService.addClassTeacherToStandard(params.id, values.classTeacher)
        .then(response => {
            console.log('class teacher added')
            props.history.push("/standards")
        })
    }

    return (
        <div className="container">
            <h3>Edit Standard</h3>
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