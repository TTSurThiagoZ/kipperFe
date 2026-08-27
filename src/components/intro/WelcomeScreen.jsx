export default function WelcomeScreen({ onAdvance }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center p-8 overflow-hidden bg-ink before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[520px] before:h-[520px] before:-translate-x-1/2 before:-translate-y-[60%] before:bg-[radial-gradient(circle,rgba(212,167,42,0.16),transparent_70%)] before:pointer-events-none">
      <div className="relative z-10 w-24 h-24 flex items-center justify-center mb-7">
        <img
          src="/kipper-logo.svg"
          alt="Kipper"
          className="w-24 h-24 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
        />
      </div>

      <h1 className="relative z-10 font-heading text-[2.1rem] font-extrabold text-ink-soft tracking-[0.2px] mb-[0.6rem]">
        Kipper
      </h1>
      <p className="relative z-10 font-body text-base text-ink-muted max-w-[280px] mb-10">
        Gestão e manutenção, sempre à disposição.
      </p>

      <button
        onClick={onAdvance}
        className="relative z-10 w-full max-w-[300px] py-[0.95rem] px-6 rounded-[10px] bg-primary-end text-white font-heading text-base font-bold cursor-pointer transition duration-200 hover:bg-primary-end-hover hover:-translate-y-0.5 active:translate-y-0"
      >
        Avançar
      </button>
    </div>
  );
}