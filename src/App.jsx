import './styles.css';
import { Routes, Route } from "react-router-dom";
import ArmazemSerratec from './pages/ArmazemSerratec';
import Alunos from './pages/Alunos';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ArmazemSerratec />} />
        <Route path="alunos" element={<Alunos />} />
      </Routes>
    </div>
  );
}

export default App;
