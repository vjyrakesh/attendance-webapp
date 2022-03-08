import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import StudentsComponent from "./StudentsComponent";
import StandardsComponent from "./StandardsComponent";


export default function AttendanceApp() {

    return (
        <div>
            
            <Router>
                <>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/students" component={StudentsComponent}/>
                        <Route path="/standards" component={StandardsComponent}/>
                    </Switch>
                </>
            </Router>
        </div>
    )
}