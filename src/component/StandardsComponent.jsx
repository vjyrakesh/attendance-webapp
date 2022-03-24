import { useEffect } from "react";
import { useState } from "react";
import StandardService from "../api/StandardService";
import {Link} from 'react-router-dom'

export default function StandardsComponent() {
    const [standards, setStandards] = useState([])

    useEffect(()=> {
        StandardService.getAllStandards()
        .then(response => {
            setStandards(response.data)
        })
    },[])

    return (
        <div className="container">
            <h3>Standards</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class Teacher</th>
                        <th>Strength</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        standards.map(standard => 
                            <tr>
                                <td>{standard.id}</td>
                                <td>{standard.name}</td>
                                <td>{standard.classTeacher.firstName + ' ' + standard.classTeacher.lastName}</td>
                                <td>{standard.strength}</td>
                                <td><Link to={`/standards/${standard.id}/edit`}>Edit</Link></td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
            <Link to="/standards/new">Add Standard</Link>
        </div>
    )
}