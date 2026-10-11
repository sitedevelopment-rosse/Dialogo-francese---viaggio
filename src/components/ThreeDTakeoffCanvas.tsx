import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeDTakeoffCanvasProps {
  onAnimationComplete?: () => void;
  isTriggered: boolean;
}

export const ThreeDTakeoffCanvas: React.FC<ThreeDTakeoffCanvasProps> = ({
  onAnimationComplete,
  isTriggered,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isTriggered || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera setup with professional cinematic telephoto lens (FOV 45)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c1322); // Deep twilight sky
    scene.fog = new THREE.FogExp2(0x0c1322, 0.012);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 800);
    camera.position.set(2.2, 1.4, 7.5);

    // 2. High-fidelity WebGL Renderer with Tone Mapping
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Realistic Professional Lighting (Twilight Runway)
    const hemiLight = new THREE.HemisphereLight(0x748ba7, 0x0f172a, 0.8);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xdbeafe, 1.8);
    dirLight.position.set(15, 25, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Subtle runway ground fill light
    const runwayAmbLight = new THREE.PointLight(0x38bdf8, 1.5, 40);
    runwayAmbLight.position.set(0, 0.5, 5);
    scene.add(runwayAmbLight);

    // 4. Realistic Aircraft Construction (Commercial Modern Airliner)
    const aircraft = new THREE.Group();

    // Material definitions (PBR realistic materials)
    const fuselageMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.25,
      roughness: 0.25,
    });

    const navyLiveryMat = new THREE.MeshStandardMaterial({
      color: 0x2b5876,
      metalness: 0.35,
      roughness: 0.3,
    });

    const purpleLiveryMat = new THREE.MeshStandardMaterial({
      color: 0x4e4376,
      metalness: 0.35,
      roughness: 0.3,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.9,
      roughness: 0.05,
      transmission: 0.3,
      thickness: 0.5,
      reflectivity: 0.9,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      metalness: 0.85,
      roughness: 0.15,
    });

    const darkEngineMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.8,
      roughness: 0.3,
    });

    // 4.1 Aerodynamic Fuselage with smooth contour
    const fuselageGeom = new THREE.CylinderGeometry(0.38, 0.34, 5.2, 32);
    fuselageGeom.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeom, fuselageMat);
    aircraft.add(fuselage);

    // Sleek Nose Radome
    const noseGeom = new THREE.ConeGeometry(0.38, 1.4, 32);
    noseGeom.rotateX(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeom, fuselageMat);
    nose.position.z = -3.3;
    aircraft.add(nose);

    // Streamlined Tail Cone
    const tailConeGeom = new THREE.ConeGeometry(0.34, 1.6, 32);
    tailConeGeom.rotateX(Math.PI / 2);
    const tailCone = new THREE.Mesh(tailConeGeom, navyLiveryMat);
    tailCone.position.z = 3.4;
    aircraft.add(tailCone);

    // Cockpit Windshield (Multi-panel faceted airliner glass)
    const cockpitGeom = new THREE.SphereGeometry(0.35, 16, 12, 0, Math.PI);
    cockpitGeom.scale(1, 0.55, 1.4);
    const cockpit = new THREE.Mesh(cockpitGeom, glassMat);
    cockpit.position.set(0, 0.22, -1.9);
    cockpit.rotation.x = -0.15;
    aircraft.add(cockpit);

    // Livery Stripe along Fuselage
    const stripeGeom = new THREE.CylinderGeometry(0.385, 0.345, 4.4, 32, 1, true, -Math.PI / 8, Math.PI / 4);
    stripeGeom.rotateX(Math.PI / 2);
    const stripe = new THREE.Mesh(stripeGeom, navyLiveryMat);
    stripe.position.y = 0.05;
    aircraft.add(stripe);

    // Passenger cabin windows row (illuminated warm dots)
    const windowStripGeom = new THREE.BoxGeometry(0.02, 0.06, 0.08);
    const windowMat = new THREE.MeshBasicMaterial({ color: 0xfef08a }); // warm interior light
    for (let i = -1.5; i <= 1.5; i += 0.28) {
      const leftWin = new THREE.Mesh(windowStripGeom, windowMat);
      leftWin.position.set(-0.39, 0.08, i);
      aircraft.add(leftWin);

      const rightWin = new THREE.Mesh(windowStripGeom, windowMat);
      rightWin.position.set(0.39, 0.08, i);
      aircraft.add(rightWin);
    }

    // 4.2 Main Swept Wings with Airfoil Profile
    const createWing = (isRight: boolean) => {
      const wingGroup = new THREE.Group();
      
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 0);
      wingShape.lineTo(4.4, -1.6);
      wingShape.lineTo(4.2, -2.1);
      wingShape.lineTo(0, -0.9);
      wingShape.closePath();

      const extrudeGeom = new THREE.ExtrudeGeometry(wingShape, {
        depth: 0.04,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.015,
        bevelThickness: 0.015,
      });
      extrudeGeom.rotateX(-Math.PI / 2);

      const wingMesh = new THREE.Mesh(extrudeGeom, fuselageMat);
      wingGroup.add(wingMesh);

      // Leading edge chrome trim
      const edgeGeom = new THREE.CylinderGeometry(0.02, 0.01, 4.6, 8);
      edgeGeom.rotateZ(Math.PI / 2 - 0.35);
      const edge = new THREE.Mesh(edgeGeom, chromeMat);
      edge.position.set(2.2, 0, -0.8);
      wingGroup.add(edge);

      // Winglet at tip
      const wingletGeom = new THREE.BoxGeometry(0.03, 0.45, 0.25);
      const winglet = new THREE.Mesh(wingletGeom, purpleLiveryMat);
      winglet.position.set(4.35, 0.2, -1.85);
      wingGroup.add(winglet);

      // Navigation light at wingtip
      const navLightGeom = new THREE.SphereGeometry(0.05, 8, 8);
      const navLightMat = new THREE.MeshBasicMaterial({
        color: isRight ? 0x22c55e : 0xef4444, // Green starboard, Red port
      });
      const navLight = new THREE.Mesh(navLightGeom, navLightMat);
      navLight.position.set(4.35, 0.22, -1.85);
      wingGroup.add(navLight);

      if (!isRight) {
        wingGroup.scale.x = -1;
      }
      return wingGroup;
    };

    aircraft.add(createWing(true));
    aircraft.add(createWing(false));

    // 4.3 Vertical Tail Fin (Empennage)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0, 1.6);
    finShape.lineTo(0.5, 1.4);
    finShape.lineTo(1.2, 0);
    finShape.closePath();

    const finGeom = new THREE.ExtrudeGeometry(finShape, { depth: 0.05, bevelEnabled: false });
    const fin = new THREE.Mesh(finGeom, purpleLiveryMat);
    fin.rotation.y = Math.PI / 2;
    fin.position.set(0.025, 0.3, 2.3);
    aircraft.add(fin);

    // Horizontal Stabilizers
    const stabShape = new THREE.Shape();
    stabShape.moveTo(0, 0);
    stabShape.lineTo(1.4, -0.5);
    stabShape.lineTo(1.3, -0.75);
    stabShape.lineTo(0, -0.3);
    stabShape.closePath();
    const stabGeom = new THREE.ExtrudeGeometry(stabShape, { depth: 0.03, bevelEnabled: false });
    stabGeom.rotateX(-Math.PI / 2);

    const rightStab = new THREE.Mesh(stabGeom, fuselageMat);
    rightStab.position.set(0.15, 0.25, 2.7);
    aircraft.add(rightStab);

    const leftStab = new THREE.Mesh(stabGeom, fuselageMat);
    leftStab.scale.x = -1;
    leftStab.position.set(-0.15, 0.25, 2.7);
    aircraft.add(leftStab);

    // 4.4 Twin Turbofan Engines under wings
    const createEngine = (xOffset: number) => {
      const engGroup = new THREE.Group();

      // Nacelle Cowling
      const cowlGeom = new THREE.CylinderGeometry(0.24, 0.22, 1.3, 24);
      cowlGeom.rotateX(Math.PI / 2);
      const cowl = new THREE.Mesh(cowlGeom, fuselageMat);
      engGroup.add(cowl);

      // Intake Rim
      const intakeRimGeom = new THREE.TorusGeometry(0.23, 0.025, 16, 24);
      const intakeRim = new THREE.Mesh(intakeRimGeom, chromeMat);
      intakeRim.position.z = -0.65;
      engGroup.add(intakeRim);

      // Dark Fan Core
      const fanGeom = new THREE.CircleGeometry(0.21, 24);
      const fan = new THREE.Mesh(fanGeom, darkEngineMat);
      fan.position.z = -0.62;
      engGroup.add(fan);

      // Titanium Exhaust Nozzle
      const nozGeom = new THREE.ConeGeometry(0.17, 0.4, 16);
      nozGeom.rotateX(-Math.PI / 2);
      const noz = new THREE.Mesh(nozGeom, darkEngineMat);
      noz.position.z = 0.75;
      engGroup.add(noz);

      // Pylon Mount to Wing
      const pylonGeom = new THREE.BoxGeometry(0.04, 0.25, 0.6);
      const pylon = new THREE.Mesh(pylonGeom, fuselageMat);
      pylon.position.set(0, 0.2, 0);
      engGroup.add(pylon);

      engGroup.position.set(xOffset, -0.32, 0.2);
      return engGroup;
    };

    aircraft.add(createEngine(1.4));
    aircraft.add(createEngine(-1.4));

    // Strobe Beacon Light (Red flashing beacon top & bottom)
    const beaconGeom = new THREE.SphereGeometry(0.04, 8, 8);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const topBeacon = new THREE.Mesh(beaconGeom, beaconMat);
    topBeacon.position.set(0, 0.42, 0);
    aircraft.add(topBeacon);

    // Initial position on runway
    aircraft.position.set(0, 0.35, 2);
    scene.add(aircraft);

    // 5. Realistic Runway Ground & Lighting
    // Asphalt surface
    const runwayWidth = 14;
    const runwayLength = 240;
    const runwayGeom = new THREE.PlaneGeometry(runwayWidth, runwayLength);
    const runwayMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.9,
      metalness: 0.1,
    });
    const runway = new THREE.Mesh(runwayGeom, runwayMat);
    runway.rotation.x = -Math.PI / 2;
    runway.position.set(0, 0, -40);
    scene.add(runway);

    // Runway Centerline Markings & Lights
    const centerLineCount = 30;
    const centerLineGeom = new THREE.PlaneGeometry(0.25, 2.5);
    const centerLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < centerLineCount; i++) {
      const line = new THREE.Mesh(centerLineGeom, centerLineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(0, 0.01, -i * 7 + 10);
      scene.add(line);
    }

    // Runway Edge Lights (Dual rows of runway edge lights)
    const edgeLightCount = 40;
    const edgeLightGeom = new THREE.SphereGeometry(0.06, 8, 8);
    const edgeLightMat = new THREE.MeshBasicMaterial({ color: 0xfef08a }); // Warm white/yellow
    for (let i = 0; i < edgeLightCount; i++) {
      const zPos = -i * 5 + 15;
      const leftLight = new THREE.Mesh(edgeLightGeom, edgeLightMat);
      leftLight.position.set(-runwayWidth / 2 + 0.5, 0.08, zPos);
      scene.add(leftLight);

      const rightLight = new THREE.Mesh(edgeLightGeom, edgeLightMat);
      rightLight.position.set(runwayWidth / 2 - 0.5, 0.08, zPos);
      scene.add(rightLight);
    }

    // 6. Realistic Atmospheric Particle Mist / Horizon Stars
    const dustCount = 180;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 60;
      dustPositions[i * 3 + 1] = Math.random() * 25 + 0.5;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
    });
    const dustParticles = new THREE.Points(dustGeom, dustMat);
    scene.add(dustParticles);

    // 7. Realistic Flight Takeoff Animation Sequence
    const startTime = performance.now();
    const duration = 2400; // 2.4 seconds smooth cinematic
    let completed = false;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Strobe flash calculation (Aviation 1.2Hz strobe)
      const strobeOn = Math.sin(now * 0.008) > 0.7;
      beaconMat.color.setHex(strobeOn ? 0xff2222 : 0x440000);

      // Takeoff physics curve:
      // Phase 1 (0 to 0.35): Runway roll with exponential acceleration
      // Phase 2 (0.35 to 0.65): Rotation (pitch up to ~12 degrees) & Main gear liftoff
      // Phase 3 (0.65 to 1.0): Positive rate of climb into the night sky
      const rollEase = Math.pow(progress, 2.2);

      // Forward travel distance
      aircraft.position.z = 2 - rollEase * 75;

      // Realistic Liftoff & Climb
      if (progress < 0.35) {
        // Rolling on ground with tiny vibration
        aircraft.position.y = 0.35 + Math.sin(now * 0.03) * 0.008;
        aircraft.rotation.x = 0;
      } else {
        // Rotation & climb
        const liftoffProgress = (progress - 0.35) / 0.65;
        const climbEase = liftoffProgress * liftoffProgress;
        aircraft.position.y = 0.35 + climbEase * 18;

        // Pitch up realistically to 12 degrees (0.21 rad)
        const targetPitch = Math.min(liftoffProgress * 1.4, 1) * -0.21;
        aircraft.rotation.x = targetPitch;

        // Slight banking turn (roll) as it clears the field
        aircraft.rotation.z = Math.sin(liftoffProgress * Math.PI) * 0.05;
      }

      // Cinematic Camera Follow:
      // Low angle behind and to the right, smoothly panning and tracking up
      camera.position.x = 2.4 + progress * 0.8;
      camera.position.y = 1.3 + Math.pow(progress, 1.8) * 8;
      camera.position.z = 7.5 - rollEase * 45;

      // Look at the aircraft nose
      camera.lookAt(aircraft.position.x, aircraft.position.y + 0.3, aircraft.position.z - 2.5);

      renderer.render(scene, camera);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else if (!completed) {
        completed = true;
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      renderer.dispose();
      fuselageGeom.dispose();
      runwayGeom.dispose();
      dustGeom.dispose();
    };
  }, [isTriggered, onAnimationComplete]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
    />
  );
};
