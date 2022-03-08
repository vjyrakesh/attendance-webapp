import SubjectService from "../api/SubjectService";
import { useState, useEffect } from "react";

export default function SubjectsComponent() {

    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        SubjectService.getAllSubjects()
        .then(response => {
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
                            <tr>
                                <td>{subject.id}</td>
                                <td>{subject.name}</td>
                                {subject.teacher?<td>{subject.teacher.firstName + ' ' + subject.teacher.lastName}</td>:<td>NA</td>}
                                {subject.standard?<td>{subject.standard.name}</td>:<td>NA</td>}
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}