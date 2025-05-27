import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../features/projects/pages/HomePage";
import ProjectDetail from "../features/projects/pages/ProjectDetail";
import ProjectsPage from "../features/projects/pages/ProjectsPage";
import DetailProjectPage from "../features/projects/pages/DetailProjectPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-projects" element={<ProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects/:slug" element={<DetailProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
