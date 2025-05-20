import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/projects/pages/HomePage";
import ProjectDetail from "../features/projects/pages/ProjectDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
