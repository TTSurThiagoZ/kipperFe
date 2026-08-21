import "./WelcomeScreen.css";

export default function WelcomeScreen({ onAdvance }) {
  return (
    <div className="welcome-container">
      <div className="welcome-blob welcome-blob-1" />
      <div className="welcome-blob welcome-blob-2" />

      {/* Insígnia Glassmorphism padronizada com a SplashScreen */}
      <div className="welcome-badge">
        <svg
          viewBox="0 0 24 24"
          className="welcome-logo-img"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
        </svg>
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