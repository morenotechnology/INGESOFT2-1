import React from "react";
import "../index.css";

export default function Login() {
  return (
    <div className="page-container">
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button className="btn-primary">Entrar</button>

      <div className="form-link">
        ¿Olvidaste tu contraseña? <a href="/forgot-password">Recupérala aquí</a>
      </div>
      <div className="form-link">
        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
      </div>
    </div>
  );
}
