import React, { useState, useRef, useEffect } from "react";
import "./reproductor2.css";

export default function Reproductor() {
  const base = process.env.PUBLIC_URL;

  const songs = [
    { src: `${base}/music/Beéle - quédate.mp3`, artist: "Beéle", title: "Quédate" },
    { src: `${base}/music/Grupo Frontera  -  monterrey.mp3`, artist: "Grupo Frontera", title: "monterrey" },
    { src: `${base}/music/KAROL G, Maluma - Créeme.mp3`, artist: "KAROL G, Maluma", title: "Créeme" }
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // 👉 autoplay ON
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef(null);

  // 🔥 AUTOPLAY + MUTE FIX
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = true;      // autoplay permitido
    audio.volume = 1;

    // intenta reproducir apenas cargue
    audio.play().catch(() => {});
  }, []);

  // Cuando cambia la canción o estado de reproducción
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }, [current, isPlaying]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false; // 👉 al tocar play ya NO está muteado
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Bloqueado:", err));
    }
  };

  const nextSong = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % songs.length);
  };

  return (
    <div
      className={`reproductor ${expanded ? "expandido" : ""}`}
      onMouseEnter={() => {
        setExpanded(true);
        if (audioRef.current) audioRef.current.muted = false; // 👉 desmutea con hover
      }}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="song-info">
        <p className="titulo">{songs[current].artist}</p>
        <p className="cancion">{songs[current].title}</p>
      </div>

      <div className="controles">
        <button className="btn-control" onClick={nextSong}>⏭</button>
        <button className="btn-control" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <audio
          ref={audioRef}
          src={songs[current].src}
          autoPlay={true}
          muted={true}
          onCanPlay={() => audioRef.current.play().catch(() => {})}
          onEnded={() => setCurrent((prev) => (prev + 1) % songs.length)}
        />
      </div>
    </div>
  );
}







