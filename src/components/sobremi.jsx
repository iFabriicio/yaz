import React, { useEffect, useState } from "react";
import "./sobremi.css";

export default function SobreMi() {
  const [textoActual, setTextoActual] = useState("");
  const [indexParrafo, setIndexParrafo] = useState(0);
  const [indexLetra, setIndexLetra] = useState(0);

  useEffect(() => {
    // ✅ Declaramos el texto dentro del efecto
    const textos = [
      `Hoy procura no desgastarte, hay gente ke no merece ni tu tiempo, ni tu mente, ni tu espacio... 
      que circulen!!! que afán de Enfocarte en quien no te valora o no te quiere, dedicar tiempo a quien no te merece es pérdida de energía... ya dije!!!`,
    ];

    if (indexParrafo < textos.length) {
      if (indexLetra < textos[indexParrafo].length) {
        const timer = setTimeout(() => {
          setTextoActual(
            (prev) => prev + textos[indexParrafo].charAt(indexLetra)
          );
          setIndexLetra((prev) => prev + 1);
        }, 35); // velocidad de escritura (ms)
        return () => clearTimeout(timer);
      } else {
        // Esperar antes de pasar al siguiente párrafo
        const nextTimer = setTimeout(() => {
          setTextoActual((prev) => prev + "\n\n");
          setIndexParrafo((prev) => prev + 1);
          setIndexLetra(0);
        }, 600);
        return () => clearTimeout(nextTimer);
      }
    }
  }, [indexLetra, indexParrafo]);

  return (
    <div className="sobremi-container">
      <h2 className="sobremi-titulo"> Sobre mí</h2>
      <div className="sobremi-linea"></div>

<div className="texto-wrapper" style={{ width: "90%", marginTop: "-2%" }}>
  <div
    className="texto-ajustable typing texto-centrado-medio"
    style={{
      "--ancho-texto": "300px",
      "--font-size": "0.7rem",
      "--line-height": "1.4rem",
      whiteSpace: "pre-line",
    }}
  >
    {textoActual}
  </div>
</div>


      <div className="brillitos-wrap">
        <div className="brillo b1"></div>
        <div className="brillo b2"></div>
        <div className="brillo b3"></div>
      </div>
    </div>
  );
}
