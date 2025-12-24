import React from "react";
import "./galeria.css";

export default function Galeria() {
  const fotos = [
    { id: 1, src: "https://i.imgur.com/eydAVUu.png", caption: "", rotate: "-5deg" },
    { id: 2, src: "https://i.imgur.com/wYCGIW8.png", caption: "", rotate: "4deg" },
    { id: 3, src: "https://i.imgur.com/dHtk2e9.png", caption: "", rotate: "-7deg" },
    { id: 4, src: "https://i.imgur.com/mvZzTNn.png", caption: "", rotate: "-7deg" },
    { id: 5, src: "https://i.imgur.com/RHzMUaw.png", caption: "", rotate: "-7deg" },
    { id: 6, src: "https://i.imgur.com/NMYk0S2.png", caption: "", rotate: "-7deg" },

  ];

  return (
    <div className="galeria-container">

      <div className="galeria-grid">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            className="galeria-card"
            style={{ transform: `rotate(${foto.rotate})` }}
          >
<img src={foto.src} className="galeria-img" alt={foto.caption} />
            <span className="galeria-caption">{foto.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


