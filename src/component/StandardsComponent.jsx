import { useEffect } from "react";
import { useState } from "react";
import StandardService from "../api/StandardService";
import {Link} from 'react-router'

export default function StandardsComponent() {
    const [standards, setStandards] = useState([])

    const fetchStandards = async () => {
        try {
            const response = await StandardService.getAllStandards();    
            if(response && response.data) {
                setStandards(response.data);
            }
        } catch(error) {
            console.error("Error whlile fetching Standards: " + error.message);
        }
    };
    useEffect(()=> {
        fetchStandards();
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
                            <tr key={standard.id}>
                                <td>{standard.id}</td>
                                <td>{standard.name}</td>
                                <td>{standard.classTeacher.firstName + ' ' + standard.classTeacher.lastName}</td>
                                <td>{standard.strength}</td>
                                <td><Link to={`/standards/${standard.id}`}>View</Link></td>
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