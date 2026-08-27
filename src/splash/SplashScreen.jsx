export default function SplashScreen() {
  return (
    <div className="splash-noise relative overflow-hidden min-h-screen w-full flex flex-col items-center justify-center text-center p-8 bg-ink">
      <div className="absolute w-80 h-80 -top-20 -right-15 rounded-full blur-[60px] bg-white/16 pointer-events-none animate-drift" />
      <div className="absolute w-65 h-65 -bottom-[90px] -left-[70px] rounded-full blur-[60px] bg-black/12 pointer-events-none animate-drift-reverse" />

      {/* Container e Logo idênticos ao WelcomeScreen */}
      <div className="relative z-10 w-24 h-24 flex items-center justify-center mb-7 animate-pop">
        <img
          src="/kipper-logo.svg"
          alt="Kipper"
          className="w-24 h-24 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Tipografia e margens sincronizadas com o WelcomeScreen */}
      <h1 className="relative z-10 font-heading text-[2.1rem] font-extrabold text-white tracking-[0.2px] mb-[0.6rem]">
        Kipper
      </h1>
      <p className="relative z-10 font-body text-base text-on-primary max-w-[280px] mb-10">
        Gestão de Manutenção
      </p>

      {/* Container com a mesma altura equivalente do botão da WelcomeScreen (~54px) */}
      <div className="relative z-10 h-[54px] flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-[26px] h-[26px] opacity-90 origin-[60%_45%] animate-wrench-turn"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z" />
        </svg>
      </div>
    </div>
  );
}