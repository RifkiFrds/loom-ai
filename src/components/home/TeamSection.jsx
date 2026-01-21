import { RevealOnScroll } from "@/lib/motion";

const teamMembers = [
  "Ahmad Ghifari Zahar ~ Project Lead",
  "Jumro Jumro Atun ~ Frontend Engineer",
  "Manda ~ Analytics Engineer",
  "Arvin Adriansyah ~ AI Engineer",
  "Afdal Abinaya ~ Brand Designer",
];

const TeamSection = () => {
  return (
    <RevealOnScroll>
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT — TEXT LIST */}
        <div className="lg:col-span-6 space-y-3">
            <span className="block text-xs tracking-[0.35em] uppercase text-loom-light/60">
                ABOUT US
            </span>
          <h2 className="text-4xl md:text-5xl font-serif border-b border-loom-rose max-w-[329px] pb-2 uppercase tracking-tight mb-4">
            Who Are <span className="text-loom-roseTwo">We?</span>
          </h2>

          <div className="space-y-4">
            {teamMembers.map((name, index) => (
              <div
                key={index}
                className="
                  relative
                  px-6 py-4
                  border border-loom-light/15
                  rounded-full
                  backdrop-blur-sm
                  text-sm md:text-base
                  font-serif uppercase tracking-wide
                  text-loom-light/90
                  bg-loom-light/[0.02]
                "
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative">
            <img
              src="/images/team.png"
              alt="LOOM Team"
              className="
                max-w-[350px] w-full
                rounded-2xl  
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};

export default TeamSection;
