import SubjectService from "../api/SubjectService";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

export default function SubjectsComponent() {

    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        SubjectService.getAllSubjects()
        .then(response => {
            console.log(response.data)
            setSubjects(response.data)
        })
    },[])

    return (
        <div className="container">
            <h3>Subjects</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Teacher</th>
                        <th>Standard</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjects.map(subject =>
                            <tr key={subject.id}>
                                <td>{subject.id}</td>
                                <td>{subject.name}</td>
                                {subject.teacher?<td>{subject.teacher.firstName + ' ' + subject.teacher.lastName}</td>:<td>NA</td>}
                                {subject.standard?<td>{subject.standard.name}</td>:<td>NA</td>}
                                <td><Link to={`/subjects/${subject.id}`}>View</Link></td>
                                <td><Link to={`/subjects/${subject.id}/edit`}>Edit</Link></td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
            <Link to="/subjects/new">Add Subject</Link>
        </div>
    )
}