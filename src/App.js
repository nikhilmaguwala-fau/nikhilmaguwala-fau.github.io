import './assets/css/bootstrap.min.css'
import './css/App.css'
import './css/responsive.css'
import Global from './components/Global'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullStack from './components/FullStack'
import ProjectDetail from './components/Full-Stack-Projects/ProjectDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
