import TeacherService from "../api/TeacherService"
import { useState, useEffect } from "react"


export default function TeachersComponent() {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        TeacherService.getAllTeachers()
        .then(response => {
            setTeachers(response.data)
        })
    },[])

    return (
        <div className="container">
            <h3>Teachers</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Class Teacher For</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teachers.map(teacher => 
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                {teacher.firstName?<td>{teacher.firstName}</td>:<td>NA</td>}
                                {teacher.lastName?<td>{teacher.lastName}</td>:<td>NA</td>}
                                {teacher.username?<td>{teacher.username}</td>:<td>NA</td>}
                                {teacher.classTeacherFor?<td>{teacher.classTeacherFor}</td>:<td>NA</td>}
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}