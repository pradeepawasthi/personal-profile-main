'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles, ShieldCheck, Cloud, TestTube, Users,
  Mail, Phone, Linkedin, Github, ArrowRight, Download,
  MapPin, Send, Copy, Check, GitBranch, Bug, LineChart,
  ServerCog, Wallet, Stethoscope, ChevronRight, Star, Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

import {
  profile, about, skills, experience, certifications, projects,
} from '@/lib/portfolio-data';

const ICONS = {
  Sparkles, ShieldCheck, Cloud, TestTube, Users,
  GitBranch, Bug, LineChart, ServerCog, Wallet, Stethoscope,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: 'easeOut' },
  }),
};

function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'AI Agents' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#050914]/70 border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900 font-bold">PA</span>
          <span className="hidden sm:block">Pradeep Awasthi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-cyan-300 transition">{l.label}</a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 hover:opacity-90 font-medium">
          <a href="#contact">Connect for Demo <ArrowRight className="ml-1 h-4 w-4" /></a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <Badge variant="outline" className="border-cyan-400/40 text-cyan-300 bg-cyan-400/5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse" />
                Available for AI Agent & DevSecOps consulting
              </Badge>
            </motion.div>
            <motion.h1
              initial="hidden" animate="show" variants={fadeUp} custom={1}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="block text-slate-100">I am Pradeep,</span>
              <span className="block text-gradient">Engineering Leader</span>
              <span className="block text-slate-100">& AI Enthusiast.</span>
            </motion.h1>
            <motion.p
              initial="hidden" animate="show" variants={fadeUp} custom={2}
              className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial="hidden" animate="show" variants={fadeUp} custom={3}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 hover:opacity-90 font-medium">
                <a href="#projects">Explore AI Agents <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/15 hover:bg-white/5">
                <a href={`mailto:${profile.email}?subject=Demo request&body=Hi Pradeep, I'd love to see a demo of your AI agents.`}>
                  <Mail className="mr-2 h-4 w-4" /> Book a Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial="hidden" animate="show" variants={fadeUp} custom={4}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl"
            >
              {profile.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="text-2xl font-bold text-cyan-300">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative animate-floaty"
            >
              {/* Animated glow behind */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/30 to-blue-500/20 blur-3xl animate-pulse-glow" />

              {/* Photo card with gradient border */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-500 shadow-2xl">
                <div className="relative rounded-[calc(1.5rem-2px)] overflow-hidden bg-slate-950">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-auto object-cover"
                  />
                  {/* Dark bottom fade for label readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                  {/* Name plate */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="text-xs uppercase tracking-widest text-emerald-300">
                        Available for consulting
                      </div>
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      {profile.name}
                    </div>
                    <div className="text-sm text-slate-300">
                      Senior Engineering Manager · AI Agents Builder
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge chips */}
              <div className="absolute -left-4 top-8 hidden lg:block">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur px-3 py-2 shadow-xl">
                  <div className="text-[10px] uppercase tracking-widest text-cyan-300">14+ yrs</div>
                  <div className="text-xs text-slate-300">Engineering Leadership</div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-24 hidden lg:block">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur px-3 py-2 shadow-xl">
                  <div className="text-[10px] uppercase tracking-widest text-fuchsia-300">6 AI Agents</div>
                  <div className="text-xs text-slate-300">Shipping 24×7</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <div className="text-sm font-medium text-cyan-300 uppercase tracking-widest mb-3">{eyebrow}</div>
          )}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-4 text-slate-400 text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering leader turned AI-agent builder."
      subtitle="14+ years of shipping secure, scalable, cost-optimized platforms — now amplified with agentic AI.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
          <p className="text-slate-200">{about.summary}</p>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <Card className="bg-white/[0.02] border-white/10">
          <CardContent className="p-6">
            <div className="text-sm uppercase tracking-widest text-cyan-300 mb-4">Certifications</div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2 text-slate-300">
                  <Star className="h-4 w-4 mt-1 text-cyan-300 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 text-sm text-slate-400 space-y-2">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {profile.email}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Full-stack engineering leadership."
      subtitle="Everything from AI agents to team scaling — organized so you can hire the exact skill you need.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((cat, idx) => {
          const Icon = ICONS[cat.icon] || Sparkles;
          return (
            <motion.div key={cat.category}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} custom={idx}
            >
              <Card className="card-glow bg-white/[0.02] border-white/10 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div className="font-semibold text-lg">{cat.category}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const grouped = {
    'Test Automation & Quality': projects.filter((p) => p.category === 'Test Automation & Quality'),
    'DevSecOps': projects.filter((p) => p.category === 'DevSecOps'),
  };
  return (
    <Section id="projects" eyebrow="AI Agents" title="Autonomous agents shipping real business value."
      subtitle="Click any agent to see the problem, solution, features, tech stack — and connect for a live demo.">
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-5 w-5 text-fuchsia-400" />
            <h3 className="text-xl font-semibold text-slate-200">{cat}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {items.map((p, i) => {
              const Icon = ICONS[p.icon] || Sparkles;
              return (
                <motion.div key={p.slug}
                  initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp} custom={i}
                >
                  <Link href={`/projects/${p.slug}`}>
                    <Card className="card-glow group bg-white/[0.02] border-white/10 h-full cursor-pointer overflow-hidden">
                      <CardContent className="p-6 relative">
                        <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
                        <div className="flex items-start justify-between mb-4 relative">
                          <div className={`h-11 w-11 rounded-lg bg-gradient-to-br ${p.accent} flex items-center justify-center shadow-lg`}>
                            <Icon className="h-5 w-5 text-slate-950" />
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-cyan-200 transition">{p.name}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.tagline}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.slice(0, 4).map((s) => (
                            <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-slate-400">
                              {s}
                            </span>
                          ))}
                          {p.stack.length > 4 && (
                            <span className="text-[11px] px-2 py-0.5 rounded text-slate-500">+{p.stack.length - 4}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="14+ years across enterprise engineering."
      subtitle="From Goldman Sachs to Apple Card to IBM Watson — building teams and shipping quality at scale.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-fuchsia-400/30 to-transparent" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div key={exp.company + exp.period}
              initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp} custom={i}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'}`}
            >
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-3 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <Card className="bg-white/[0.02] border-white/10">
                  <CardContent className="p-6">
                    <div className="text-xs uppercase tracking-widest text-cyan-300 mb-1">{exp.period}</div>
                    <div className="text-lg font-semibold">{exp.role}</div>
                    <div className="text-slate-400 mb-4">{exp.company}</div>
                    <ul className={`space-y-2 text-sm text-slate-300 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((h, j) => <li key={j}>• {h}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    try {
      // Open the user's email client with a pre-filled draft — no backend / DB required
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(
        `Hi Pradeep,\n\n${form.message}\n\n\u2014 ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      toast.success('Opening your email client... just hit Send!');
      setTimeout(() => setForm({ name: '', email: '', message: '' }), 800);
    } catch {
      toast.error('Something went wrong. Please email directly: ' + profile.email);
    } finally {
      setSending(false);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast.success('Email copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build the next agent together."
      subtitle="Want a walkthrough of any AI agent, or planning a DevSecOps transformation? Drop a message.">
      <div className="grid md:grid-cols-5 gap-6">
        <Card className="md:col-span-2 bg-white/[0.02] border-white/10">
          <CardContent className="p-6 space-y-5">
            <div>
              <div className="text-sm text-slate-400 mb-1">Email</div>
              <button onClick={copyEmail} className="flex items-center gap-2 text-slate-100 hover:text-cyan-300 transition group">
                {profile.email}
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 opacity-60 group-hover:opacity-100" />}
              </button>
            </div>
            <div>
              <div className="text-sm text-slate-400 mb-1">Phone</div>
              <a href={`tel:${profile.phone}`} className="text-slate-100 hover:text-cyan-300">{profile.phone}</a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline" size="sm" className="border-white/15 hover:bg-white/5">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/15 hover:bg-white/5">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10">
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer" download><Download className="mr-2 h-4 w-4" /> Resume</a>
              </Button>
            </div>
            <div className="pt-4 border-t border-white/10">
              <Button asChild className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 hover:opacity-90">
                <a href={`mailto:${profile.email}?subject=Demo request for AI Agent&body=Hi Pradeep, I'd love to see a demo of your AI agents.`}>
                  <Mail className="mr-2 h-4 w-4" /> Email Directly
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 bg-white/[0.02] border-white/10">
          <CardContent className="p-6">
            <form onSubmit={submit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Your Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white/[0.03] border-white/10 focus-visible:ring-cyan-400" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-slate-400 mb-1.5 block">Your Email</label>
                  <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/[0.03] border-white/10 focus-visible:ring-cyan-400" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-1.5 block">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/[0.03] border-white/10 focus-visible:ring-cyan-400 min-h-[140px]"
                  placeholder="Tell me about your project, team, or which agent you want a demo of..." />
              </div>
              <Button type="submit" disabled={sending}
                className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 hover:opacity-90 font-medium">
                {sending ? 'Sending...' : (<><Send className="mr-2 h-4 w-4" /> Send Message</>)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} {profile.name}. Built with Next.js + AI.</div>
        <div className="flex items-center gap-5">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#projects" className="hover:text-cyan-300">AI Agents</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <main className="min-h-screen bg-[#050914] text-slate-100">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
