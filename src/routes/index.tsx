import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
};
