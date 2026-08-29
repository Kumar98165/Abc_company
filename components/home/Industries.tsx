"use client";

import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  lat: number; // mapped coordinates on sphere
  lon: number;
}

const industriesList: IndustryItem[] = [
  { id: "healthcare", title: "Healthcare", description: "Digital integrations built to automate workflows, manage records and secure medical data.", points: ["Workflow automation", "HIPAA alignment", "Patient interfaces"], lat: 0.4, lon: 0.8 },
  { id: "fintech", title: "FinTech", description: "Secure financial ledger nodes, payment gateway bridges, and transactions analytics pipelines.", points: ["Ledger structures", "PCI compliance", "Data analytics"], lat: -0.6, lon: 1.8 },
  { id: "ecommerce", title: "E-Commerce", description: "High-volume product storefront systems, custom SaaS integrations, and inventory synchronization.", points: ["Storefront systems", "API mapping", "Inventory engines"], lat: 0.8, lon: -0.5 },
  { id: "manufacturing", title: "Manufacturing", description: "Operational supply metrics, resource scheduling algorithms, and shop-floor automation.", points: ["Resource scheduling", "Telemetry tracking", "Asset visibility"], lat: -0.2, lon: -1.2 },
  { id: "logistics", title: "Logistics", description: "Route optimization, fleet tracking analytics, and terminal warehouse management structures.", points: ["Route optimization", "Fleet tracking", "Warehouse APIs"], lat: 0.5, lon: 2.2 },
  { id: "education", title: "Education", description: "Virtual classrooms, student information databases, and online exam portals.", points: ["LMS solutions", "Database engines", "Exam portals"], lat: -0.8, lon: 0.2 },
];

export function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string>("healthcare");
  const activeIdRef = useRef<string>("healthcare");
  activeIdRef.current = activeId;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.15 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    let width = canvasRef.current.parentElement?.clientWidth || 450;
    let height = canvasRef.current.parentElement?.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Inner wireframe sphere representing the globe grid
    const globeGeom = new THREE.SphereGeometry(3.5, 30, 30);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const globeMesh = new THREE.Mesh(globeGeom, globeMat);
    globeGroup.add(globeMesh);

    // Node markers for each industry placed on the globe
    const markerGroup = new THREE.Group();
    globeGroup.add(markerGroup);

    const markers: Array<{ id: string; mesh: any; targetRot: { x: number; y: number } }> = [];

    industriesList.forEach((ind) => {
      // Calculate 3D sphere coordinate from lat/lon values
      const rad = 3.5;
      const phi = ind.lat;
      const theta = ind.lon;

      const x = rad * Math.sin(phi) * Math.cos(theta);
      const y = rad * Math.sin(phi) * Math.sin(theta);
      const z = rad * Math.cos(phi);

      // Marker mesh
      const mGeom = new THREE.SphereGeometry(0.15, 16, 16);
      const mMat = new THREE.MeshBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(mGeom, mMat);
      mesh.position.set(x, y, z);
      markerGroup.add(mesh);

      // Save corresponding target rotations to focus on this marker
      markers.push({
        id: ind.id,
        mesh,
        targetRot: { x: -phi + 0.3, y: -theta - 0.5 },
      });
    });

    // Connecting lines between markers
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
    });
    const linePositions: number[] = [];
    for (let i = 0; i < markers.length; i++) {
      for (let j = i + 1; j < markers.length; j++) {
        const p1 = markers[i].mesh.position;
        const p2 = markers[j].mesh.position;
        linePositions.push(p1.x, p1.y, p1.z);
        linePositions.push(p2.x, p2.y, p2.z);
      }
    }
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const connectingLines = new THREE.LineSegments(lineGeom, lineMat);
    globeGroup.add(connectingLines);

    // Scroll tracker
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

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
    let targetX = 0;
    let targetY = 0;

    const draw = () => {
      reqId = requestAnimationFrame(draw);

      if (!isVisible) return;

      // Find the active industry marker rotation coordinates
      const activeMarker = markers.find((m) => m.id === activeIdRef.current);
      if (activeMarker) {
        targetX += (activeMarker.targetRot.x - targetX) * 0.05;
        targetY += (activeMarker.targetRot.y - targetY) * 0.05;
      }

      // Merge active orientation with scroll rotation
      globeGroup.rotation.x = targetX + scrollY * 0.0004;
      globeGroup.rotation.y = targetY + scrollY * 0.0008;

      // Highlight active marker scale & color
      markers.forEach((m) => {
        const isActive = m.id === activeIdRef.current;
        const targetScale = isActive ? 1.8 : 1.0;
        m.mesh.scale.set(targetScale, targetScale, targetScale);
        m.mesh.material.color.setHex(isActive ? 0x38bdf8 : 0x0ea5e9);
      });

      renderer.render(scene, camera);
    };

    draw();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
    };
  }, [threeLoaded, isVisible]);

  return (
    <section ref={containerRef} id="industries" className="anchor-offset bg-canvas overflow-hidden">
      {/* Script to load ThreeJS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />

      <div className="section-shell section-space">
        <SectionHeading
          label="Industries"
          title="Technology Built for Your Industry"
          description="We align our engineering experience with sector-specific operational processes."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          
          {/* Left: Interactive list of industries */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {industriesList.map((ind) => {
              const isActive = activeId === ind.id;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveId(ind.id)}
                  onClick={() => setActiveId(ind.id)}
                  className={`border p-6 rounded-2xl cursor-pointer select-none transition-all duration-300 ${
                    isActive
                      ? "border-sky-500 bg-white shadow-[0_16px_40px_rgba(14,165,233,0.06)] scale-[1.01]"
                      : "border-slate-200 bg-white/40 hover:border-slate-300"
                  }`}
                >
                  <h3 className={`text-lg font-bold transition-colors duration-200 ${isActive ? "text-sky-600" : "text-slate-950"}`}>
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {ind.description}
                  </p>
                  
                  {isActive && (
                    <div className="mt-3 flex flex-wrap gap-1.5 animate-in fade-in duration-200">
                      {ind.points.map((pt) => (
                        <span key={pt} className="rounded bg-sky-50 border border-sky-100 px-2 py-0.5 text-[9px] font-bold text-sky-600 uppercase tracking-wide">
                          {pt}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Three.js Interactive Globe Canvas */}
          <div className="relative aspect-square w-full max-w-[460px] mx-auto flex items-center justify-center rounded-full bg-slate-100/10 border border-slate-200">
            <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
