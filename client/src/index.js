import React from 'react'; // Add this line to import React

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutForm from './components/home/LayoutForm';
import Policy from './components/privacyPolicy/Policy'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LayoutForm />} />
        <Route  path="/privacy-policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);