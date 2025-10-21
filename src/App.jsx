import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Use 'index' for default nested route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
