"use client";

import { useState } from "react";
import { productsData } from "@/data/products";

export function ProductsShowcase() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      {/* Products & Platforms Section */}
      <section className="py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200/40">
        <div className="section-shell max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6A00]">Our Built Assets</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0e1726] tracking-tight sm:text-4xl leading-tight">
              Products & Platforms We've Built
            </h2>
            <p className="mt-3 text-[#687386] text-xs sm:text-sm">
              A custom portfolio of enterprise software platforms, smart analytics dashboards, and fintech portals shipped for global companies.
            </p>
          </div>

          {/* Products Grid with 3D Perspective */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch [perspective:1000px]">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-3deg)] hover:shadow-[0_20px_45px_rgba(255,106,0,0.05),_0_15px_30px_rgba(0,0,0,0.04)] flex flex-col h-full justify-between group"
              >
                {/* Content Top Segment */}
                <div className="flex-1 flex flex-col [transform-style:preserve-3d]">
                  {/* Product Image */}
                  <div
                    className="relative h-32 w-full overflow-hidden rounded-xl mb-4 border border-slate-100 bg-[#FAF8F5] cursor-pointer group/img [transform:translateZ(10px)] transition-transform duration-500 group-hover:shadow-md"
                    onClick={() => setLightboxImage(product.image)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Category Tag */}
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF6A00] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100/50 self-start mb-2.5 [transform:translateZ(15px)]">
                    {product.category}
                  </span>

                  {/* Product Name */}
                  <h3 className="text-sm font-bold text-[#0e1726] tracking-tight hover:text-[#FF6A00] transition-colors leading-snug [transform:translateZ(15px)]">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] text-[#687386] mt-2 leading-relaxed flex-grow [transform:translateZ(15px)]">
                    {product.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1 mt-4 pt-1 mb-4 [transform:translateZ(10px)]">
                    {product.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[8.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {product.technologies.length > 3 && (
                      <span className="text-[8.5px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200/20">
                        +{product.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between [transform:translateZ(10px)]">
                  {product.projectLink ? (
                    <>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Production Live</span>
                      <a
                        href={product.projectLink}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF6A00] hover:text-[#E64A00] transition-colors group/btn"
                      >
                        View Product
                        <span className="transition-transform duration-300 transform group-hover/btn:translate-x-0.5">→</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Enterprise Internal</span>
                      <span className="text-[9px] font-medium text-slate-400 italic">Case Study</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-11/12 overflow-hidden rounded-lg bg-slate-900 border border-slate-800">
            <img
              src={lightboxImage}
              alt="Expanded Product Screenshot"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
