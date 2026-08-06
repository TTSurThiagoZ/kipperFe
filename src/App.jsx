import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import "./App.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="app-root">
      <div className={`stage-layer ${showWelcome ? "stage-hidden" : ""}`}>
        <SplashScreen />
      </div>
      <div className={`stage-layer ${showWelcome ? "" : "stage-hidden"}`}>
        <WelcomeScreen onAdvance={() => console.log("Avançar clicado")} />
      </div>
    </div>
  );
}

export default App;