const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
            #3a2524 0%,
            #1a1211 12%,
            #0c0c0c 40%,
            #0c0c0c 75%,
            #1a1211 100%
            )
          `,
        }}
      />

      {/* LOOM LETTER FLOW */}
       <div className="relative">
        {/* L */}
        <SectionLetter
          letter="L"
          topMobile="8vh"
          topDesktop="10vh"
        />

        {/* O */}
        <SectionLetter
          letter="O"
          topMobile="90vh"
          topDesktop="105vh"
        />

        {/* O */}
        <SectionLetter
          letter="O"
          topMobile="170vh"
          topDesktop="205vh"
        />

        {/* M */}
        <SectionLetter
          letter="M"
          topMobile="250vh"
          topDesktop="295vh"
        />
      </div>

      {/* Ambient grain (responsive) */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          bg-[radial-gradient(#ffffff_0.5px)]
          [background-size:4px_4px]
          md:opacity-[0.035]
          md:[background-size:3px_3px]
        "
      />
    </div>
  );
};

/* ======================
   LETTER COMPONENT
====================== */

const SectionLetter = ({ letter, topMobile, topDesktop }) => (
  <>
    {/* Mobile */}
    <div
      className="
        absolute md:hidden
        left-[1%]
        font-serif font-bold
        text-loom-rose/25
        leading-none
        select-none
        blur-[2px]
        text-[30rem] sm:text-[34rem]
      "
      style={{ top: topMobile }}
    >
      {letter}
    </div>

    {/* Desktop */}
    <div
      className="
        absolute hidden md:block
        left-[5%]
        font-serif font-bold
        text-loom-rose/25
        leading-none
        select-none
        blur-[4px]
        text-[32rem] lg:text-[42rem]
      "
      style={{ top: topDesktop }}
    >
      {letter}
    </div>
  </>
);

export default Background;
