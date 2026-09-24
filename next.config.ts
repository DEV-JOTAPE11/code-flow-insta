import type { NextConfig } from "next";

const securityHeaders = [
  // Força o navegador a sempre usar HTTPS neste domínio e nos subdomínios (www).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Converte automaticamente qualquer recurso http:// em https:// (evita "conteúdo misto").
  { key: "Content-Security-Policy", value: "upgrade-insecure-requests" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
