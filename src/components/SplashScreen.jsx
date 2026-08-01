import { useEffect, useState } from "react";
import "./SplashScreen.css";

const BOOT_LINES = [
  "inicializando núcleo",
  "verificando sensores        OK",
  "conectando ao suporte       OK",
  "carregando módulos",
];

export default function SplashScreen() {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) return;
    const t = setTimeout(() => setLineIndex((i) => i + 1), 340);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 4));
    }, 44);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="splash-container">
      <div className="splash-panel">
        <div className="splash-brand">
          <img src="/kipper-logo.svg" alt="Kipper" className="splash-mark" />
          <span className="splash-wordmark">KIPPER</span>
        </div>

        <div className="splash-log">
          {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
            <div className="splash-log-line" key={i}>
              <span className="splash-prompt">&gt;</span> {line}
            </div>
          ))}
          {lineIndex < BOOT_LINES.length && (
            <div className="splash-log-line">
              <span className="splash-prompt">&gt;</span>
              <span className="splash-cursor">_</span>
            </div>
          )}
        </div>

        <div className="splash-progress-track">
          <div
            className="splash-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="splash-progress-label">{progress}%</div>
      </div>
    </div>
  );
}