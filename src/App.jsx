import Menu from './components/Menu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'
import './style/index.css'


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}