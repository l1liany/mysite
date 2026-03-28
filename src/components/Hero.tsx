import { motion } from "motion/react";
import { ArrowRight, Shield, Code } from "lucide-react";
import mypic from "./public/KANGEL ^_^.jpg"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pink-soft">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] bg-pink-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-[30%] h-[30%] bg-pink-rose/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-pink-blush text-pink-rose text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Shield size={14} />
            Cybersecurity Enthusiast
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Lilian Wanja</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ink-light mb-8 max-w-lg leading-relaxed">
            Computer Science & Mathematics Student. I build secure, beautiful, and intuitive web experiences with a focus on frontend excellence and digital safety.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pink-accent text-white rounded-2xl font-semibold flex items-center gap-2 shadow-lg shadow-pink-accent/20 hover:bg-pink-rose transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-pink-accent border border-pink-blush rounded-2xl font-semibold hover:bg-pink-soft transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl bg-gradient-to-br from-pink-blush to-white border border-white shadow-2xl flex items-center justify-center overflow-hidden">
             <Code size={120} className="text-pink-rose/20 absolute -bottom-10 -right-10 rotate-12" />
             <Shield size={100} className="text-pink-rose/10 absolute -top-10 -left-10 -rotate-12" />
             
             <div className="text-center p-8">
                <div className="w-32 h-32 bg-pink-rose/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                   <img src={mypic}></img>
                </div>
                <div className="space-y-2">
                   <div className="h-2 w-48 bg-pink-blush rounded-full mx-auto" />
                   <div className="h-2 w-32 bg-pink-blush/60 rounded-full mx-auto" />
                </div>
             </div>
          </div>
          
          {/* Floating tech badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 p-4 glass rounded-2xl shadow-xl z-20"
          >
            <span className="text-2xl">⚛️</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl shadow-xl z-20"
          >
            <span className="text-2xl">🔐</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
