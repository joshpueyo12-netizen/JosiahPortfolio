import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import project1 from "@/assets/project-1.jpeg.asset.json";
import project2 from "@/assets/project-2.jpeg.asset.json";
import project3 from "@/assets/project-3.jpeg.asset.json";
import epjPost from "@/assets/epj-post.jpeg.asset.json";
import thrift1 from "@/assets/thrift-1.jpeg.asset.json";
import thrift2 from "@/assets/thrift-2.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josiah Pueyo — Aspiring Copywriter & AI-Enhanced Content Creator" },
      { name: "description", content: "Portfolio of Josiah Pueyo — beginner copywriter turning ideas into clear, compelling, and conversion-driven words." },
      { property: "og:title", content: "Josiah Pueyo — Aspiring Copywriter" },
      { property: "og:description", content: "Portfolio of Josiah Pueyo — beginner copywriter turning ideas into clear, compelling, and conversion-driven words." },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "Copywriting", level: "Beginner — growing fast" },
  { name: "Content Writing", level: "Comfortable" },
  { name: "Social Media Captions", level: "Hands-on experience" },
  { name: "AI-Assisted Writing", level: "ChatGPT, Claude, Gemini" },
  { name: "Research & Ideation", level: "Curious & thorough" },
  { name: "Basic Marketing", level: "Self-taught" },
  { name: "Technical Writing", level: "From engineering background" },
  { name: "Client Communication", level: "Honest & responsive" },
];

const samples = [
  {
    type: "Product Description",
    title: "Minimalist Ceramic Mug",
    body: "Made for slow mornings. This hand-finished ceramic mug holds 12oz of whatever keeps you human — coffee, matcha, or that third refill you swore you wouldn't have. Weighted just right, glazed to last, and quietly beautiful on any shelf.",
  },
  {
    type: "Social Media Ad",
    title: "Skincare Brand — IG Caption",
    body: "Your skin doesn't need ten steps. It needs the right three. Meet the routine that took us two years to simplify — and thirty seconds to apply. Tap to try it for ₱0 today.",
  },
  {
    type: "Landing Page Headlines",
    title: "SaaS — Project Tool",
    body: "Stop managing tools. Start finishing work. / The fastest way from idea to launched. / Built for small teams that ship.",
  },
  {
    type: "Email Marketing",
    title: "Welcome Email — Online Course",
    body: "Hey — glad you're in. Most people who sign up never open lesson one. You're not most people (you opened this, after all). Here's your first lesson, plus a small dare: finish it before tomorrow. I'll be here when you do.",
  },
  {
    type: "Facebook Shop Caption",
    title: "Thrifted Denim Jacket",
    body: "Pre-loved, still loud. Vintage denim with the kind of fade you can't fake — only one in stock, and it's already someone's favorite. DM 'mine' before it's gone.",
  },
];

const tools = [
  { name: "ChatGPT", note: "Drafting & ideation" },
  { name: "Claude", note: "Long-form structure" },
  { name: "Gemini", note: "Research sweep" },
  { name: "Canva", note: "Quick visuals" },
  { name: "Google Docs", note: "Editing & sharing" },
  { name: "Notion", note: "Briefs & swipe file" },
  { name: "Grammarly", note: "Polish pass" },
  { name: "MS Office", note: "Proposals & reports" },
];

const experience = [
  {
    role: "Independent Online Seller",
    org: "Sanina Collection — Facebook & TikTok Thrift Shop",
    period: "Self-run",
    points: [
      "Built and run my own thrift brand across Facebook and TikTok — captions, hooks, and short-form copy.",
      "Handled customer DMs with clear, persuasive replies.",
      "Tested tone, hooks, and offers — learned what makes people click 'mine.'",
    ],
  },
  {
    role: "OJT — Quality Assurance & Maintenance",
    org: "Industrial Training",
    period: "Internship",
    points: [
      "Prepared and reviewed technical documentation and reports.",
      "Helped script and produce a company safety video.",
      "Translated engineering detail into language non-engineers could act on.",
    ],
  },
  {
    role: "Marketing & Client Acquisition",
    org: "EPJ Construction Services",
    period: "Side role",
    points: [
      "Wrote and posted promotional content on social media for the family construction business.",
      "Personally secured 3 paying clients through online posts — construction and office fit-out projects.",
      "Proved that the right words, posted in the right place, bring in real revenue.",
    ],
  },
  {
    role: "BS Electrical Engineering",
    org: "Pamantasan ng Lungsod ng Valenzuela",
    period: "Ongoing",
    points: [
      "Years of writing proposals, quotations, and technical briefs.",
      "Trained to think in systems — useful for structuring persuasive copy.",
    ],
  },
];

const constructionProjects = [
  { src: project1.url, title: "Office Fit-out", note: "Custom millwork interior — secured via online inquiry." },
  { src: project2.url, title: "Retail Interior", note: "Marble & paneling fit-out — closed through a social post." },
  { src: project3.url, title: "Residential Build", note: "Two-storey new build — client found us online." },
];

const thriftShots = [
  { src: thrift1.url, alt: "Sanina Collection Facebook post — premium thrifted cardigans" },
  { src: thrift2.url, alt: "Curated thrifted apparel — brand drop" },
  { src: epjPost.url, alt: "EPJ Construction promotional post" },
];

function Index() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Josiah <span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-accent transition"
          >
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-up">
            Portfolio · 2026
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] animate-fade-up">
            Josiah Pueyo.
            <br />
            <span className="italic text-muted-foreground">Words that</span>{" "}
            <span className="text-accent italic">work.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground animate-fade-up">
            Aspiring copywriter, creative writer, and AI-enhanced content creator.
            Turning ideas into clear, compelling, and conversion-driven words.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              View my work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-accent hover:text-accent transition"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">The honest intro.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              I'm Josiah — a beginner copywriter with a real love for how words move people. I'm
              not pretending to be a ten-year veteran. I'm something more useful right now:
              <span className="text-accent"> hungry, fast, and easy to work with.</span>
            </p>
            <p>
              My background is in electrical engineering, which means I've spent years writing
              proposals, quotations, and technical documents that had to be clear or someone lost
              money. I've also run a small Facebook thrift shop, where I learned what makes a
              caption stop the scroll.
            </p>
            <p>
              I use AI tools every day — not to replace the craft, but to draft faster, research
              wider, and edit sharper. If you're hiring someone who can learn on Monday and ship by
              Friday, that's the version of copywriter I'm trying to be.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Skills</p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">What I bring to the doc.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Honest about levels. Growing all of them weekly.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
            {skills.map((s) => (
              <div key={s.name} className="bg-background p-6 hover:bg-accent/5 transition">
                <p className="font-serif text-xl">{s.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Samples */}
      <section id="work" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Selected work</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl">Sample copy, real practice.</h2>
            <p className="mt-4 text-muted-foreground">
              Spec pieces written to show range — voice, structure, and the ability to write for the
              click, not just the page.
            </p>
          </div>

          <div className="mt-16 space-y-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
            {samples.map((s, i) => (
              <article
                key={s.title}
                className="bg-background p-8 md:p-10 grid md:grid-cols-12 gap-6 hover:bg-accent/5 transition group"
              >
                <div className="md:col-span-3">
                  <p className="text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {String(samples.length).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-accent">{s.type}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-foreground/85 leading-relaxed text-lg">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Where I've practiced.</h2>

          <div className="mt-14 space-y-12">
            {experience.map((e) => (
              <div key={e.role} className="grid md:grid-cols-12 gap-6 border-t border-border/60 pt-8">
                <div className="md:col-span-4">
                  <p className="font-serif text-2xl">{e.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mt-2">{e.period}</p>
                </div>
                <ul className="md:col-span-8 space-y-3 text-foreground/85">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-accent mt-2">—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Tools</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">My stack, in plain terms.</h2>
          <div className="mt-12 flex flex-wrap gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="px-5 py-3 rounded-full border border-border bg-background hover:border-accent transition"
              >
                <span className="font-medium">{t.name}</span>
                <span className="text-muted-foreground text-sm"> · {t.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] opacity-60">Contact</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05]">
              Have a brief?
              <br />
              <span className="italic text-accent">Let's write it.</span>
            </h2>
            <p className="mt-6 max-w-md opacity-75">
              Open to entry-level roles, internships, and freelance projects. Fast replies, honest
              scope, no jargon.
            </p>
            <div className="mt-10 space-y-2 text-sm">
              <p className="opacity-60">Email</p>
              <a href="mailto:hello@josiahpueyo.com" className="text-lg hover:text-accent transition">
                hello@josiahpueyo.com
              </a>
              <div className="flex gap-5 pt-6 text-sm opacity-75">
                <a href="#" className="hover:text-accent transition">LinkedIn</a>
                <a href="#" className="hover:text-accent transition">Twitter / X</a>
                <a href="#" className="hover:text-accent transition">Instagram</a>
              </div>
            </div>
          </div>

          <form
            className="md:col-span-6 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              window.location.href = `mailto:hello@josiahpueyo.com?subject=Project from ${encodeURIComponent(
                String(data.get("name") ?? ""),
              )}&body=${encodeURIComponent(String(data.get("message") ?? ""))}`;
            }}
          >
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">Name</label>
              <input
                name="name"
                required
                className="mt-2 w-full bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full bg-transparent border-b border-background/30 py-3 focus:border-accent outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Send message →
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-background/60 text-xs">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap justify-between gap-4 border-t border-background/10">
          <p>© 2026 Josiah Pueyo. Written by hand, edited with AI.</p>
          <p>Based in the Philippines · Available worldwide</p>
        </div>
      </footer>
    </div>
  );
}
