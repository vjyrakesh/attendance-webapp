
import {Link} from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <div><a className="navbar-brand" href="/">Attendance</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/students" className='nav-link'>Students</Link></li>
                        <li className="nav-item"><Link to="/standards" className='nav-link'>Standards</Link></li>
                        <li className="nav-item"><Link to="/teachers" className='nav-link'>Teachers</Link></li>
                        <li className="nav-item"><Link to="/subjects" className='nav-link'>Subjects</Link></li>
                        
                        
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}