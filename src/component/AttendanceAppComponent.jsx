import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import StudentsComponent from "./StudentsComponent";
import StandardsComponent from "./StandardsComponent";
import TeachersComponent from "./TeachersComponent";
import SubjectsComponent from "./SubjectsComponent";
import EditStudentComponent from "./EditStudentComponent";
import RegisterPersonComponent from "./RegisterPersonComponent";
import CreateStandardComponent from "./CreateStandardComponent";
import EditStandardComponent from "./EditStandardComponent";
import AddSubjectComponent from "./AddSubjectComponent";
import EditSubjectComponent from "./EditSubjectComponent";
import StandardDetailsComponent from "./StandardDetailsComponent";
import TeacherDetailsComponent from "./TeacherDetailsComponent";
import SubjectDetailsComponent from "./SubjectDetailsComponent";


export default function AttendanceApp() {

    return (
        <div>
            
            <Router>
                <>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/students/:id/edit" component={EditStudentComponent}/>
                        <Route path="/standards/:id/edit" component={EditStandardComponent}/>
                        <Route path="/standards/:id" component={StandardDetailsComponent}/>
                        <Route path="/standards/new" component={CreateStandardComponent}/>
                        <Route path="/students" component={StudentsComponent}/>
                        <Route path="/standards" component={StandardsComponent}/>
                        <Route path="/teachers/:id" component={TeacherDetailsComponent}/>
                        <Route path="/teachers" component={TeachersComponent}/>
                        <Route path="/subjects/:id/edit" component={EditSubjectComponent}/>
                        <Route path="/subjects/:id" component={SubjectDetailsComponent}/>
                        <Route path="/subjects/new" component={AddSubjectComponent}/>
                        <Route path="/subjects" component={SubjectsComponent}/>
                        <Route path="/register" component={RegisterPersonComponent}/>
                        
                    </Switch>
                </>
            </Router>
        </div>
    )
}