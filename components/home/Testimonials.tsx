import { testimonials } from "@/data/home";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-canvas">
      <div className="section-shell section-space">
        <SectionHeading
          label="Client Voices"
          title="What Our Clients Say"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="border border-slate-200 bg-white p-6 shadow-[0_22px_55px_rgba(15,23,42,0.05)]">
              <span className="inline-flex border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                Placeholder
              </span>
              <p className="mt-6 text-lg leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{testimonial.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
