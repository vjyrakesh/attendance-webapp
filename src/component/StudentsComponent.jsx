import { useState, useEffect } from "react";
import StudentService from "../api/StudentService";
import {Link} from 'react-router'

export default function StudentsComponent() {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const response = await StudentService.getAllStudents();
            if(response && response.data) {
                setStudents(response.data);
            }
        } catch(error) {
            console.error("Error while fetching students: " + error.message);
        }
    };

    useEffect(() => {
        fetchStudents();
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
                                <td><Link to={`/students/${student.id}/edit`}>Edit</Link></td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}