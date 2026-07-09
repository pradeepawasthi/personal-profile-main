'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Mail, ChevronRight, Sparkles, GitBranch, Bug, LineChart,
  ServerCog, Wallet, Stethoscope, Zap, CheckCircle2, Cpu, Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProjectBySlug, projects, profile } from '@/lib/portfolio-data';

const ICONS = { Sparkles, GitBranch, Bug, LineChart, ServerCog, Wallet, Stethoscope };

const ProjectPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const p = getProjectBySlug(slug);
    setProject(p);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050914] flex items-center justify-center text-slate-100">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-3">Agent not found</div>
          <Button asChild variant="outline" className="border-white/15">
            <Link href="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Icon = ICONS[project.icon] || Sparkles;
  const other = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050914] text-slate-100">
      <div className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#050914]/70 border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 font-bold">PA</span>
            <span className="hidden sm:block">Pradeep Awasthi</span>
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <Link href="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> All Agents</Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className={`absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`} />
        <div className="container relative mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="outline" className="border-cyan-400/40 text-cyan-300 bg-cyan-400/5 mb-5">
              <Zap className="h-3 w-3 mr-1" /> {project.category}
            </Badge>
            <div className="flex items-start gap-5">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center shadow-2xl shrink-0`}>
                <Icon className="h-8 w-8 text-slate-950" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.name}</h1>
                <p className="mt-3 text-lg text-slate-400 max-w-3xl">{project.tagline}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="outline" className="border-white/15 hover:bg-white/5">
                <Link href="/#projects">See All Agents <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution / Impact */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-5">
          <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-widest text-rose-300 mb-2">The Problem</div>
              <p className="text-slate-300 leading-relaxed">{project.problem}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-widest text-cyan-300 mb-2">The Agent's Solution</div>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/10">
            <CardContent className="p-6">
              <div className="text-xs uppercase tracking-widest text-emerald-300 mb-2">Business Impact</div>
              <ul className="space-y-2 text-slate-300">
                {project.impact.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-emerald-400 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features + Stack */}
      <section className="py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Rocket className="h-5 w-5 text-fuchsia-400" />
              <h2 className="text-2xl font-semibold">Key Features</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <Card key={f} className="bg-white/[0.02] border-white/10">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center shrink-0`}>
                      <Sparkles className="h-4 w-4 text-slate-950" />
                    </div>
                    <div className="text-slate-200 text-sm leading-snug pt-1">{f}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Cpu className="h-5 w-5 text-cyan-400" />
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
            </div>
            <Card className="bg-white/[0.02] border-white/10">
              <CardContent className="p-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other agents */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">Other AI Agents</h2>
            <Link href="/#projects" className="text-sm text-cyan-300 hover:text-cyan-200">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {other.map((p) => {
              const I = ICONS[p.icon] || Sparkles;
              return (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <Card className="card-glow bg-white/[0.02] border-white/10 h-full">
                    <CardContent className="p-5">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${p.accent} flex items-center justify-center mb-3`}>
                        <I className="h-5 w-5 text-slate-950" />
                      </div>
                      <div className="font-semibold mb-1">{p.name}</div>
                      <div className="text-sm text-slate-400 line-clamp-2">{p.tagline}</div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All AI agents built & maintained in-house.
        </div>
      </footer>
    </main>
  );
};

export default ProjectPage;
