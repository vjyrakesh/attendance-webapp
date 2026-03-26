import StandardService from "../api/StandardService"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

export default function StandardDetailsComponent(props) {
    
    const [standard, setStandard] = useState({id:0,name:'',classTeacher:{},strength:0})
    const [students, setStudents] = useState([])
    const params = useParams()

    useEffect(() => {
        StandardService.getOneStandard(params.id)
        .then(response => {
            setStandard({
                ...standard,
                ...response.data
            })
        })
        .catch(error => {
            console.error("Error whlile fetching one Standard: " + error.message);
        });

        StandardService.getStudentsOfStandard(params.id)
        .then(response => {
            setStudents(response.data)
        })
        .catch(error => {
            console.error("Error whlile fetching Students: " + error.message);
        });
    }, [params.id])
    
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
                        students.map(student => 
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