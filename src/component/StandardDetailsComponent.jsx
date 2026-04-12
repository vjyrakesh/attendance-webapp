import { useParams } from "react-router"
import { useGetOneStandardQuery, useGetStudentsOfStandardQuery } from "../hooks/queries"

export default function StandardDetailsComponent(props) {
    
    const params = useParams()

    const getOneStandardQuery = useGetOneStandardQuery(params.id);
    const getStudentsOfStandardQuery = useGetStudentsOfStandardQuery(params.id);

    if(getOneStandardQuery.isLoading || getStudentsOfStandardQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }

    const standard = getOneStandardQuery.data;
    return (
        <div className="container">
            <h3>Standard Details</h3>
            <p>Name: {standard.name}</p>
            <p>Class Teacher: {standard.classTeacher.firstName + ' ' + standard.classTeacher.lastName}</p>
            <p>Strength: {standard.strength}</p>
            <p>Students</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getStudentsOfStandardQuery.data.map(student => 
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}