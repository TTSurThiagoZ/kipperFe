import { useState } from "react";
import "./LoginScreen.css";

export default function SignupScreen({ onSignup, onSwitchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }
    setError("");
    onSignup?.({ name, email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img src="/kipper-logo.svg" alt="Kipper" className="auth-mark" />

        <h1 className="auth-headline">Crie sua conta Kipper.</h1>
        <p className="auth-subhead">Leva menos de um minuto</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="name">Nome completo</label>
          <input
            id="name"
            type="text"
            className="auth-input"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="signup-email">E-mail corporativo</label>
          <input
            id="signup-email"
            type="email"
            className="auth-input"
            placeholder="nome@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="signup-password">Senha</label>
          <input
            id="signup-password"
            type="password"
            className="auth-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="confirm-password">Confirmar senha</label>
          <input
            id="confirm-password"
            type="password"
            className="auth-input"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">Cadastrar</button>
        </form>

        <p className="auth-switch">
          Já tem uma conta?{" "}
          <button type="button" className="auth-link" onClick={onSwitchToLogin}>
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}