import {Link} from 'react-router';
import { useGetSubjectsQuery } from "../hooks/queries";

export default function SubjectsComponent() {
    
    const getSubjectsQuery = useGetSubjectsQuery();

    if(getSubjectsQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }

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
                        getSubjectsQuery.data.map(subject =>
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