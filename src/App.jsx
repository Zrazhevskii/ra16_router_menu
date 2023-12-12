import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import TimeAttackPage from './pages/TimeAttackPage';
// import './style/index.css';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Menu/>}>
                    <Route index element={<HomePage/>} />
                    <Route path='/drift' element={<DriftPage/>} />
                    <Route path='/timeattack' element={<TimeAttackPage/>} />
                    <Route path='/forza' element={<ForzaPage/>} />
                    <Route path='*' element={<HomePage/>} />
                </Route>
            </Routes>
        </div>
    );
}
