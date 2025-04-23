import React, { useState } from "react";
import "../index.css";
import { MdCalendarToday, MdHistory, MdAssignment, MdPerson, MdEventNote, MdMedicalServices, MdPeople } from "react-icons/md";

const resumen = [
  { icon: <MdMedicalServices size={24} />, label: "Médico", value: 1 },
  { icon: <MdPeople size={24} />, label: "Pacientes", value: 3 },
  { icon: <MdCalendarToday size={24} />, label: "Citas", value: 2 },
  { icon: <MdAssignment size={24} />, label: "Recetas", value: 1 }
];

export default function Dashboard() {
  const [citas] = useState([
    { id: 1, doctor: "Dra. López", especialidad: "Medicina general", fecha: "2025-05-01", hora: "10:00 AM", estado: "Confirmada" },
    { id: 2, doctor: "Dr. Ramírez", especialidad: "Neurología", fecha: "2025-05-03", hora: "2:00 PM", estado: "Pendiente" }
  ]);

  return (
    <div className="login-wrapper" style={{ padding: 0 }}>
      <div className="login-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="avatar">👤</div>
          <div className="nav-item"><MdCalendarToday size={20} /> <span>Mis Citas</span></div>
          <div className="nav-item"><MdHistory size={20} /> <span>Historial</span></div>
          <div className="nav-item"><MdAssignment size={20} /> <span>Recetas</span></div>
          <div className="nav-item"><MdPerson size={20} /> <span>Mi Perfil</span></div>
        </div>

        {/* Main dashboard content */}
        <div className="login-right" style={{ background: "#f8f9fd", color: "#333", padding: 40, overflowY: "auto" }}>
          <div className="dashboard-card">
            <h1 style={{ fontSize: "28px", marginBottom: 30 }}>Panel de usuario 👤</h1>

            {/* Cuadros resumen */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20, marginBottom: 40 }}>
              {resumen.map((item, idx) => (
                <div key={idx} className="card" style={{ textAlign: "center", padding: 20 }}>
                  <div style={{ marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ marginBottom: 5 }}>{item.label}</h3>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            {/* Tabla de citas */}
            <div>
              <h2 style={{ marginBottom: 20 }}>Mis Citas</h2>
              <div className="card-grid">
                {citas.map((cita) => (
                  <div key={cita.id} className="card">
                    <h3>{cita.doctor}</h3>
                    <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                    <p><strong>Fecha:</strong> {cita.fecha}</p>
                    <p><strong>Hora:</strong> {cita.hora}</p>
                    <p><strong>Estado:</strong> {cita.estado}</p>
                    <button className="btn-login" style={{ marginTop: 10 }}>Cancelar</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Accesos rápidos */}
            <div style={{ marginTop: 50 }}>
              <h2 style={{ marginBottom: 20 }}>Accesos rápidos</h2>
              <div className="quick-actions">
                <button className="btn-login">Ver historial médico</button>
                <button className="btn-login">Ver recetas</button>
                <button className="btn-login">Actualizar datos</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
