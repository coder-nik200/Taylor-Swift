export default function Header() {
  return (
    <header className="mt-[27px] md:mt-0 text-center md:text-left [text-shadow:0_3px_20px_#000]">
      <p className="text-[7px] md:text-[9px] tracking-[.24em] m-0 mb-1 md:mb-2 text-[#e8e1d7]">
        MIDNIGHT BROADCAST / ERA 13
      </p>

      <h1 className="font-display font-normal m-0 text-[64px] md:text-[clamp(84px,10vw,168px)] leading-[.67] tracking-[.035em]">
        TAYLOR
        <br />
        <em className="not-italic text-[#c9a96e] [text-shadow:2px_0_#070707] md:[text-shadow:3px_0_#070707]">
          SWIFT
        </em>
      </h1>

      <p className="font-serif italic text-[12px] md:text-[16px] mt-3 mb-0 md:mt-4">
        Eras / Midnight / Archive
      </p>
    </header>
  );
}
