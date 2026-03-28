import { motion } from "motion/react";
import { GraduationCap, Lightbulb, Search } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-brand-soft border border-slate-200 overflow-hidden relative">
               <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 grayscale">
                  💻
               </div>
               <img 
                  src="https://picsum.photos/seed/developer/800/1000" 
                  alt="Lilian Wanja" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 p-6 glass rounded-2xl shadow-xl">
               <p className="text-sm font-medium text-ink italic">
                 "Building the future, one secure line of code at a time."
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About <span className="text-brand-accent">Me</span>
            </h2>
            
            <div className="space-y-6 text-ink-light leading-relaxed">
              <p>
                I am a dedicated <strong>Computer Science & Mathematics</strong> student with a profound interest in the intersection of elegant frontend design and robust cybersecurity. My academic background provides me with a strong logical foundation, which I apply to every technical challenge I encounter.
              </p>
              <p>
                My journey is driven by a relentless curiosity and a passion for continuous learning. Whether it's mastering a new React pattern or exploring the fundamentals of cryptography, I approach my work with calm confidence and a problem-solving mindset.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="p-4 rounded-2xl bg-brand-soft border border-slate-200">
                <GraduationCap className="text-brand-accent mb-3" size={24} />
                <h4 className="font-bold text-sm mb-1">Academic</h4>
                <p className="text-xs text-ink-light">CS & Mathematics</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-soft border border-slate-200">
                <Search className="text-brand-accent mb-3" size={24} />
                <h4 className="font-bold text-sm mb-1">Focus</h4>
                <p className="text-xs text-ink-light">Cybersecurity</p>
              </div>
              <div className="p-4 rounded-2xl bg-brand-soft border border-slate-200">
                <Lightbulb className="text-brand-accent mb-3" size={24} />
                <h4 className="font-bold text-sm mb-1">Goal</h4>
                <p className="text-xs text-ink-light">Secure Frontend</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
