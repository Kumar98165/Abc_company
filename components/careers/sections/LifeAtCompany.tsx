import React from "react";
import Image from "next/image";

export function LifeAtCompany() {
  return (
    <section id="life-at-company" className="bg-white py-16 lg:py-24 border-b border-[#EAE3D9]">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5F00]/30 bg-[#FF5F00]/8 px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF5F00]">
            LIFE AT OUR COMPANY
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl tracking-tight">
            Build. Collaborate. Learn. Grow.
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Great products are built by great teams. Work alongside talented people, share ideas, solve challenging problems, and build products that create real impact.
          </p>
        </div>

        {/* ASYMMETRIC IMAGE GALLERY LAYOUT */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Left Large Feature Card */}
          <div className="lg:col-span-7 rounded-3xl border border-[#EAE3D9] bg-[#FFFBF7] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#FF5F00] transition-all shadow-xs min-h-[380px]">
            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF5F00] text-white font-mono text-[10.5px] font-extrabold uppercase tracking-wider">
                ENGINEERING COLLABORATION
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Agile Team Sprints & Knowledge Exchange
              </h3>
              <p className="text-xs text-[#64748B] max-w-md leading-relaxed">
                From daily architectural huddles to bi-weekly tech talks, our engineers constantly cross-pollinate ideas and challenge traditional benchmarks.
              </p>
            </div>

            <div className="relative w-full h-56 mt-6 rounded-2xl overflow-hidden">
              <Image
                src="/images/careers-3d-team-hero.png"
                alt="Engineering Team Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Two Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="rounded-3xl border border-[#EAE3D9] bg-[#FFFBF7] p-6 flex items-center gap-5 hover:border-[#FF5F00] transition-all shadow-xs group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] text-2xl group-hover:scale-110 transition-transform">
                🚀
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#0F172A]">Hackathons & Labs</h4>
                <p className="text-xs text-[#64748B] mt-1 leading-snug">
                  Quarterly innovation hackathons where team members build experimental AI agents and developer tooling.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-[#EAE3D9] bg-[#FFFBF7] p-6 flex items-center gap-5 hover:border-[#FF5F00] transition-all shadow-xs group">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF4EC] text-[#FF5F00] border border-[#FFE2CC] text-2xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <div>
                <h4 className="text-base font-extrabold text-[#0F172A]">Leadership Mentorship</h4>
                <p className="text-xs text-[#64748B] mt-1 leading-snug">
                  Direct 1-on-1 mentorship with engineering directors and product architects to map your career trajectory.
                </p>
              </div>
            </div>

            {/* Bottom Wide Card */}
            <div className="rounded-3xl border border-[#FFE2CC] bg-[#FFF4EC] p-6 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5F00]">WORK CULTURE</span>
                <h4 className="text-sm font-extrabold text-[#0F172A] mt-0.5">Flexible Work Hours & Mental Wellness Support</h4>
              </div>
              <span className="text-2xl">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
