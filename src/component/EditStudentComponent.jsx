import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import StudentService from "../api/StudentService"
import StandardService from "../api/StandardService"
import {Formik, Form, Field} from 'formik'

export default function EditStudentComponent(props) {

    const params = useParams()
    const [student, setStudent] = useState({firstName:'',lastName:'',username:'',standard:''})
    const [standards, setStandards] = useState([])
    var selectedStd = ''

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

    function handleOnSubmit(event) {
        event.preventDefault()
        console.log(student)
        StudentService.addStudentToStandard(student.id, student.standard)
        .then(response => {
            props.history.push("/students")
        })
    }

    function handleInputChange(event) {
        const name = event.target.name
        setStudent(() => ({
            ...student,
            [name]: event.target.value,
        }))
    }

    return (
        <div className="container p-3 col-6">
            <h3>Edit Student</h3>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label htmlFor='firstName' className="form-label">First Name</label>
                        <input name='firstName' type='text' className='form-control' onChange={handleInputChange} value={student.firstName}/>
                    </div><br/>
                    <div>
                        <label htmlFor='lastName' className="form-label">Last Name</label>
                        <input name='lastName' type='text' className='form-control' onChange={handleInputChange} value={student.lastName}/>
                    </div><br/>
                    <div>
                        <label htmlFor='username' className="form-label">Username</label>
                        <input name='username' type='text' className='form-control' defaultValue={student.username}/>
                    </div><br/>
                    <div>
                        <label htmlFor='stdName' className='form-label'>Standard</label>
                        <div className='row'>
                            <div className='col-2'>
                                <select name='standard' className='form-select' onChange={handleInputChange} value={student.standard}>
                                    <option value='None'>Select</option>
                                    
                                    {
                                    standards.map(standard => <option value={standard.name} key={standard.id}>{standard.name}</option>)
                                }
                                </select>
                            </div>
                        </div>
                    </div><br/>
                    <div className='row'>
                        <div className='col-1'>
                            <button type='submit' className='btn btn-success mx-3'>Submit</button>
                        </div>
                    </div>
                </form>
            
        </div>
    )
}