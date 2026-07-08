import Nav from "@/components/nav";

export default function TestingDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/docs" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Testing
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          DevelOS includes local smoke tests for validating ISO boot behavior before
          doing deeper install testing.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Live ISO Smoke Test</h2>
            <p className="text-[#c7c9d3]">
              Use <code>test-live</code> to verify that a built ISO can boot to the
              live system login prompt in QEMU.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>sudo make test-live ISO=output/&lt;iso-name&gt;.iso</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              If <code>ISO</code> is omitted, the newest ISO under <code>output/</code>
              is used.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>sudo make test-live</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">What It Checks</h2>
            <p className="text-[#c7c9d3]">
              The test boots the ISO with QEMU, directly loads the ISO kernel and
              initramfs, and waits for the serial login prompt:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>develos login:</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              This is a boot smoke test only. It does not test graphical login,
              <code> dwm</code>, Calamares, or installation to disk.
            </p>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Requirements</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>qemu-system-x86_64</code></li>
              <li><code>blkid</code></li>
              <li><code>mount</code> and <code>umount</code></li>
              <li>Permission to loop-mount the ISO, which is why <code>sudo</code> is required.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Logs</h2>
            <p className="text-[#c7c9d3]">Logs are written under:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>output/test/</code></pre>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>output/test/live.log</code>: serial boot output from the guest.</li>
              <li><code>output/test/live-qemu.log</code>: QEMU stderr.</li>
              <li><code>output/test/iso-mount</code>: temporary mount point for reading the ISO kernel and initramfs.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Troubleshooting</h2>
            <p className="text-[#c7c9d3]">If the test fails, inspect:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>{`less output/test/live.log
less output/test/live-qemu.log`}</code></pre>
            <p className="mt-4 text-[#c7c9d3]">
              If a previous failed run leaves the ISO mount busy, the script attempts
              a lazy unmount automatically on the next run.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
