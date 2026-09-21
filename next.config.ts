import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only serves qualities listed here (default is [75]).
    // 90 keeps fine UI text legible in the project screenshots.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Hospital Harm is withheld until the case study is finished. The page
      // source lives in app/work/_hospital-harm (private folder, not routed).
      { source: "/work/hospital-harm", destination: "/#work", permanent: false },
    ];
  },
};

export default nextConfig;
