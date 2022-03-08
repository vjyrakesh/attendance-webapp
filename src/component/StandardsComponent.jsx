import { useEffect } from "react";
import { useState } from "react";
import StandardService from "../api/StandardService";

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
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}