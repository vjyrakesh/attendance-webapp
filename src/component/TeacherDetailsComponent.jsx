import TeacherService from "../api/TeacherService";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeacherDetailsComponent() {
    
    const [teacher, setTeacher] = useState({id:0, username:'', firstName:'', lastName:'', classTeacherFor:''})
    const [subjects, setSubjects] = useState([])
    const params = useParams()

    useEffect(() => {
        TeacherService.getOneTeacher(params.id)
        .then(response => {
            setTeacher(response.data)
        })

        TeacherService.getSubjectsOfTeacher(params.id)
        .then(response => {
            setSubjects(response.data)
        })
    }, [params.id])
    
    return (
        <div className="container">
            <h3>Teacher Details</h3>
            <p>Id: {teacher.id}</p>
            <p>First Name: {teacher.firstName}</p>
            <p>Last Name: {teacher.lastName}</p>
            <p>Username: {teacher.username}</p>
            <p>Class teacher for: {teacher.classTeacherFor} standard</p>
            <div className="container">
                <h4>Subjects taught</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subjects.map(subject => 
                                <tr key={subject.id}>
                                    <td>{subject.name}</td>
                                    <td>{subject.standard.name}</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}