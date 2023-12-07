import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Select from "./pages/pages/select";
import Insert from "./pages/pages/insert";
import Update from "./pages/pages/update";
import Delete from "./pages/pages/delete";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Select />} />
            <Route path="/select" element={<Select />} />
            <Route path="/update" element={<Update />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/delete" element={<Delete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;