"use client";

import React from "react";

interface AuroraBackgroundProps {
  children: React.ReactNode;
}

export function AuroraBackground({ children }: AuroraBackgroundProps) {
  return (
    <div className="relative h-full w-full bg-black">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(1, 1, 1, 0.9), rgba(1, 1, 1, 0.8)), radial-gradient(farthest-side at 0% 0%, rgba(255, 0, 255, 0.3), transparent), radial-gradient(farthest-side at 100% 0%, rgba(255, 50, 50, 0.3), transparent), linear-gradient(to bottom, rgba(1, 1, 1, 0), rgba(1, 1, 1, 1))",
          backgroundSize: "200% 200%, 100% 100%, 100% 100%, 100% 100%",
          animation: "aurora 60s linear infinite",
        }}
      />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
} 