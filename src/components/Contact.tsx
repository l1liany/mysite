import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-brand-accent">Connect</span></h2>
            <p className="text-ink-light mb-10 leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent border border-slate-200">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-ink-light uppercase tracking-wider font-bold">Email</p>
                  <p className="text-ink font-medium">lilian.wanja@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent border border-slate-200">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-ink-light uppercase tracking-wider font-bold">Location</p>
                  <p className="text-ink font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { icon: Github, href: "https://github.com/l1liany" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-ink-light hover:text-brand-accent border border-slate-200 shadow-sm transition-all"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ink-light ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-brand-soft border border-slate-200 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ink-light ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-brand-soft border border-slate-200 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-ink-light ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-brand-soft border border-slate-200 rounded-2xl focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:bg-brand-accent transition-all"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
