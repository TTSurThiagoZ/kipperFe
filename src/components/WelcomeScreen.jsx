import "./WelcomeScreen.css";

export default function WelcomeScreen({ onAdvance }) {
  return (
    <div className="welcome-container">
      <div className="welcome-blob welcome-blob-1" />
      <div className="welcome-blob welcome-blob-2" />

      <div className="welcome-badge">
        <img src="/kipper-logo.svg" alt="Kipper" className="welcome-logo-img" />
      </div>

      <h1 className="welcome-title">Kipper</h1>
      <p className="welcome-subtitle">
        Gestão e manutenção, sempre à disposição.
      </p>

      <button className="welcome-button" onClick={onAdvance}>
        Avançar
      </button>
    </div>
  );
}