import { Route, BrowserRouter, Routes} from "react-router";
import HeaderComponent from "./HeaderComponent";
import AppRoutes from "./routes";


export default function AttendanceApp() {

    return (
        <div>
            
            <BrowserRouter>
                <>
                <HeaderComponent/>
                    <AppRoutes/>
                </>
            </BrowserRouter>
        </div>
    )
}