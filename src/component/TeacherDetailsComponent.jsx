import { useParams } from "react-router";
import { useGetOneTeacherQuery, useGetSubjectsOfTeacherQuery } from "../hooks/queries";

export default function TeacherDetailsComponent() {
    
    const params = useParams()

    const getOneTeacherQuery = useGetOneTeacherQuery(params.id);
    const getSubjectsOfTeacherQuery = useGetSubjectsOfTeacherQuery(params.id);

    if(getOneTeacherQuery.isLoading || getSubjectsOfTeacherQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }

    
    const teacher = getOneTeacherQuery.data;
    
    return (
        <div className="container">
            <h3>Teacher Details</h3>
            <p>Id: {teacher.id}</p>
            <p>First Name: {teacher.firstName}</p>
            <p>Last Name: {teacher.lastName}</p>
            <p>Username: {teacher.username}</p>
            <p>Class teacher for: {teacher.classTeacherFor} standard</p>
            <div className="container">
                <h4>Subjects taught</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getSubjectsOfTeacherQuery.data.map(subject => 
                                <tr key={subject.id}>
                                    <td>{subject.name}</td>
                                    <td>{subject.standard.name}</td>
                                </tr>    
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}