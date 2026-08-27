import { useState } from "react";

export default function LoginScreen({ onLogin, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ email, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-paper py-8 px-6">
      <div className="w-full max-w-[360px] flex flex-col items-center text-center">
        <img src="/kipper-logo.svg" alt="Kipper" className="w-13 h-13 mb-7" />

        <h1 className="font-heading font-bold text-[1.4rem] leading-[1.3] text-ink-strong mb-[0.4rem]">
          Gestão de manutenção, simples assim.
        </h1>
        <p className="font-body text-[0.95rem] text-ink-faint mb-9">
          Faça login na sua conta Kipper
        </p>

        <form className="w-full flex flex-col text-left" onSubmit={handleSubmit}>
          <label className="font-body text-[0.8rem] font-medium text-ink-mid mb-[0.4rem]" htmlFor="email">
            E-mail corporativo
          </label>
          <input
            id="email"
            type="email"
            className="w-full py-3 px-[0.9rem] mb-5 border border-line rounded-lg bg-white font-body text-[0.95rem] text-ink-strong outline-none transition placeholder:text-placeholder focus:border-primary-end focus:shadow-[0_0_0_3px_rgba(133,89,43,0.14)]"
            placeholder="nome@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex justify-between items-center">
            <label className="font-body text-[0.8rem] font-medium text-ink-mid mb-[0.4rem]" htmlFor="password">
              Senha
            </label>
            <a href="#" className="font-body text-[0.78rem] text-ink-faint no-underline hover:text-primary-end">
              Esqueceu a senha?
            </a>
          </div>
          <input
            id="password"
            type="password"
            className="w-full py-3 px-[0.9rem] mb-5 border border-line rounded-lg bg-white font-body text-[0.95rem] text-ink-strong outline-none transition placeholder:text-placeholder focus:border-primary-end focus:shadow-[0_0_0_3px_rgba(133,89,43,0.14)]"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-[0.8rem] mt-2 rounded-lg bg-primary-end text-white font-heading font-semibold text-[0.95rem] cursor-pointer transition hover:bg-primary-end-hover active:bg-primary-end-active"
          >
            Entrar
          </button>
        </form>

        <p className="font-body text-[0.85rem] text-ink-mid mt-7">
          Novo por aqui?{" "}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="border-0 bg-transparent text-primary-end font-body text-[0.85rem] font-semibold cursor-pointer p-0 underline"
          >
            Cadastre-se
          </button>
        </p>

        <p className="font-body text-xs text-placeholder mt-8">
          Acesso exclusivo para colaboradores autorizados.
        </p>
      </div>
    </div>
  );
}