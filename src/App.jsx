import { useState, useEffect } from "react";
import SplashScreen from "./splash/SplashScreen";
import WelcomeScreen from "./components/intro/WelcomeScreen";
import LoginScreen from "./components/auth/LoginScreen";
import SignupScreen from "./components/auth/SignupScreen";
import "./App.css";

function App() {
  const [stage, setStage] = useState("splash"); // "splash" | "intro" | "login" | "signup"
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (showIntro && stage === "splash") setStage("intro");
  }, [showIntro, stage]);

  // Splash e Introdução ficam sobrepostos na mesma posição, fazendo crossfade
  if (stage === "splash" || stage === "intro") {
    return (
      <div className="app-root">
        <div className={`stage-layer ${showIntro ? "stage-hidden" : ""}`}>
          <SplashScreen />
        </div>
        <div className={`stage-layer ${showIntro ? "" : "stage-hidden"}`}>
          <WelcomeScreen onAdvance={() => setStage("login")} />
        </div>
      </div>
    );
  }

  if (stage === "signup") {
    return (
      <SignupScreen
        onSignup={(data) => console.log("Cadastro:", data)}
        onSwitchToLogin={() => setStage("login")}
      />
    );
  }

  return (
    <LoginScreen
      onLogin={(data) => console.log("Login:", data)}
      onSwitchToSignup={() => setStage("signup")}
    />
  );
}

export default App;