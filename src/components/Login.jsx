import React, { useState } from "react";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleSignIn } from "../firebase";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h1>¡Bienveni@!</h1>
          <p className="welcome-text">
            Accede a tu cuenta para gestionar tus citas médicas
          </p>

          <button onClick={handleGoogleSignIn} className="google-login-btn">
            <FcGoogle size={20} style={{ marginRight: "10px" }} />
            Ingresar con Google
          </button>
          <form onSubmit={handleSubmit}>
            <div className="separator">o</div>

            <input
              type="email"
              placeholder="Correo electrónico"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="input" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
                <span className="toggle-password" onClick={togglePassword}>
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </span>
              </div>

              <div className="forgot-password">
                <Link to="/forgot-password" className="btn-text">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              <button type="submit" className="btn-login">
                Iniciar sesión
              </button>
            </form>

          <div className="signup-link">
            ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
          </div>
          </div>

        <div className="login-right">
          <div className="login-right-buttons">
            <Link to="/register" className="btn-text">Registrarse</Link>
            <a href="#" className="btn-outline">Ayuda</a>
          </div>
          <div className="login-right-text">
            <h2>Gestión eficiente de citas médicas con MediSync</h2>
            <p>MediSync centraliza la administración de citas en la Red de
              Clínicas Salud Total.

              Simplifica la programación, mejora la atención y optimiza cada proceso con tecnología avanzada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
