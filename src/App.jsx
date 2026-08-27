import { useState, useEffect } from "react";
import SplashScreen from "./splash/SplashScreen";
import WelcomeScreen from "./components/intro/WelcomeScreen";
import LoginScreen from "./components/auth/LoginScreen";
import SignupScreen from "./components/auth/SignupScreen";

function App() {
  const [stage, setStage] = useState("splash");
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (showIntro && stage === "splash") setStage("intro");
  }, [showIntro, stage]);

  if (stage === "splash" || stage === "intro") {
    return (
      <div className="relative w-full min-h-screen">
        <div className={`absolute inset-0 transition-opacity duration-500 ${showIntro ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <SplashScreen />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-500 ${showIntro ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
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