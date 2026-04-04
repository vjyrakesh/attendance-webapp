import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import SubjectService from "../api/SubjectService"

export default function SubjectDetailsComponent() {

    const [subject, setSubject] = useState({id:0, name:'', teacher:{}, standard: {}});
    const params = useParams();

    const fetchOneSubject = async (id) => {
        try {
            const response = await SubjectService.getOneSubject(id);
            if(response && response.data) {
                console.log(response);
                setSubject({
                    ...subject,
                    'id': response.data.id,
                    'name': response.data.name,
                    'teacher': response.data.teacher,
                    'standard': response.data.standard
                });
            }
        } catch(error) {
            console.error("Error whlile fetching one Subject: " + error.message);
        }
    };

    useEffect(() => {
        fetchOneSubject(params.id);
    }, [params.id]);

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