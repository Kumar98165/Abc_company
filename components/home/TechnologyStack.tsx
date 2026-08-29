"use client";

import { SectionHeading } from "./SectionHeading";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface TechNode {
  name: string;
  category: string;
  desc: string;
  x: number; // orbital radius & speeds
  y: number;
  z: number;
}

const techNodesList: TechNode[] = [
  { name: "React", category: "Frontend", desc: "Interactive client-side interfaces.", x: 2.2, y: 1.2, z: 0.5 },
  { name: "Next.js", category: "Frontend", desc: "Server-side rendering frameworks.", x: -2.0, y: -1.0, z: 1.5 },
  { name: "TypeScript", category: "Frontend", desc: "Strict type safety layers.", x: 1.5, y: -2.2, z: -1.0 },
  { name: "Python", category: "AI / ML & Backend", desc: "AI scripts and FastAPI backends.", x: -1.8, y: 2.0, z: -0.5 },
  { name: "PostgreSQL", category: "Database", desc: "Relational database systems.", x: 2.5, y: -0.5, z: 2.0 },
  { name: "AWS", category: "Cloud", desc: "Scalable cloud cluster hosting.", x: -2.5, y: -1.5, z: -2.0 },
  { name: "Docker", category: "DevOps", desc: "Container packaging layers.", x: 0.8, y: 2.6, z: 1.2 },
  { name: "Kubernetes", category: "DevOps", desc: "Orchestrating container nodes.", x: -1.2, y: -2.8, z: -1.5 },
  { name: "LLMs", category: "AI & ML", desc: "Generative text model networks.", x: 3.2, y: 1.5, z: -1.8 },
  { name: "FastAPI", category: "Backend", desc: "Low-latency API backend nodes.", x: -3.0, y: 1.8, z: 0.8 },
];

export function TechnologyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<TechNode | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!threeLoaded || !canvasRef.current || !containerRef.current) return;

    const THREE = (window as any).THREE;
    if (!THREE) return;

    let width = canvasRef.current.parentElement?.clientWidth || 500;
    let height = canvasRef.current.parentElement?.clientHeight || 450;

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

    const techGroup = new THREE.Group();
    scene.add(techGroup);

    // Center Node ("TECH STACK")
    const centerGeom = new THREE.SphereGeometry(0.7, 32, 32);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9, // sky-500
      transparent: true,
      opacity: 0.9,
    });
    const centerMesh = new THREE.Mesh(centerGeom, centerMat);
    techGroup.add(centerMesh);

    // Orbital Nodes
    const nodeMeshes: Array<{ node: TechNode; mesh: any; angle: number; speed: number; radius: number; heightOffset: number }> = [];

    techNodesList.forEach((tech, i) => {
      const radius = 3.5 + Math.random() * 0.8;
      const angle = (i / techNodesList.length) * Math.PI * 2;
      const speed = 0.003 + Math.random() * 0.002;
      const heightOffset = (Math.random() - 0.5) * 1.5;

      const mGeom = new THREE.SphereGeometry(0.2, 16, 16);
      const mMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8, // sky-400
        transparent: true,
        opacity: 0.8,
      });
      const mesh = new THREE.Mesh(mGeom, mMat);
      techGroup.add(mesh);

      nodeMeshes.push({
        node: tech,
        mesh,
        angle,
        speed,
        radius,
        heightOffset,
      });
    });

    // Connecting lines from Center to Orbiting Nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.15,
    });

    const linePositions = new Float32Array(techNodesList.length * 2 * 3);
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const connectingLines = new THREE.LineSegments(lineGeom, lineMat);
    techGroup.add(connectingLines);

    // Handle mouse move to check hovers (raycaster)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));

      if (intersects.length > 0) {
        const intersectedMesh = intersects[0].object;
        const matched = nodeMeshes.find(n => n.mesh === intersectedMesh);
        if (matched) {
          setHoveredNode(matched.node);
          return;
        }
      }
      setHoveredNode(null);
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

    const draw = () => {
      reqId = requestAnimationFrame(draw);

      if (!isVisible) return;

      // Slow orbit rotation
      techGroup.rotation.y += 0.001;

      // Update positions along orbital paths
      const linePosArray = connectingLines.geometry.attributes.position.array as Float32Array;

      nodeMeshes.forEach((n, idx) => {
        n.angle += n.speed;
        n.mesh.position.x = Math.cos(n.angle) * n.radius;
        n.mesh.position.z = Math.sin(n.angle) * n.radius;
        n.mesh.position.y = n.heightOffset;

        // Highlight hovered node
        const isHovered = hoveredNode?.name === n.node.name;
        n.mesh.scale.setScalar(isHovered ? 1.6 : 1.0);
        n.mesh.material.color.setHex(isHovered ? 0x0284c7 : 0x38bdf8);

        // Update lines
        linePosArray[idx * 6] = 0;
        linePosArray[idx * 6 + 1] = 0;
        linePosArray[idx * 6 + 2] = 0;
        linePosArray[idx * 6 + 3] = n.mesh.position.x;
        linePosArray[idx * 6 + 4] = n.mesh.position.y;
        linePosArray[idx * 6 + 5] = n.mesh.position.z;
      });

      connectingLines.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
    };
  }, [threeLoaded, isVisible, hoveredNode]);

  return (
    <section ref={containerRef} id="technology-stack" className="anchor-offset bg-canvas overflow-hidden">
      {/* Script to load ThreeJS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />

      <div className="section-shell section-space">
        <SectionHeading
          label="Technology"
          title="Technology That Powers What's Next"
          description="We align our engineering experience with modern framework ecosystems."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          
          {/* Left: 3D interactive Orbit Ecosystem Canvas */}
          <div className="relative aspect-square w-full max-w-[460px] mx-auto flex items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-md">
            <div className="absolute top-4 left-4 bg-slate-950/5 border border-slate-100 rounded-lg px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Interactive tech space
            </div>
            <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-slate-950 border border-slate-900 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Tech Stack
            </div>
          </div>

          {/* Right: Hover details card context */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg min-h-[220px] flex flex-col justify-center">
            {hoveredNode ? (
              <div className="animate-in fade-in duration-200">
                <span className="rounded bg-sky-50 border border-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-600 uppercase tracking-wide">
                  {hoveredNode.category}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950 mt-4">
                  {hoveredNode.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {hoveredNode.desc}
                </p>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-xs font-semibold text-slate-400">
                  Hover over the orbiting technology nodes on the left to reveal details.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
