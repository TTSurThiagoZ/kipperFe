import { useState } from "react";

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

  const inputClass =
    "w-full py-3 px-[0.9rem] mb-5 border border-line rounded-lg bg-white font-body text-[0.95rem] text-ink-strong outline-none transition placeholder:text-placeholder focus:border-primary-end focus:shadow-[0_0_0_3px_rgba(133,89,43,0.14)]";
  const labelClass = "font-body text-[0.8rem] font-medium text-ink-mid mb-[0.4rem]";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-paper py-8 px-6">
      <div className="w-full max-w-[360px] flex flex-col items-center text-center">
        <img src="/kipper-logo.svg" alt="Kipper" className="w-13 h-13 mb-7" />

        <h1 className="font-heading font-bold text-[1.4rem] leading-[1.3] text-ink-strong mb-[0.4rem]">
          Crie sua conta Kipper.
        </h1>
        <p className="font-body text-[0.95rem] text-ink-faint mb-9">
          Leva menos de um minuto
        </p>

        <form className="w-full flex flex-col text-left" onSubmit={handleSubmit}>
          <label className={labelClass} htmlFor="name">Nome completo</label>
          <input id="name" type="text" className={inputClass} placeholder="Seu nome"
            value={name} onChange={(e) => setName(e.target.value)} required />

          <label className={labelClass} htmlFor="signup-email">E-mail corporativo</label>
          <input id="signup-email" type="email" className={inputClass} placeholder="nome@empresa.com"
            value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label className={labelClass} htmlFor="signup-password">Senha</label>
          <input id="signup-password" type="password" className={inputClass} placeholder="••••••••"
            value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label className={labelClass} htmlFor="confirm-password">Confirmar senha</label>
          <input id="confirm-password" type="password" className={inputClass} placeholder="••••••••"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          {error && <p className="font-body text-[0.8rem] text-danger mb-4 -mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full py-[0.8rem] mt-2 rounded-lg bg-primary-end text-white font-heading font-semibold text-[0.95rem] cursor-pointer transition hover:bg-primary-end-hover active:bg-primary-end-active"
          >
            Cadastrar
          </button>
        </form>

        <p className="font-body text-[0.85rem] text-ink-mid mt-7">
          Já tem uma conta?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="border-0 bg-transparent text-primary-end font-body text-[0.85rem] font-semibold cursor-pointer p-0 underline"
          >
            Entrar
          </button>
        </p>
      </div>
    </div>
  );
}