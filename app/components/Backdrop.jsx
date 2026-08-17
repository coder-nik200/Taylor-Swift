export default function Backdrop() {
  return (
    <div
      className="
        absolute -inset-[9%] md:-inset-[6%]
        bg-[url('/Taylor-Swift.jpeg')]
        md:bg-[url('/Tylor-collage.jpeg')]
        bg-center bg-cover
        blur-[22px]
        brightness-[.28]
        md:blur-[38px]
        md:brightness-[.3]
        md:saturate-[.9]
        scale-105
      "
      aria-hidden="true"
    />
  );
}
