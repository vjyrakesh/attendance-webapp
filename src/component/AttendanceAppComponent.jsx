import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import StudentsComponent from "./StudentsComponent";
import StandardsComponent from "./StandardsComponent";
import TeachersComponent from "./TeachersComponent";
import SubjectsComponent from "./SubjectsComponent";


export default function AttendanceApp() {

    return (
        <div>
            
            <Router>
                <>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/students" component={StudentsComponent}/>
                        <Route path="/standards" component={StandardsComponent}/>
                        <Route path="/teachers" component={TeachersComponent}/>
                        <Route path="/subjects" component={SubjectsComponent}/>
                    </Switch>
                </>
            </Router>
        </div>
    )
}