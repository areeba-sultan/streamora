import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
          background: "#000",
          color: "#fff",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}