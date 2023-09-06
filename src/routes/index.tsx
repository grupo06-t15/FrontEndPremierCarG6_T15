import { Route, Routes } from "react-router-dom";
import { AdvertiserPage } from "../pages/AdvertiserPage";
import { LoginPage } from "../pages/Login";
import { MainPage } from "../pages/MainPage";
import { RegisterPage } from "../pages/Register";
import { AnnouncementPage } from "../pages/AnnouncementPage";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/advertiser/:name?" element={<AdvertiserPage />} />
			<Route path="/announcement/" element={<AnnouncementPage />} />
		</Routes>
	);
};
