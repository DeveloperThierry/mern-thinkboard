import React from "react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Routes, Route } from "react-router";
import toast from "react-hot-toast";
import daisyui from "daisyui";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
