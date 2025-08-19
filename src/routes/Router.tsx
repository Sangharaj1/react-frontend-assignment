import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../shared/layouts/Layout';
import HomePage from '../pages/HomePage';
import MembersPage from '../pages/MembersPage';
import ServicesPage from '../pages/ServicesPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
