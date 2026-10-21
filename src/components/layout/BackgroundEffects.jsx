
export default function BackgroundEffects() {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#000814",
          overflow: "hidden",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        {/* Glow amarelo */}
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            left: "-120px",
            top: "-130px",
            backgroundColor: "#FFD60A",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.2,
          }}
        />
  
        {/* Glow azul */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            right: "-220px",
            bottom: "-260px",
            backgroundColor: "#2563EB",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: 0.25,
          }}
        />
      </div>
    );
  }
  