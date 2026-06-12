import Nav from "@/components/nav";

export default function CalamaresDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a
          href="/docs"
          className="text-sm font-bold text-[#8be9fd] hover:underline"
        >
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Calamares Integration
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          Calamares is used for package-based installation. It partitions and
          mounts the target disk, then DevelOS runs <code>pacstrap</code> with
          the same installed-system package manifest used by the CLI installer.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Package Flow</h2>
            <p className="text-[#c7c9d3]">
              Calamares is installed only into the live ISO through{" "}
              <code>archiso/packages.live.x86_64</code>. It should stay out of{" "}
              <code>archiso/packages.installed.x86_64</code> so live-only
              installer tools are not installed onto the final system.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Package Build Hook</h2>
            <p className="text-[#c7c9d3]">
              <code>scripts/build-packages.sh</code> builds all local DevelOS
              packages. For <code>develos-installer</code>, it copies{" "}
              <code>archiso/packages.installed.x86_64</code> into{" "}
              <code>usr/share/develos/packages.installed.x86_64</code> so
              Calamares and the CLI installer share one installed package list.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Main Config Package</h2>
            <p className="text-[#c7c9d3]">
              <code>packages/develos-calamares-config/</code> owns the DevelOS
              Calamares config, helper script, branding, and live-user polkit
              rule. The install hook copies config from{" "}
              <code>/usr/share/develos/calamares/etc/calamares/</code> into{" "}
              <code>/etc/calamares/</code>.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Install Sequence</h2>
            <p className="text-[#c7c9d3]">
              <code>settings.conf</code> defines the flow: partition, mount,
              shellprocess, machineid, fstab, locale, keyboard, localecfg,
              users, displaymanager, networkcfg, hwclock, and umount. There is
              no{" "}
              <code>unpackfs</code> step because DevelOS installs packages
              instead of copying the live ISO squashfs.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Pacstrap Helper</h2>
            <p className="text-[#c7c9d3]">
              <code>/usr/lib/develos/calamares-pacstrap</code> is called by the
              <code>shellprocess</code> module. It reads the installed package
              manifest, runs <code>pacstrap -K</code>, copies the local DevelOS
              repo and pacman config into the target, installs GRUB, and enables{" "}
              <code>NetworkManager.service</code> and{" "}
              <code>ly@tty1.service</code>.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Module Notes</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li>
                <code>bootloader.conf</code> documents GRUB/EFI behavior, though
                GRUB is currently installed by the helper.
              </li>
              <li>
                <code>displaymanager.conf</code> points the installed system at{" "}
                <code>ly</code>.
              </li>
              <li>
                <code>locale.conf</code> sets the default region and timezone
                shown in the UI.
              </li>
              <li>
                <code>partition.conf</code> controls partition UI behavior and
                uses <code>/boot/efi</code> for EFI.
              </li>
              <li>
                <code>users.conf</code> sets default groups, including{" "}
                <code>wheel</code>.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Branding And Polkit</h2>
            <p className="text-[#c7c9d3]">
              Branding files live under the DevelOS Calamares branding directory
              and provide the installer name, colors, icon, logo, and slideshow.
              The polkit rule lets the live user <code>devel</code> run
              Calamares through <code>pkexec</code> without broadening access to
              arbitrary commands.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Testing</h2>
            <p className="text-[#c7c9d3]">
              Phase 1 checks that the UI launches:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]">
              <code>{`./scripts/build-iso.sh
./scripts/run-qemu.sh output/<iso-name>.iso
pkexec /usr/bin/calamares`}</code>
            </pre>
            <p className="mt-4 text-[#c7c9d3]">
              Phase 2 performs a full install test:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]">
              <code>
                ./scripts/run-qemu-install.sh output/&lt;iso-name&gt;.iso
                vm/develos.qcow2
              </code>
            </pre>
          </section>
        </div>
      </article>
    </main>
  );
}
