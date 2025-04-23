import React from "react";
import "../index.css";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h1>¿Olvidaste tu contraseña?</h1>
          <p className="welcome-text">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <div className="password-wrapper">
            <input type="email" placeholder="Correo electrónico" className="input" />
            <span className="toggle-password">
              <MdEmail size={18} />
            </span>
          </div>

          <button className="btn-login">Enviar enlace</button>

          <div className="signup-link">
            ¿Recordaste tu contraseña? <Link to="/login">Inicia sesión</Link>
          </div>
        </div>

        <div className="login-right">
          <div className="login-right-buttons">
            <Link to="/login" className="btn-text">Iniciar sesión</Link>
            <a href="#" className="btn-outline">Ayuda</a>
          </div>
          <div className="login-right-text">
            <h2>Recupera tu acceso a MediSync</h2>
            <p>
              Restablece tu contraseña de manera sencilla y rápida. Tu bienestar y acceso a la salud son nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
