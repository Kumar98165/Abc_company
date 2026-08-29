"use client";

import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface AICard {
  title: string;
  desc: string;
  depth: number;
}

const aiCardsDataLeft: AICard[] = [
  { title: "Generative AI", desc: "Content and workflow generation grounded in business context.", depth: 30 },
  { title: "LLM Applications", desc: "Productized language experiences with guardrails and observability.", depth: 40 },
  { title: "AI Agents", desc: "Task-oriented systems that coordinate tools, prompts and actions.", depth: 20 },
];

const aiCardsDataRight: AICard[] = [
  { title: "RAG Systems", desc: "Knowledge retrieval pipelines for grounded answers and enterprise search.", depth: 35 },
  { title: "Computer Vision", desc: "Visual intelligence for detection, analysis and operational review.", depth: 45 },
  { title: "Predictive Analytics", desc: "Statistical scripts and data modelling mapping customer trends.", depth: 25 },
];

export function AITechnology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Visibility observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    let width = canvasRef.current.parentElement?.clientWidth || 400;
    let height = canvasRef.current.parentElement?.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Neural net group
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    // Nodes
    const nodeCount = 50;
    const nodeGeom = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const radius = 4.2;

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      nodePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      nodePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      nodePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    nodeGeom.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodeMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.18,
      transparent: true,
      opacity: 0.8,
    });

    const nodes = new THREE.Points(nodeGeom, nodeMat);
    brainGroup.add(nodes);

    // Connect node lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.22,
    });

    const linePoints: number[] = [];
    const pts: any[] = [];
    for (let i = 0; i < nodeCount; i++) {
      pts.push(new THREE.Vector3(nodePositions[i * 3], nodePositions[i * 3 + 1], nodePositions[i * 3 + 2]));
    }

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.8) {
          linePoints.push(pts[i].x, pts[i].y, pts[i].z);
          linePoints.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePoints, 3));
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    brainGroup.add(lines);

    // Dynamic rotating orbital rings
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringCount = 3;
    const ringArray: any[] = [];
    for (let i = 0; i < ringCount; i++) {
      const ringGeom = new THREE.RingGeometry(4.8 + i * 0.2, 4.83 + i * 0.2, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x0ea5e9 : i === 1 ? 0x38bdf8 : 0x1d4ed8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35 - i * 0.1,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ringGroup.add(ring);
      ringArray.push(ring);
    }

    // Parallax tracking variables
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const parent = canvasRef.current?.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    let reqId: number;
    let pulseTime = 0;

    const draw = () => {
      reqId = requestAnimationFrame(draw);

      if (!isVisible) return;

      pulseTime += 0.03;
      const pulseScale = 1.0 + Math.sin(pulseTime) * 0.04;
      brainGroup.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate sphere and rings
      brainGroup.rotation.y += 0.0015;
      brainGroup.rotation.x += 0.0005;

      ringArray.forEach((ring, index) => {
        ring.rotation.z += 0.002 * (index === 0 ? 1 : -0.6);
        ring.rotation.x += 0.001 * (index === 1 ? 1 : -0.4);
      });

      // Mouse parallax
      targetMouseX += (mouseX - targetMouseX) * 0.05;
      targetMouseY += (mouseY - targetMouseY) * 0.05;
      scene.rotation.y = targetMouseX * 1.2;
      scene.rotation.x = targetMouseY * 1.2;

      renderer.render(scene, camera);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
    };
  }, [threeLoaded, isVisible]);

  return (
    <section
      ref={containerRef}
      id="ai-technology"
      className="anchor-offset relative overflow-hidden bg-[linear-gradient(180deg,#0B1B2E_0%,#07111F_100%)] text-white border-b border-slate-900"
    >
      <div className="grid-backdrop absolute inset-0 opacity-15 pointer-events-none" />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_transparent_72%)] blur-3xl pointer-events-none" />

      {/* Script to load ThreeJS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />

      <div className="section-shell section-space relative z-10">
        <SectionHeading
          label="AI & Technology"
          title="Build Smarter With AI"
          description="From intelligent automation to generative AI, we help businesses turn emerging technology into practical solutions."
          invert
          align="center"
        />

        {/* 3D AI Layout */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr_1fr] items-center">
          
          {/* Left Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            {aiCardsDataLeft.map((card, idx) => (
              <div
                key={card.title}
                className="ai-card border border-white/5 bg-white/5 rounded-2xl p-6 shadow-lg transition-all duration-300 select-none cursor-pointer"
                style={{
                  transform: `translateZ(${card.depth}px)`,
                }}
              >
                <style jsx>{`
                  .ai-card {
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s, border-color 0.4s;
                  }
                  .ai-card:hover {
                    transform: translateY(-4px) translateZ(50px) scale(1.02);
                    border-color: rgba(56, 189, 248, 0.3);
                    background-color: rgba(255, 255, 255, 0.08);
                  }
                `}</style>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Center 3D Brain Sphere Canvas */}
          <div className="relative aspect-square w-full max-w-[420px] mx-auto order-1 lg:order-2 flex items-center justify-center rounded-full bg-slate-900/30 border border-white/5">
            <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
          </div>

          {/* Right Cards */}
          <div className="space-y-6 order-3">
            {aiCardsDataRight.map((card, idx) => (
              <div
                key={card.title}
                className="ai-card border border-white/5 bg-white/5 rounded-2xl p-6 shadow-lg transition-all duration-300 select-none cursor-pointer"
                style={{
                  transform: `translateZ(${card.depth}px)`,
                }}
              >
                <style jsx>{`
                  .ai-card {
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s, border-color 0.4s;
                  }
                  .ai-card:hover {
                    transform: translateY(-4px) translateZ(50px) scale(1.02);
                    border-color: rgba(56, 189, 248, 0.3);
                    background-color: rgba(255, 255, 255, 0.08);
                  }
                `}</style>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
