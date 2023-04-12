import './App.css';
import { HomePage } from './HomePage';
import { PrivacyPolicyPage } from './PrivacyPolicyPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/portfolio2.0'} element={<HomePage />} />
        <Route path={'/privacy'} element={<PrivacyPolicyPage />} />
        <Route path={'*'} element={<Navigate replace to='/portfolio2.0' />} />
      </Routes>
    </div>
  );
};
