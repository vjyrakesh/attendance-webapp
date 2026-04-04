import TeacherService from "../api/TeacherService"
import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router"


export default function TeachersComponent() {

    const [teachers, setTeachers] = useState([]);

    const fetchTeachers = useCallback(async () => {
        try {
            const response = await TeacherService.getAllTeachers();
            console.log(response)
            if(response && response.data) {
                setTeachers(response.data);
            }
            
        } catch(error) {
            console.error("Error while fetching Teachers: " + error.message);
        }
    },[]);

    useEffect(() => {
        fetchTeachers();
    },[]);

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
                                <td><Link to={`/teachers/${teacher.id}`}>View</Link></td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}