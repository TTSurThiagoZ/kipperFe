import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => setFadeOut(true), 2200);
    const removeSplash = setTimeout(() => setShowSplash(false), 2600);
    return () => {
      clearTimeout(startFade);
      clearTimeout(removeSplash);
    };
  }, []);

  return (
    <div className="app-root">
      {showSplash && (
        <div className={`splash-wrapper ${fadeOut ? "splash-fade-out" : ""}`}>
          <SplashScreen />
        </div>
      )}
      {!showSplash && (
        <WelcomeScreen onAdvance={() => console.log("Avançar clicado")} />
      )}
    </div>
  );
}

export default App;