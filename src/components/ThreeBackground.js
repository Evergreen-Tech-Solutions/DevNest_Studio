// src/components/ThreeBackground.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "@mui/material";

function ThreeBackground() {
  const mountRef = useRef(null);
  const theme = useTheme(); // 🔹 read current MUI theme (dark / light)

  useEffect(() => {
    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Starfield
    const starCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50; // scatter in space
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // 🔹 pick star color based on MUI theme
    const starColor =
      theme.palette.mode === "dark"
        ? theme.palette.secondary.main || 0xffffff 
        : theme.palette.divider || 0x000000;

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(starColor),
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);
  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // background layer
      }}
    />
  );
}

export default ThreeBackground;
