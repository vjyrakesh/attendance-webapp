import { useState, useEffect } from "react";
import StudentService from "../api/StudentService";

export default function StudentsComponent() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        StudentService.getAllStudents()
        .then(response => {
            console.log(response)
            setStudents(response.data)
        })
    }, [])

    return (
        <div className="container">
            <h3>Students</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Standard</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.username}</td>
                                <td>{student.standard}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}