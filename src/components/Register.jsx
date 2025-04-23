import React, { useState } from "react";
import "../index.css";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h1>¡Crea tu cuenta!</h1>
          <p className="welcome-text">
            Regístrate para empezar a gestionar tus citas médicas con MediSync
          </p>

          <button className="google-login-btn">
            <FcGoogle size={20} style={{ marginRight: "10px" }} />
            Registrarse con Google
          </button>

          <div className="separator">o</div>

          {/* Nombre */}
          <div className="password-wrapper">
            <input type="text" placeholder="Nombre completo" className="input" />
            <span className="toggle-password">
              <FaUser size={18} />
            </span>
          </div>

          {/* Email */}
          <div className="password-wrapper">
            <input type="email" placeholder="Correo electrónico" className="input" />
            <span className="toggle-password">
              <MdEmail size={18} />
            </span>
          </div>

          {/* Contraseña */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="input"
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
            </span>
          </div>

          {/* Confirmar contraseña */}
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirmar contraseña"
              className="input"
            />
            <span className="toggle-password" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <AiOutlineEyeInvisible size={18} /> : <AiOutlineEye size={18} />}
            </span>
          </div>

          <button className="btn-login">Crear cuenta</button>

          <div className="signup-link">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </div>
        </div>

        <div className="login-right">
          <div className="login-right-buttons">
            <Link to="/login" className="btn-text">Iniciar sesión</Link>
            <a href="#" className="btn-outline">Ayuda</a>
          </div>
          <div className="login-right-text">
            <h2>Únete a MediSync</h2>
            <p>
              Optimiza tu experiencia médica. Gestiona tus citas, mantén tu historial
              y accede a servicios de salud con eficiencia y tecnología.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
