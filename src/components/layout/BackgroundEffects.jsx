
export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Glow amarelo — canto superior esquerdo */}
      <div
        className="absolute rounded-full"
        style={{
          width: "520px",
          height: "520px",
          left: "-120px",
          top: "-130px",
          backgroundColor: "rgba(255, 214, 10, 0.18)",
          filter: "blur(100px)",
        }}
      />

      {/* Glow azul — canto inferior direito */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          right: "-200px",
          bottom: "-250px",
          backgroundColor: "rgba(0, 102, 255, 0.25)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
