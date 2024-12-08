import { useEffect, useState } from "react";

const ModernBackground = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smooth mouse tracking for gradient movement
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden no-scroll ">
      {/* Base gradient layer */}
      <div
        className="fixed inset-0 transition-opacity duration-[2000ms] "
        style={{
          background: `
              radial-gradient(circle at ${mousePosition.x}% ${
            mousePosition.y
          }%, 
                rgba(29, 78, 216, 0.15) 0%,
                rgba(17, 24, 39, 0.9) 45%,
                rgb(0, 0, 0) 100%
              ),
              radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, 
                rgba(124, 58, 237, 0.1) 0%,
                rgba(17, 24, 39, 0.9) 45%,
                rgb(0, 0, 0) 100%
              )
            `,
          backgroundBlendMode: "normal",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Animated overlay gradients */}
      <div
        className="fixed inset-0 opacity-50"
        style={{
          background: `
              radial-gradient(
                60% 60% at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(56, 189, 248, 0.1) 0%,
                rgba(17, 24, 39, 0) 100%
              ),
              radial-gradient(
                40% 40% at ${100 - mousePosition.x}% ${100 - mousePosition.y}%,
                rgba(139, 92, 246, 0.1) 0%,
                rgba(17, 24, 39, 0) 100%
              )
            `,
          backgroundBlendMode: "screen",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />

      {/* Main content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default ModernBackground;
