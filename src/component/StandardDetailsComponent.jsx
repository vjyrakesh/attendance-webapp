import StandardService from "../api/StandardService"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function StandardDetailsComponent(props) {
    
    const [standard, setStandard] = useState({id:0,name:'',classTeacher:{},strength:0})
    const [students, setStudents] = useState([])
    const params = useParams()

    useEffect(() => {
        StandardService.getOneStandard(params.id)
        .then(response => {
            console.log(response)
            setStandard({
                ...standard,
                ...response.data
            })
        })

        StandardService.getStudentsOfStandard(params.id)
        .then(response => {
            setStudents(response.data)
        })
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