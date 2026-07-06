import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: 'Pradeep Awasthi — Senior Engineering Manager | DevSecOps & AI Agents',
  description:
    'Portfolio of Pradeep Awasthi — Senior Engineering Manager with 14+ years driving DevSecOps transformation, cloud modernization and AI-agent development.',
  keywords: [
    'Pradeep Awasthi',
    'Senior Engineering Manager',
    'DevSecOps',
    'AI Agents',
    'Cloud Architect',
    'Test Automation',
    'Portfolio',
  ],
  openGraph: {
    title: 'Pradeep Awasthi — DevSecOps & AI Agents Leader',
    description:
      '14+ years of enterprise engineering leadership, DevSecOps, cloud and AI-driven automation.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-[#050914] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        {children}
        <Toaster theme="dark" richColors position="top-right" />
      </body>
    </html>
  );
}
