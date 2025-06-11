import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Features from "./components/Feature";
import NotesPreview from "./components/Notesp";
import UploadForm from "./components/UploadF";
import About from "./components/About";
import Contact from "./components/Contact";
import AuthForm from "./components/AuthForm";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(
    () => localStorage.getItem("eduUser") || null
  );

  // Sync localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("eduUser", user);
    } else {
      localStorage.removeItem("eduUser");
    }
  }, [user]);

  const handleLogin = (username) => {
    setUser(username);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        user={user}
        onLogoutClick={handleLogout}
      />
      {showLogin && (
        <AuthForm onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      )}
      <HeroSection />
      <Features />
      <NotesPreview />
      <UploadForm />
      <About />
      <Contact />
    </div>
  );
}

export default App;
