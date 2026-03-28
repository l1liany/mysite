import { motion } from "motion/react";
import { Lock, Wallet, ShieldAlert, LineChart, ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "Secure Login System",
    description: "A frontend-focused authentication UI with robust validation and security-first principles.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "Lock",
  },
  {
    title: "Personal Finance Tracker",
    description: "Simple web application to monitor expenses and manage budgets with local storage persistence.",
    tech: ["React", "Tailwind", "Local Storage"],
    icon: "Wallet",
  },
  {
    title: "Cyber Awareness Hub",
    description: "Educational platform explaining common cyber threats and digital safety best practices.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "ShieldAlert",
  },
  {
    title: "Math Concept Visualizer",
    description: "Interactive tool for visualizing complex mathematical functions and geometric concepts.",
    tech: ["JavaScript", "D3.js", "SVG"],
    icon: "LineChart",
  },
];

const IconMap: Record<string, any> = {
  Lock,
  Wallet,
  ShieldAlert,
  LineChart,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-brand-accent">Projects</span></h2>
            <p className="text-ink-light max-w-xl">
              Showcasing my journey through frontend creativity and technical problem-solving.
            </p>
          </div>
          <a href="#" className="text-brand-accent font-semibold flex items-center gap-2 hover:underline">
            View all on GitHub <Github size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = IconMap[project.icon];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-brand-soft rounded-3xl border border-slate-200 overflow-hidden hover:border-brand-accent/30 transition-all"
              >
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <div className="flex gap-3">
                      <button className="p-2 bg-white rounded-full text-ink-light hover:text-brand-accent transition-colors">
                        <Github size={20} />
                      </button>
                      <button className="p-2 bg-white rounded-full text-ink-light hover:text-brand-accent transition-colors">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-ink-light mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-brand-accent border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
