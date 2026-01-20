const Background = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Base gradient full height */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #3a2524 0%,
              #1a1211 20%,
              #0c0c0c 50%,
              #0c0c0c 75%,
              #1a1211 100%
            )
          `,
        }}
      />

      {/* LOOM LETTER FLOW */}
      <div className="relative">
        {/* L */}
        <SectionLetter top="10vh">L</SectionLetter>

        {/* O */}
        <SectionLetter top="120vh">O</SectionLetter>

        {/* O */}
        <SectionLetter top="230vh">O</SectionLetter>

        {/* M */}
        <SectionLetter top="340vh">M</SectionLetter>
      </div>

      {/* Ambient grain */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_8px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
};

const SectionLetter = ({ children, top }) => (
  <div
    className="absolute left-[5%] text-[42rem] font-serif font-bold text-loom-rose/30 leading-none select-none blur-[3px]"
    style={{ top }}
  >
    {children}
  </div>
);

export default Background;
