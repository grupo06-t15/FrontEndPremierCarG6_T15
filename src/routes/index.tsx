import { Route, Routes } from 'react-router-dom';
import { AdvertiserPage } from '../pages/AdvertiserPage';
import { LoginPage } from '../pages/Login';
import { MainPage } from '../pages/MainPage';
import { RegisterPage } from '../pages/Register';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/advertiser" element={<AdvertiserPage />} />
    </Routes>
  );
};
