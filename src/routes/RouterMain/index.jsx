import { Route, Routes, useNavigate } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,
    DashboardPage,
    NotFoundPage
} from "../../pages";
import { useState } from "react";

export const RouterMain = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const userLogout = () => {
        setUser(null);
        navigate("/");
    };
    return (
        <Routes>
            <Route path="/" element={
                <LoginPage
                    setUser={setUser}
                    navigate={navigate}
                />}
            />
            <Route path="/register" element={
                <RegisterPage
                    navigate={navigate}
                />}
            />
            <Route path="/dashboard" element={
                <DashboardPage
                    user={user}
                    userLogout={userLogout}
                    navigate={navigate}
                />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};