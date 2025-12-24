import React, { useState } from "react";
import "./amigos.css";

export default function Amigos() {
  const [amigoSeleccionado, setAmigoSeleccionado] = useState(null);

  const amigos = [
    {
      nombre: "Kat ♡",
      imagen: "https://i.imgur.com/LsWrnUX.png",
      descripcion:
        "Mi Persona favorita.♥️♥️",
    },
    {
      nombre: "Gaby ♡",
      imagen: "https://i.imgur.com/csq54D6.png",
      descripcion:
        "My Enfadosa Favorita.❤️",
    },
    {
      nombre: "Juli ♡",
      imagen: "https://i.imgur.com/Q9PkUur.png",
      descripcion:
        "My BeBa Favorita.❤️",
    },
  ];

  return (
    <div className="amigos-container">
      <div className="amigos-linea"></div>

      <div className="amigos-collage">
        {amigos.map((amigo, index) => (
          <div
            key={index}
            className={`amigo-polaroid polaroid-${index}`}
            onClick={() => setAmigoSeleccionado(amigo)}
          >
            <img src={amigo.imagen} alt={amigo.nombre} />
            <p>{amigo.nombre}</p>
          </div>
        ))}
      </div>

      {amigoSeleccionado && (
        <div className="modal-overlay" onClick={() => setAmigoSeleccionado(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <h3>{amigoSeleccionado.nombre}</h3>
            <p>{amigoSeleccionado.descripcion}</p>
            <button onClick={() => setAmigoSeleccionado(null)}>Cerrar ✨</button>
          </div>
        </div>
      )}
    </div>
  );
}
