import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import StudentsComponent from "./StudentsComponent";
import StandardsComponent from "./StandardsComponent";
import TeachersComponent from "./TeachersComponent";
import SubjectsComponent from "./SubjectsComponent";
import EditStudentComponent from "./EditStudentComponent";
import RegisterPersonComponent from "./RegisterPersonComponent";


export default function AttendanceApp() {

    return (
        <div>
            
            <Router>
                <>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/students/:id/edit" component={EditStudentComponent}/>
                        <Route path="/students" component={StudentsComponent}/>
                        <Route path="/standards" component={StandardsComponent}/>
                        <Route path="/teachers" component={TeachersComponent}/>
                        <Route path="/subjects" component={SubjectsComponent}/>
                        <Route path="/register" component={RegisterPersonComponent}/>
                    </Switch>
                </>
            </Router>
        </div>
    )
}