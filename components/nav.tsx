const navItems = [
  {
    label: "Download",
    href: "https://github.com/Gabe-Corral/devel-os/releases/tag/Alpha-0.5.0",
  },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
  { label: "GitHub", href: "https://github.com/Gabe-Corral/devel-os" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#bd93f9] bg-[#282a36]/95 px-5 py-4 text-[#f8f8f2] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="font-mono text-xl font-bold">
          Devel<span className="text-[#bd93f9]">OS</span>
        </a>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-bold text-[#f8f8f2] hover:underline hover:decoration-[#f8f8f2] hover:underline-offset-4"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
