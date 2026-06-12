import Nav from "@/components/nav";

export default function AlphaReleasePost() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/blog" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to blog
        </a>

        <p className="mt-8 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#8be9fd]">
          2026-06-10
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          DevelOS 0.5.0 Alpha
        </h1>

        <div className="mt-12 space-y-10 rounded-2xl border border-[#44475a] bg-[#343746] p-6 text-[#c7c9d3]">
          <section>
            <p>
              This is the first pre-release alpha for DevelOS 0.5.0. This serves
              as an early preview of the project as it evolves into a more
              complete Arch-based distribution.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#f8f8f2]">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Calamares graphical installer support while keeping the CLI installer as a fallback.</li>
              <li>Moved core DevelOS components into local packages, including <code>dwm</code>, <code>dmenu</code>, <code>dwmblocks-async</code>, installer files, live config, and system conf.</li>
              <li>Added a local DevelOS pacman repository used during ISO builds and installs.</li>
              <li>Split live ISO packages from installed-system packages so the final install stays cleaner.</li>
              <li>Added DevelOS branding and release metadata, including <code>os-release</code>.</li>
              <li>Added Dunst notification support with DevelOS configuration and theming.</li>
              <li>Updated desktop configuration, wallpapers, audio support, and Neovim defaults.</li>
              <li><code>dwm</code> includes awesomebar, full gaps, Dracula-style theming, hidden window controls, and runtime gap controls.</li>
              <li><code>dmenu</code> includes fuzzy matching, centered mode, borders, mouse support, and matching theme updates.</li>
              <li>Improved build and test scripts for package builds, ISO builds, local repo generation, and QEMU boot/install testing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#f8f8f2]">Installation</h2>
            <p>The live ISO supports two install paths:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Graphical install with Calamares via <code>develos-install-gui</code>.</li>
              <li>CLI install with <code>sudo develos-install</code>.</li>
            </ul>
            <p className="mt-4">
              Please note that the CLI installer is still a work in progress and
              currently does not work properly. The Calamares path is the
              preferred path for normal testing, but it is still maturing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#f8f8f2]">Alpha Notes</h2>
            <p>
              This is an early alpha release intended for testing and feedback.
              Expect rough edges, especially around hardware compatibility,
              installer behavior, and real-machine testing. Use a VM or
              non-critical machine unless you are comfortable debugging an
              Arch-based install.
            </p>
            <p className="mt-4">Known areas still in progress:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>More Calamares testing on real hardware and QEMU.</li>
              <li>WiFi tooling and configuration.</li>
              <li>Final branding polish.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#f8f8f2]">
              Download and Verification
            </h2>
            <p>
              The ISO is split into multiple parts because the full image is
              larger than GitHub's release asset limit.
            </p>
            <p className="mt-4">Download all ISO parts and <code>SHA256SUMS</code>:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li><code>develos-0.5.0-alpha.1-x86_64.iso.part-aa</code></li>
              <li><code>develos-0.5.0-alpha.1-x86_64.iso.part-ab</code></li>
              <li><code>SHA256SUMS</code></li>
            </ul>
            <p className="mt-4">Recombine the ISO parts:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>{`cat develos-0.5.0-alpha.1-x86_64.iso.part-* > develos-0.5.0-alpha.1-x86_64.iso
# Verify the downloaded files:
sha256sum -c SHA256SUMS`}</code></pre>
            <p className="mt-4">
              After verification, write
              <code>develos-0.5.0-alpha.1-x86_64.iso</code> to a USB drive using
              your preferred image writer.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
