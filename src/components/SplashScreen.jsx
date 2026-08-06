import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-blob splash-blob-1" />
      <div className="splash-blob splash-blob-2" />

      <div className="splash-badge">
        <img src="/kipper-logo.svg" alt="Kipper" className="splash-logo-img" />
      </div>
      <h1 className="splash-title">Kipper</h1>
      <p className="splash-subtitle">Gestão de Manutenção</p>

      <svg
        viewBox="0 0 24 24"
        className="splash-loader-icon"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
      </svg>
    </div>
  );
}