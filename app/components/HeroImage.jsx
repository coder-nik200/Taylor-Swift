export default function HeroImage({ glitching, onTrigger }) {
  return (
    <div
      onClick={onTrigger}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          onTrigger();
        }
      }}
      aria-label="Enter the Taylor Swift archive"
      className={`absolute inset-0
        bg-[url('/Taylor-Swift.jpeg')]
        md:bg-[url('/Taylor-collage.jpeg')]
        bg-cover bg-center
        cursor-crosshair
        md:animate-drift
        ${glitching ? "animate-glitchmove" : ""}`}
    />
  );
}
