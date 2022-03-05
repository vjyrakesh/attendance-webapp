import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import StudentsComponent from "./StudentsComponent";

export default function AttendanceApp() {
    return (
        <div>
            <h2>Attendance Web App</h2>
            
            <Router>
                <>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/students" component={StudentsComponent}/>
                    </Switch>
                </>
            </Router>
        </div>
    )
}