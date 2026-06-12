import Nav from "@/components/nav";

export default function InstallationDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/docs" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Installing DevelOS
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          DevelOS can be installed from the live ISO in two ways: the Calamares
          graphical installer or the CLI installer through <code>develos-install</code>.
          Use the graphical installer first for normal installs.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Prepare Install Media</h2>
            <p className="text-[#c7c9d3]">
              Build or download a DevelOS ISO, then write it to a USB drive with
              your preferred tool. Examples include <code>dd</code>, <code>cp</code>,
              {" "}<code>gnome-disks</code>, or another image writer. Double-check the
              target device before writing because this will overwrite it.
            </p>
            <p className="mt-4 text-[#c7c9d3]">
              Boot the target machine from the USB drive.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Graphical Install</h2>
            <p className="text-[#c7c9d3]">
              From the live <code>dwm</code> session, launch dmenu with:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>Mod-p</code></pre>
            <p className="mt-4 text-[#c7c9d3]">Search for and run:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>develos-install-gui</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              That script starts the Calamares graphical installer with <code>pkexec</code>.
              You can also launch it from a terminal with <code>develos-install-gui</code>
              or run Calamares directly:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>pkexec /usr/bin/calamares</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              Follow the prompts to choose language, location, keyboard settings,
              target disk, partitioning method, user account, and final install
              summary.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">CLI Install</h2>
            <p className="text-[#c7c9d3]">
              If Calamares is unavailable or you want the simpler scripted path,
              run:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>sudo develos-install</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              The CLI installer asks for the target disk, hostname, username,
              timezone, and final confirmation. It partitions the disk, installs
              the base system, configures DevelOS defaults, installs GRUB, and
              asks you to set root and user passwords.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">After Install</h2>
            <p className="text-[#c7c9d3]">
              Reboot into the installed system. GRUB should boot DevelOS, Ly
              should start on <code>tty1</code>, the configured user should be able
              to log in, and the <code>dwm</code> session should launch from Ly.
            </p>
            <p className="mt-4 text-[#c7c9d3]">If Ly does not start, check:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>{`systemctl status ly@tty1.service
systemctl is-enabled ly@tty1.service`}</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              If the system boots to a GRUB shell, check whether the EFI partition
              contains the fallback loader:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>ls /boot/efi/EFI/BOOT/BOOTX64.EFI</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">VM Install Testing</h2>
            <p className="text-[#c7c9d3]">For a full QEMU install test:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>./scripts/run-qemu-install.sh output/&lt;iso-name&gt;.iso vm/develos.qcow2</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              This boots the installer ISO first. After you finish the install and
              shut down or reboot the guest, the script boots the installed disk.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
