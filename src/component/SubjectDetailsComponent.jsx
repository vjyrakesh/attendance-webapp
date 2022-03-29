import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import SubjectService from "../api/SubjectService"

export default function SubjectDetailsComponent() {

    const [subject, setSubject] = useState({id:0, name:'', teacher:{}, standard: {}})
    const params = useParams()

    useEffect(() => {
        SubjectService.getOneSubject(params.id)
        .then(response => {
            setSubject(response.data)
        })
    }, [params.id])

    return (
        <div className="container">
            <h3>Subject Details</h3>
            <p>Id: {subject.id}</p>
            <p>Name: {subject.name}</p>
            <p>Teacher: <Link to={`/teachers/${subject.teacher.id}`}>{subject.teacher.firstName + ' ' + subject.teacher.lastName}</Link></p>
            <p>Standard: <Link to={`/standards/${subject.standard.id}`}>{subject.standard.name}</Link></p>
        </div>
    )
}