import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'meditrack — Connected Health Platform', description: 'Connected Health Platform' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang=\"en\"><body>{children}</body></html>;
}
