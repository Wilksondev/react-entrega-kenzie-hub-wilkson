import { Route, Routes } from "react-router-dom";
import { 
    LoginPage,  
    RegisterPage,  
    DashboardPage,  
    NotFoundPage 
} from "../../pages";

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element= {<LoginPage />}/>
            <Route path="/register" element= {<RegisterPage />}/>
            <Route path="/dashboard" element= {<DashboardPage />}/>
            <Route path="*" element= {<NotFoundPage />}/>
        </Routes>
    );
};