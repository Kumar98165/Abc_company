import { trustMarks } from "@/data/home";

const logoMap: Record<string, { name: string; logo: React.ReactNode }> = {
  ENTERPRISE: {
    name: "Alto-Shaam",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="20" rx="30" ry="12" fill="none" stroke="#D11218" strokeWidth="1.5" transform="rotate(-15 60 20)" opacity="0.8" />
        <text x="60" y="24" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#000000" textAnchor="middle" letterSpacing="0.05em">
          ALTO-SHAAM
        </text>
      </svg>
    ),
  },
  INNOVATION: {
    name: "Case Construction",
    logo: (
      <svg viewBox="0 0 120 40" className="h-10 w-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <text x="60" y="20" fontFamily="Impact, sans-serif" fontSize="20" fontWeight="900" fill="#1A1A1A" textAnchor="middle" letterSpacing="0.05em">
          CASE
        </text>
        <rect x="25" y="24" width="70" height="6" fill="#F2A900" />
        <text x="60" y="29" fontFamily="sans-serif" fontSize="5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.1em">
          CONSTRUCTION
        </text>
      </svg>
    ),
  },
  TECHNOLOGY: {
    name: "CIE Automotive",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35 20 A 8 8 0 1 1 45 14" fill="none" stroke="#E37222" strokeWidth="3" strokeLinecap="round" />
        <circle cx="45" cy="20" r="2.5" fill="#E37222" />
        <text x="52" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#4A4A4A">
          CIE <tspan fontWeight="normal" fill="#7A7A7A" fontSize="9">Automotive</tspan>
        </text>
      </svg>
    ),
  },
  DIGITAL: {
    name: "CNH Industrial",
    logo: (
      <svg viewBox="0 0 120 40" className="h-10 w-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <text x="60" y="22" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#111111" textAnchor="middle" letterSpacing="-0.05em">
          CNH
        </text>
        <rect x="74" y="9" width="3" height="3" fill="#D11218" />
        <text x="60" y="30" fontFamily="sans-serif" fontSize="5.5" fontWeight="bold" fill="#333333" textAnchor="middle" letterSpacing="0.2em">
          INDUSTRIAL
        </text>
      </svg>
    ),
  },
  "AI SYSTEMS": {
    name: "Federal Mogul",
    logo: (
      <svg viewBox="0 0 140 40" className="h-10 w-auto shrink-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="20" r="8" fill="none" stroke="#005A9C" strokeWidth="2.5" />
        <line x1="20" y1="20" x2="36" y2="20" stroke="#005A9C" strokeWidth="2.5" />
        <text x="42" y="18" fontFamily="sans-serif" fontSize="9" fontWeight="bold" fill="#005A9C" letterSpacing="0.05em">
          FEDERAL
        </text>
        <text x="42" y="28" fontFamily="sans-serif" fontSize="10.5" fontWeight="bold" fill="#005A9C" letterSpacing="0.05em">
          MOGUL
        </text>
      </svg>
    ),
  },
};

export function TrustLogos() {
  return (
    <section className="relative overflow-hidden bg-[#090F1C]">
      <div className="section-shell py-12 md:py-16 border-y border-slate-800/60">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          A Partnership Built on Trust
        </h2>
        <p className="mt-3 text-center text-sm md:text-base text-slate-400">
          Trusted by leading companies across industries
        </p>

        <div className="relative mt-10 overflow-hidden">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#090F1C] to-transparent" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#090F1C] to-transparent" />

          {/* Running slider */}
          <div className="logo-slider flex w-max">
            {[...trustMarks, ...trustMarks, ...trustMarks, ...trustMarks].map((mark, index) => {
              const item = logoMap[mark] || { name: mark, logo: null };
              return (
                <div
                  key={`${mark}-${index}`}
                  className="mx-3 flex h-24 w-48 sm:w-56 lg:w-64 shrink-0 items-center justify-center rounded-2xl border border-slate-200/10 bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                >
                  {item.logo}
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === 5 ? "bg-[#8da499]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}