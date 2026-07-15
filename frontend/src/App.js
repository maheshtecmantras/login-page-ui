import './styles/App.css';
import LoginCard from './components/LoginCard';

function App() {
  return (
    <div className="app-shell">
      <header className="brand-heading" aria-label="Jigar">
        <span>Jigar</span>
      </header>
      <div className="hero-panel">
        <p className="hero-pill">Secure workspace</p>
        <h1>Sign in to continue building with confidence.</h1>
        <p className="hero-copy">
          Access your dashboards, automate workflows, and keep teams aligned with a secure
          authentication experience.
        </p>
        <div className="hero-metrics">
          <div>
            <strong>99.9%</strong>
            <span>SLA uptime this month</span>
          </div>
          <div>
            <strong>2FA-ready</strong>
            <span>Quick setup for every team</span>
          </div>
        </div>
      </div>
      <LoginCard />
    </div>
  );
}

export default App;
