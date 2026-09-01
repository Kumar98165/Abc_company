import React from "react";

interface CareersFinalCTAProps {
  onViewPositionsClick: () => void;
  onJoinTalentNetworkClick: () => void;
}

export function CareersFinalCTA({
  onViewPositionsClick,
  onJoinTalentNetworkClick,
}: CareersFinalCTAProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] bg-gradient-to-br from-[#FF5F00] via-[#FF731A] to-[#F79E1B] p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="grid-backdrop absolute inset-0 opacity-10 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-extrabold uppercase tracking-[0.2em] text-white border border-white/20">
              JOIN OUR ENGINEERING TEAM
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Build What's Next?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Bring your ideas, curiosity, and engineering mindset. Let's build meaningful digital products together.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onViewPositionsClick}
                className="rounded-full bg-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-[#FF5F00] hover:bg-[#FFF4EC] transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                VIEW OPEN POSITIONS →
              </button>
              <button
                type="button"
                onClick={onJoinTalentNetworkClick}
                className="rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                JOIN OUR TALENT NETWORK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
