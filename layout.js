// app/layout.js
import { Analytics } from "@vercel/analytics/react"; // Note: Use @vercel/analytics/react for App Router

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
