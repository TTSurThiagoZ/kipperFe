import "./SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      {/* Ponto de luz ambiente centralizado */}
      <div className="splash-glow" />

      <div className="splash-content">
        {/* Insígnia com Glassmorphism e Ícone de Chave */}
        <div className="splash-badge">
          {/* Ícone de Chave Principal (SVG Emulado) */}
          <svg
            viewBox="0 0 24 24"
            className="splash-logo-img"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
          </svg>
        </div>

        {/* Texto do Título e Subtítulo */}
        <h1 className="splash-title">Kipper</h1>
        <p className="splash-subtitle">Gestão de Manutenção</p>

        {/* Loader de Chave Giratória (centralizado) */}
        <div className="splash-loader-group">
          {/* Ícone de Chave do Loader (SVG Emulado) */}
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
          <p className="splash-loader-text">Sincronizando dados...</p>
        </div>
      </div>
    </div>
  );
}