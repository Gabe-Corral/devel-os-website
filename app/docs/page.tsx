import Nav from "@/components/nav";

const docs = [
  {
    title: "Installation",
    href: "/docs/installation",
    body: "Download the latest image, write it to a USB drive, and boot.",
  },
  {
    title: "Build Guide",
    href: "/docs/build",
    body: "Build packages, build the ISO, and test with QEMU.",
  },
  {
    title: "Suckless Patches",
    href: "/docs/suckless-patches",
    body: "Details and information about Suckless patches and modifications.",
  },
  {
    title: "Calamares Notes",
    href: "/docs/calamares",
    body: "Details about the graphical installer integration.",
  },
];

export default function Docs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#8be9fd]">
            Docs
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            DevelOS documentation
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
            Starter documentation for installing, navigating, and working inside
            DevelOS. These sections will be expanded as the project grows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="rounded-2xl border border-[#44475a] bg-[#343746] p-5"
            >
              <h2 className="mb-4 text-lg font-bold">{doc.title}</h2>
              <p className="text-[#c7c9d3]">{doc.body}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
