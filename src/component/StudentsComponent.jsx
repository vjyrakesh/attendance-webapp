import {Link} from 'react-router';
import { useGetStudentsQuery } from "../hooks/queries";

export default function StudentsComponent() {

    const getStudentsQuery = useGetStudentsQuery();

    if(getStudentsQuery.isLoading) {
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
                        getStudentsQuery.data.map(student => 
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