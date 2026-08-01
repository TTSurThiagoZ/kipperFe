import "./WelcomeScreen.css";

export default function WelcomeScreen({ onAdvance }) {
  return (
    <div className="welcome-container">
      <div className="welcome-frame">
        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="welcome-card">
          <div className="ticket-header">
            <span className="ticket-id">TICKET Nº 0001</span>
            <span className="ticket-status">
              <span className="status-dot" />
              OPERACIONAL
            </span>
          </div>

          <div className="ticket-divider" />

          <div className="welcome-body">
            <img src="/kipper-logo.svg" alt="Kipper" className="welcome-mark" />
            <h1 className="welcome-title">Kipper</h1>
            <p className="welcome-subtitle">
                Enconte a solução para qualquer problema de manutenção em poucos minutos.
                Abra um chamado, descreva o que precisa e nós conectamos você ao profissonal certo para resolver o serviço com agilidade e confiança.
            </p>
          </div>

          <button className="welcome-button" onClick={onAdvance}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
}