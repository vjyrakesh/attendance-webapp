import { Link } from "react-router";
import { useGetTeachersQuery } from "../hooks/queries";

export default function TeachersComponent() {
    const getTeachersQuery = useGetTeachersQuery();
    if(getTeachersQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }

    if(getTeachersQuery.error) {
        return <div><h3>Unable to fetch data</h3></div>;
    }
    
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
                        getTeachersQuery.data.map(teacher => 
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