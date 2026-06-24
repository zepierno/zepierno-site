export default function Footer() {
  return (
    <footer className="border-t border-graphite-line">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-bone-dim font-mono-data">
        <span>Zé Pierno — Barcelona</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
