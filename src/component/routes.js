import {Routes, Route} from "react-router";

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

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/students/:id/edit" element={<EditStudentComponent/>}/>
                <Route path="/standards/:id/edit" element={<EditStandardComponent/>}/>
                <Route path="/standards/:id" element={<StandardDetailsComponent/>}/>
                <Route path="/standards/new" element={<CreateStandardComponent/>}/>
                <Route path="/students" element={<StudentsComponent/>}/>
                <Route path="/standards" element={<StandardsComponent/>}/>
                <Route path="/teachers/:id" element={<TeacherDetailsComponent/>}/>
                <Route path="/teachers" element={<TeachersComponent/>}/>
                <Route path="/subjects/:id/edit" element={<EditSubjectComponent/>}/>
                <Route path="/subjects/:id" element={<SubjectDetailsComponent/>}/>
                <Route path="/subjects/new" element={<AddSubjectComponent/>}/>
                <Route path="/subjects" element={<SubjectsComponent/>}/>
                <Route path="/register" element={<RegisterPersonComponent/>}/>
                
            </Routes>
        </>
    )
}