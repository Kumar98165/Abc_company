"use client";

import { siteConfig } from "@/data/home";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const startBtnRef = useRef<HTMLAnchorElement>(null);
  const talkBtnRef = useRef<HTMLAnchorElement>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Three.js ring drawing
  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Large abstract digital ring structure using points
    const ringRadius = 4.8;
    const ringPointsCount = 200;
    const ringGeom = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(ringPointsCount * 3);

    for (let i = 0; i < ringPointsCount; i++) {
      const angle = (i / ringPointsCount) * Math.PI * 2;
      // add minor noise/spread for visual depth
      const radiusOffset = (Math.random() - 0.5) * 0.4;
      const x = (ringRadius + radiusOffset) * Math.cos(angle);
      const y = (ringRadius + radiusOffset) * Math.sin(angle);
      const z = (Math.random() - 0.5) * 1.5;

      ringPositions[i * 3] = x;
      ringPositions[i * 3 + 1] = y;
      ringPositions[i * 3 + 2] = z;
    }

    ringGeom.setAttribute("position", new THREE.BufferAttribute(ringPositions, 3));
    const ringMat = new THREE.PointsMaterial({
      color: 0xff5f00,
      size: 0.12,
      transparent: true,
      opacity: 0.55,
    });
    const ringMesh = new THREE.Points(ringGeom, ringMat);
    ringGroup.add(ringMesh);

    // Dynamic particles orbiting inside the ring
    const particleCount = 40;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: number[] = [];
    const particleRadii: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = ringRadius + (Math.random() - 0.5) * 0.6;
      particlePositions[i * 3] = r * Math.cos(angle);
      particlePositions[i * 3 + 1] = r * Math.sin(angle);
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

      particleSpeeds.push(0.004 + Math.random() * 0.005);
      particleRadii.push(r);
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf79e1b,
      size: 0.18,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    ringGroup.add(particles);

    // Mouse movement coordinates
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight || 400;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let reqId: number;

    const draw = () => {
      reqId = requestAnimationFrame(draw);

      if (!isVisible) return;

      // Slow ring orbit spin
      ringMesh.rotation.z += 0.0015;

      // Orbit particles inside
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const x = posArray[i * 3];
        const y = posArray[i * 3 + 1];
        let angle = Math.atan2(y, x);
        angle += particleSpeeds[i];

        posArray[i * 3] = particleRadii[i] * Math.cos(angle);
        posArray[i * 3 + 1] = particleRadii[i] * Math.sin(angle);
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      ringGroup.rotation.y = targetX * 1.5;
      ringGroup.rotation.x = targetY * 1.5;

      renderer.render(scene, camera);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
    };
  }, [threeLoaded, isVisible]);

  // Magnetic button triggers
  const handleButtonMove = (e: React.MouseEvent<HTMLAnchorElement>, ref: React.RefObject<HTMLAnchorElement | null>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
  };

  const handleButtonLeave = (ref: React.RefObject<HTMLAnchorElement | null>) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <section
      ref={containerRef}
      id="final-cta"
      className="anchor-offset relative overflow-hidden bg-[#F5EFE6] text-[#1A1A1A] border-b border-[#DDD4C7]"
    >
      {/* Script to load ThreeJS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />

      {/* WebGL background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none w-full h-full opacity-35" />

      <div className="grid-backdrop absolute inset-0 opacity-15 pointer-events-none" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.12),_transparent_72%)] blur-3xl pointer-events-none" />

      <div className="section-shell section-space relative z-10">
        <div
          className={`overflow-hidden border border-[#DDD4C7] bg-white/80 backdrop-blur-sm rounded-[2.5rem] px-6 py-12 shadow-[0_30px_90px_rgba(120,80,30,0.10)] sm:px-10 lg:px-14 lg:py-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#FF5F00]">
              <span className="h-2 w-2 rounded-full bg-[#FF5F00]" />
              Start a Conversation
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-[#1A1A1A] sm:text-5xl lg:text-[3.7rem]">
              Have an Idea?
              <br />
              Let&apos;s Build It Together.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#6B6B6B]">
              Tell us what you&apos;re trying to build and let&apos;s explore how technology can turn your idea into a scalable digital product.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                ref={startBtnRef}
                onMouseMove={(e) => handleButtonMove(e, startBtnRef)}
                onMouseLeave={() => handleButtonLeave(startBtnRef)}
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5F00] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#e65400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] cursor-pointer"
                style={{ transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                Start a Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                ref={talkBtnRef}
                onMouseMove={(e) => handleButtonMove(e, talkBtnRef)}
                onMouseLeave={() => handleButtonLeave(talkBtnRef)}
                href="tel:+912000000000"
                className="inline-flex items-center justify-center rounded-full border border-[#DDD4C7] bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors duration-200 hover:border-[#FF5F00] hover:text-[#FF5F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] cursor-pointer"
                style={{ transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)" }}
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
