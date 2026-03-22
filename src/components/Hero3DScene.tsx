import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate sphere points for the globe wireframe
const generateGlobePoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    
    points[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(phi);
  }
  return points;
};

// Generate random floating particles
const generateParticles = (count: number, spread: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    points[i * 3] = (Math.random() - 0.5) * spread;
    points[i * 3 + 1] = (Math.random() - 0.5) * spread;
    points[i * 3 + 2] = (Math.random() - 0.5) * spread;
  }
  return points;
};

// Globe component with rotating point cloud
const Globe = () => {
  const globeRef = useRef<THREE.Points>(null);
  const innerGlobeRef = useRef<THREE.Points>(null);
  
  const globePoints = useMemo(() => generateGlobePoints(2000, 2), []);
  const innerGlobePoints = useMemo(() => generateGlobePoints(800, 1.7), []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
    if (innerGlobeRef.current) {
      innerGlobeRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      innerGlobeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer globe shell */}
      <Points ref={globeRef} positions={globePoints} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      {/* Inner globe shell */}
      <Points ref={innerGlobeRef} positions={innerGlobePoints} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06B6D4"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

// Location markers on the globe
const LocationMarkers = () => {
  const markersRef = useRef<THREE.Group>(null);
  
  // Key locations (approximate lat/long converted to 3D positions)
  const locations = useMemo(() => [
    { name: "India", position: [1.2, 0.4, 1.4] as [number, number, number] },
    { name: "UAE", position: [1.0, 0.5, 1.6] as [number, number, number] },
    { name: "UK", position: [-0.2, 1.2, 1.5] as [number, number, number] },
    { name: "USA", position: [-1.5, 0.8, 0.8] as [number, number, number] },
    { name: "Canada", position: [-1.3, 1.1, 0.6] as [number, number, number] },
  ], []);

  useFrame((state) => {
    if (markersRef.current) {
      markersRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={markersRef}>
      {locations.map((loc, index) => (
        <group key={loc.name} position={loc.position}>
          {/* Glowing marker */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#22C55E" transparent opacity={0.9} />
          </mesh>
          {/* Pulse ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.1, 0.15, 32]} />
            <meshBasicMaterial 
              color="#22C55E" 
              transparent 
              opacity={0.4 + Math.sin(index * 2) * 0.2} 
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Floating ambient particles
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particles = useMemo(() => generateParticles(200, 8), []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={particlesRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

// Connection lines between points
const ConnectionLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const curves = useMemo(() => {
    const connections = [
      { start: [1.2, 0.4, 1.4], end: [-1.5, 0.8, 0.8] },
      { start: [1.0, 0.5, 1.6], end: [-0.2, 1.2, 1.5] },
      { start: [-0.2, 1.2, 1.5], end: [-1.3, 1.1, 0.6] },
    ];

    return connections.map((conn) => {
      const start = new THREE.Vector3(...conn.start as [number, number, number]);
      const end = new THREE.Vector3(...conn.end as [number, number, number]);
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .multiplyScalar(1.3);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      return curve.getPoints(50);
    });
  }, []);

  return (
    <group ref={linesRef}>
      {curves.map((points, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3B82F6" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
};

// Orbiting ring
const OrbitRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
      <torusGeometry args={[2.5, 0.01, 16, 100]} />
      <meshBasicMaterial color="#3B82F6" transparent opacity={0.4} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3B82F6" />
      
      <Globe />
      <LocationMarkers />
      <FloatingParticles />
      <ConnectionLines />
      <OrbitRing />
    </>
  );
};

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
