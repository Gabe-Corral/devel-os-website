import Nav from "@/components/nav";

export default function NetworkingDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/docs" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Networking
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          DevelOS uses NetworkManager for wired and wireless networking. Use{" "}
          <code>nmcli</code> from a terminal to connect to Wi-Fi, inspect devices,
          and manage saved connections.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Check Status</h2>
            <pre className="overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>{`nmcli device status
nmcli connection show`}</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Connect To Wi-Fi</h2>
            <p className="text-[#c7c9d3]">List nearby networks:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>nmcli device wifi list</code></pre>
            <p className="mt-4 text-[#c7c9d3]">Connect to a protected network:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>nmcli device wifi connect &quot;SSID&quot; password &quot;password&quot;</code></pre>
            <p className="mt-4 text-[#c7c9d3]">For open networks, omit the password:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>nmcli device wifi connect &quot;SSID&quot;</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Reconnect Later</h2>
            <p className="text-[#c7c9d3]">
              NetworkManager saves successful connections. To reconnect manually:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>nmcli connection up &quot;SSID&quot;</code></pre>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Troubleshooting</h2>
            <p className="text-[#c7c9d3]">Check that NetworkManager is running:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>systemctl status NetworkManager.service</code></pre>
            <p className="mt-4 text-[#c7c9d3]">If Wi-Fi is blocked, inspect rfkill state:</p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-[#1f212b] p-4 text-sm text-[#f8f8f2]"><code>{`rfkill list
rfkill unblock wifi`}</code></pre>
          </section>
        </div>
      </article>
    </main>
  );
}
