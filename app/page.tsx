import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <section className="bg-[#6272a4]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)]">
          <div className="text-center lg:pr-10 lg:text-left">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Lightweight, minimal and effective
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#f8f8f2]/90 sm:text-xl">
              DevelOS keeps your developer workflow lean, fast, and focused. No
              silly animations, visual effects, or anything that slows down the
              system.
            </p>
            <a
              href="https://github.com/Gabe-Corral/devel-os/releases/tag/Alpha-0.5.0"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#f8f8f2]/20 bg-[#f8f8f2] px-7 py-3 text-base font-black text-[#282a36] shadow-xl shadow-black/20 hover:bg-[#e6e6dc]"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
              Download
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-3xl border border-[#44475a] bg-[#1f212b] p-3 shadow-2xl shadow-black/30">
            <Image
              src="/images/develos_2.png"
              alt="DevelOS package workflow preview"
              width={1919}
              height={1080}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#44475a] bg-[#343746] p-5">
            <h2 className="mb-4 text-lg font-bold">Keyboard Driven</h2>
            <p className="text-[#c7c9d3]">
              Navigate the OS primarily from the keyboard with fast shortcuts,
              focused window control, and fewer interruptions between tasks.
            </p>
          </article>

          <article className="rounded-2xl border border-[#44475a] bg-[#343746] p-5">
            <h2 className="mb-4 text-lg font-bold">No Visual Effects</h2>
            <p className="text-[#c7c9d3]">
              Skip distractions that slow the system down with a clean interface
              that stays out of the way and keeps behavior predictable.
            </p>
          </article>

          <article className="rounded-2xl border border-[#44475a] bg-[#343746] p-5">
            <h2 className="mb-4 text-lg font-bold">Developer Ready</h2>
            <p className="text-[#c7c9d3]">
              Include useful tools without unnecessary extras, support common
              terminal-first workflows, and provide a reliable base for daily
              work.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-black tracking-tight sm:text-4xl">
            Demo (alpha version)
          </h2>
          <div className="aspect-video overflow-hidden rounded-3xl border border-[#44475a] bg-[#1f212b] p-3 shadow-2xl shadow-black/30">
            <iframe
              className="h-full w-full rounded-2xl"
              src="https://www.youtube.com/embed/WiJxUT46-Mc"
              title="DevelOS demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-[#44475a] px-5 py-12 text-[#f8f8f2]">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="/" className="font-mono text-2xl font-bold">
              Devel<span className="text-[#bd93f9]">OS</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-[#c7c9d3]">
              A lean Arch-based Linux distribution built for developers.
            </p>
          </div>

          <div>
            <h2 className="font-bold">Product</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#c7c9d3]">
              <a
                href="https://github.com/Gabe-Corral/devel-os/releases/tag/Alpha-0.5.0"
                className="hover:text-[#f8f8f2]"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <a href="/docs" className="hover:text-[#f8f8f2]">
                Docs
              </a>
              <a href="/blog" className="hover:text-[#f8f8f2]">
                Blog
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Support</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#c7c9d3]">
              <a href="/docs" className="hover:text-[#f8f8f2]">
                Documentation
              </a>
              <a
                href="https://github.com/Gabe-Corral/devel-os/issues"
                className="hover:text-[#f8f8f2]"
                target="_blank"
                rel="noreferrer"
              >
                Issue Tracker
              </a>
              <a
                href="https://github.com/Gabe-Corral/devel-os"
                className="hover:text-[#f8f8f2]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#6272a4] pt-6 text-sm text-[#c7c9d3]">
          Made by DevelOS · All rights reserved.
        </div>
      </footer>
    </main>
  );
}
