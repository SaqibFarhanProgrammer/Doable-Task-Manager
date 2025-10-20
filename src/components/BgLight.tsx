import React from "react";

interface LightRaysProps {
  color?: string;
  opacity?: number;
  blur?: number;
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = ({
  color = "#ffffff",
  opacity = 0.15,
  blur = 100,
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 0%, ${color} ${opacity * 100}%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
      }}
    />
  );
};

export default LightRays;
