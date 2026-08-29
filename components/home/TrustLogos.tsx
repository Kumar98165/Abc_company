import { trustMarks } from "@/data/home";

export function TrustLogos() {
  return (
    <section className="bg-white">
      <div className="section-shell section-space-tight border-y border-slate-200/80">
        <p className="text-center text-sm font-medium tracking-[0.04em] text-slate-500">
          Trusted by teams building what comes next
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustMarks.map((mark) => (
            <div
              key={mark}
              className="flex h-20 items-center justify-center border border-slate-200 bg-slate-50 text-sm font-semibold uppercase tracking-[0.34em] text-slate-400"
            >
              {mark}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
