import "./assets/css/style.css";
import { Routes, Route } from 'react-router-dom';
import HomeDice from './pages/HomeDice';



function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeDice />} />
    </Routes>

  );
}

export default App;
