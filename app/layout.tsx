import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MONNAVI — Tecnología que hace que el trabajo avance",
  description: "MONNAVI diseña software, IA, automatización, datos y sistemas conectados para empresas que necesitan operar mejor.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

