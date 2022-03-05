
import {Link} from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div><a className="navbar-brand" href="/">Attendance</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/students" className='nav-link'>Students</Link></li>
                        <li className="nav-item">Subjects</li>
                        <li className="nav-item">Teachers</li>
                        <li className="nav-item">Standards</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}