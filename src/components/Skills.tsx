import { motion } from "motion/react";
import { Code2, ShieldCheck, Wrench, Binary } from "lucide-react";
import { SkillCategory } from "../types";

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Code2",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Cybersecurity",
    icon: "ShieldCheck",
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "OWASP Top 10"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git & GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    title: "Other",
    icon: "Binary",
    skills: ["Algorithms", "Data Structures", "Mathematics", "Problem Solving"],
  },
];

const IconMap: Record<string, any> = {
  Code2,
  ShieldCheck,
  Wrench,
  Binary,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-brand-accent">Toolkit</span></h2>
          <p className="text-ink-light max-w-2xl mx-auto">
            A blend of creative frontend development and analytical cybersecurity expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = IconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center text-brand-accent mx-auto mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-ink-light text-sm flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-brand-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
