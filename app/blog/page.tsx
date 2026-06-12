import Nav from "@/components/nav";

const posts = [
  {
    title: "Alpha 0.5.0 Release",
    href: "/blog/alpha-0-5-0-release",
    date: "2026-06-10",
    excerpt: "Details about the pre-release and brief roadmap for the future.",
  },
  {
    title: "Why DevelOS",
    href: "/blog/why-develos",
    date: "2026-06-10",
    excerpt:
      "Inspiration for DevelOS, who it is for, and why you would use it.",
  },
];

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#8be9fd]">
            Blog
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            DevelOS updates and notes
          </h1>
        </div>

        <div className="mt-12 grid gap-4">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="rounded-2xl border border-[#44475a] bg-[#343746] p-6"
            >
              <p className="mb-3 text-sm font-bold text-[#8be9fd]">
                {post.date}
              </p>
              <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
              <p className="max-w-4xl text-[#c7c9d3]">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
