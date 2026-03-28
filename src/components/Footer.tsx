export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-ink-light text-sm">
          © {new Date().getFullYear()} Lilian Wanja. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-sm text-ink-light">
          <span>Designed with</span>
          <span className="text-brand-accent">⚡</span>
          <span>&</span>
          <span className="text-brand-primary">Code</span>
        </div>
      </div>
    </footer>
  );
}
