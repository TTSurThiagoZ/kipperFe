import { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img src="/kipper-logo.svg" alt="Kipper" className="auth-mark" />

        <h1 className="auth-headline">Gestão de manutenção, simples assim.</h1>
        <p className="auth-subhead">Faça login na sua conta Kipper</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="email">E-mail corporativo</label>
          <input
            id="email"
            type="email"
            className="auth-input"
            placeholder="nome@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="auth-label-row">
            <label className="auth-label" htmlFor="password">Senha</label>
            <a href="#" className="auth-forgot">Esqueceu a senha?</a>
          </div>
          <input
            id="password"
            type="password"
            className="auth-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-button">Entrar</button>
        </form>

        <p className="auth-switch">
          Novo por aqui?{" "}
          <button type="button" className="auth-link" onClick={onSwitchToSignup}>
            Cadastre-se
          </button>
        </p>

        <p className="auth-footer">Acesso exclusivo para colaboradores autorizados.</p>
      </div>
    </div>
  );
}