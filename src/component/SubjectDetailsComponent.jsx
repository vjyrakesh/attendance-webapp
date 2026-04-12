import { useParams, Link } from "react-router"
import { useGetOneSubjectQuery } from "../hooks/queries";

export default function SubjectDetailsComponent() {

    const params = useParams();

    const getOneSubjectQuery = useGetOneSubjectQuery(params.id);

    if(getOneSubjectQuery.isLoading) {
        return (
            <div class="text-center">
                <div class="spinner-border m-5" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }

    const subject = getOneSubjectQuery.data;

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