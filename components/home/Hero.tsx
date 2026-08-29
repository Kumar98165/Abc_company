"use client";

import { heroTrustItems } from "@/data/home";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

// Floating card properties
interface FloatingCardProps {
  label: string;
  top: string;
  left: string;
  delay: string;
  depth: number;
}

function FloatingCard({ label, top, left, delay, depth }: FloatingCardProps) {
  return (
    <div
      className="hero-card absolute pointer-events-none rounded-xl border border-[#DDD4C7]/60 bg-white/85 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#FF5F00] shadow-xl backdrop-blur-md animate-bounce"
      style={{
        top,
        left,
        animationDuration: "5s",
        animationDelay: delay,
        transform: `translate3d(0, 0, ${depth}px)`,
      }}
    >
      <span className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F00] animate-pulse" />
        {label}
      </span>
    </div>
  );
}

function Hero3DVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight || 500;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Sphere Geometry (Network nodes)
    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    // Particle nodes on sphere surface
    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const radius = 5.2;

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom glowing point shader or simple high-end points material
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xf79e1b, // Mastercard Gold
      size: 0.16,
      transparent: true,
      opacity: 0.85,
    });

    const pointCloud = new THREE.Points(geometry, pointsMaterial);
    sphereGroup.add(pointCloud);

    // Connecting lines between nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff5f00, // Mastercard Orange
      transparent: true,
      opacity: 0.18,
    });

    const linePositions: number[] = [];
    const nodeCount = particleCount;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.5) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    sphereGroup.add(lines);

    // Outer rotating rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringCount = 3;
    const rings: any[] = [];
    for (let i = 0; i < ringCount; i++) {
      const ringGeom = new THREE.RingGeometry(5.8 + i * 0.4, 5.85 + i * 0.4, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0xff5f00 : 0xeb001b, // Mastercard Orange vs Red
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3 - i * 0.1,
      });
      const mesh = new THREE.Mesh(ringGeom, ringMat);
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      ringGroup.add(mesh);
      rings.push(mesh);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff5f00, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse interactive coordinates
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Visibility Observer to pause loop when not in view
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);

    // Render loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Slow idle sphere rotations
      sphereGroup.rotation.y += 0.002;
      sphereGroup.rotation.x += 0.0006;

      // Rotating rings
      rings.forEach((ring, index) => {
        ring.rotation.z += 0.003 * (index === 0 ? 1 : -0.7);
        ring.rotation.x += 0.001 * (index === 0 ? 1 : -0.5);
      });

      // Mouse tracking interpolation
      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      scene.rotation.y = targetX * 1.5;
      scene.rotation.x = targetY * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(reqId);
    };
  }, [threeLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[620px] aspect-[4/3] flex items-center justify-center border border-[#DDD4C7] bg-[#FAF6F0] rounded-[2rem] overflow-hidden shadow-[0_28px_80px_rgba(120,80,30,0.12)]"
    >
      {/* 3D background grid pattern */}
      <div className="absolute inset-0 grid-backdrop opacity-10 pointer-events-none" />

      {/* Script to load ThreeJS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />

      {/* WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />

      {/* Floating tags with coordinates */}
      <FloatingCard label="AI" top="15%" left="10%" delay="0s" depth={20} />
      <FloatingCard label="Cloud" top="20%" left="75%" delay="1.2s" depth={35} />
      <FloatingCard label="API" top="75%" left="15%" delay="2.4s" depth={15} />
      <FloatingCard label="Security" top="70%" left="68%" delay="0.6s" depth={40} />
    </div>
  );
}

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations
  const textTranslateY = scrollY * 0.12;
  const visualScale = Math.max(0.85, 1 - scrollY * 0.0006);

  return (
    <section id="top" className="relative overflow-hidden bg-canvas pt-10">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      {/* Warm tint gradient glow */}
      <div className="absolute left-[62%] top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,95,0,0.10),_transparent_72%)] blur-2xl" />

      <div className="section-shell section-space relative pt-36 md:pt-44 lg:pt-40">
        <div className="grid min-h-[calc(88vh-5rem)] items-center gap-16 xl:grid-cols-[minmax(0,0.96fr)_minmax(460px,1.04fr)] xl:gap-14">
          
          {/* Hero text content with scroll-parallax shifts */}
          <div
            className="max-w-2xl transition-transform duration-100 ease-out"
            style={{ transform: `translate3d(0, -${textTranslateY}px, 0)` }}
          >
            <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#FF5F00]">
              <span className="h-2 w-2 rounded-full bg-[#FF5F00]" />
              SOFTWARE ENGINEERING & AI
            </span>

            {/* Word-by-word fade text loader */}
            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#1A1A1A] sm:text-[4.25rem] lg:text-[4.7rem] animate-fade-in">
              Build <span className="bg-gradient-to-r from-[#EB001B] via-[#FF5F00] to-[#F79E1B] bg-clip-text text-transparent">Digital Products</span>
              <br />
              That <span className="text-[#FF5F00]">Move Your Business Forward</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5A5A5A] sm:text-xl">
              We design and engineer scalable software, AI-powered products and digital experiences that solve real business challenges.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#final-cta"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5F00] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#e65400] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 hover:scale-[1.03]"
              >
                Start a Project
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DDD4C7] bg-white px-6 py-4 text-base font-semibold text-[#1A1A1A] transition-all duration-200 hover:border-[#FF5F00] hover:text-[#FF5F00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F00] focus-visible:ring-offset-2 hover:scale-[1.03]"
              >
                Explore Our Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>

            <ul className="mt-10 flex flex-col gap-3 text-sm font-medium text-[#5A5A5A] sm:flex-row sm:flex-wrap sm:gap-6">
              {heroTrustItems.map((item) => (
                <li key={item} className="inline-flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#DDD4C7] bg-white">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F00]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Visual container with scroll shrink */}
          <div
            className="transition-transform duration-100 ease-out"
            style={{ transform: `scale(${visualScale})` }}
          >
            <Hero3DVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
