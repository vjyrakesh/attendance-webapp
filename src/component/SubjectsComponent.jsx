import SubjectService from "../api/SubjectService";
import { useState, useEffect } from "react";
import {Link} from 'react-router'

export default function SubjectsComponent() {

    const [subjects, setSubjects] = useState([]);

    const fetchSubjects = async () => {
        try {
            const response = await SubjectService.getAllSubjects();
            if(response && response.data)
                setSubjects(response.data);
        } catch(error) {
            console.error("Error while fetching subjects: " + error.message);
        }
        
    };

    useEffect(() => {
        fetchSubjects();
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