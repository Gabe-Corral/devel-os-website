import Nav from "@/components/nav";

export default function BuildDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/docs" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Building DevelOS
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          This guide covers building the DevelOS live ISO and boot-testing it in
          QEMU.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Requirements</h2>
            <p className="text-[#c7c9d3]">
              Build from an Arch Linux or Arch-derived host with <code>podman</code>,
              {" "}<code>base-devel</code>, <code>pacman-contrib</code>, <code>qemu</code>{" "}
              or <code>qemu-full</code>, and OVMF firmware for UEFI install testing.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>sudo pacman -S --needed base-devel pacman-contrib podman qemu-full edk2-ovmf</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              Arch-derived hosts are supported through the containerized build
              path. Local DevelOS packages and external live-only packages are
              built inside an Arch container so host distribution packages do not
              leak into the ISO.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Build The ISO</h2>
            <p className="text-[#c7c9d3]">From the repository root:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>make iso</code></pre>
            <p className="mt-4 text-[#c7c9d3]">The build script does the following:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li>Copies <code>archiso/packages.live.x86_64</code> to <code>archiso/packages.x86_64</code> for <code>mkarchiso</code>.</li>
              <li>Builds local DevelOS packages from <code>packages/</code> and <code>install/</code>.</li>
              <li>Builds external live-only <code>calamares</code> and <code>ckbcomp</code> packages from AUR PKGBUILDs inside the Arch container.</li>
              <li>Creates a local pacman repo under <code>archiso/airootfs/opt/develos/repo</code>.</li>
              <li>Builds the ISO inside a Podman Arch container.</li>
              <li>Writes the ISO to <code>output/</code>.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Package-Only Build</h2>
            <p className="text-[#c7c9d3]">
              To rebuild local package artifacts without building a full ISO:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>make packages</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              Use this after changing files under <code>packages/</code> or source
              trees under <code>install/</code>.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Local Repo Build</h2>
            <p className="text-[#c7c9d3]">
              To recreate the local pacman repo from already-built package artifacts:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>make repo</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Live Boot Test</h2>
            <p className="text-[#c7c9d3]">
              After building an ISO, boot the live environment with:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>make qemu-live ISO=output/&lt;iso-name&gt;.iso</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              If <code>ISO</code> is omitted, the newest ISO under <code>output/</code>
              is used. This only tests whether the ISO boots. It does not test
              installation.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Full Install Test</h2>
            <p className="text-[#c7c9d3]">
              To boot the ISO, install to a virtual disk, and then boot that
              installed disk:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>./scripts/run-qemu-install.sh output/&lt;iso-name&gt;.iso vm/develos.qcow2</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              The helper uses UEFI/OVMF and resets the VM firmware vars for each
              run so old boot entries do not pollute install testing.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Useful Files</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>Makefile</code>: primary build entry point for ISO, package, repo, and QEMU live targets.</li>
              <li><code>scripts/build-iso.sh</code>: ISO build orchestration.</li>
              <li><code>scripts/build-packages.sh</code>: local package build pipeline.</li>
              <li><code>scripts/build-repo.sh</code>: local pacman repo creation.</li>
              <li><code>scripts/common.sh</code>: shared shell helpers.</li>
              <li><code>archiso/packages.live.x86_64</code>: packages included in the live ISO.</li>
              <li><code>archiso/packages.installed.x86_64</code>: packages installed onto target systems.</li>
              <li><code>packages/</code>: DevelOS PKGBUILDs and package-owned files.</li>
              <li><code>install/</code>: vendored suckless source trees used by package builds.</li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
