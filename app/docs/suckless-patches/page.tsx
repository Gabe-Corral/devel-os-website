import Nav from "@/components/nav";

export default function SucklessPatchesDocs() {
  return (
    <main className="flex min-h-screen flex-col text-[#f8f8f2]">
      <Nav />

      <article className="mx-auto w-full max-w-4xl px-5 py-20 sm:py-24">
        <a href="/docs" className="text-sm font-bold text-[#8be9fd] hover:underline">
          Back to docs
        </a>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Suckless Package Patches
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7c9d3]">
          DevelOS vendors customized <code>dwm</code> and <code>dmenu</code> sources in{" "}
          <code>install/</code>. Package builds do not apply standalone patch files;
          the patches and configuration changes are already integrated into the
          source trees before package tarballs are generated.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">dwm</h2>
            <p className="text-[#c7c9d3]">
              Package source: <code>install/dwm</code>. Upstream base: <code>dwm</code>
              6.8.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-bold">Applied Patches</h3>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>awesomebar</code>: adds a taskbar-style window list, hidden windows, clickable titles, hidden-client navigation, and show/hide helpers.</li>
              <li><code>fullgaps</code>: adds configurable gaps between tiled clients and outer monitor edges.</li>
            </ul>
            <h3 className="mt-6 mb-3 text-lg font-bold">Configuration Changes</h3>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li>Font changed to <code>JetBrainsMono Nerd Font:size=11</code>.</li>
              <li>Colors changed to a Dracula-style palette.</li>
              <li>Added <code>SchemeHid</code> for hidden-client taskbar entries.</li>
              <li>Terminal changed from <code>st</code> to <code>alacritty</code>.</li>
              <li><code>Mod-j</code> and <code>Mod-k</code> focus visible clients only.</li>
              <li><code>Mod-Shift-j</code> and <code>Mod-Shift-k</code> include hidden clients.</li>
              <li><code>Mod-s</code> shows the selected hidden client and <code>Mod-Shift-s</code> shows all hidden clients on the current tag.</li>
              <li>Tiled windows use <code>5px</code> full gaps, controlled with <code>Mod-minus</code>, <code>Mod-equal</code>, and <code>Mod-Shift-equal</code>.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">dmenu</h2>
            <p className="text-[#c7c9d3]">
              Package source: <code>install/dmenu</code>. Upstream base:
              {" "}<code>dmenu</code> 5.4.
            </p>
            <h3 className="mt-6 mb-3 text-lg font-bold">Applied Patches</h3>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>fuzzymatch</code>: enables fuzzy matching by default and adds <code>-F</code> to disable it.</li>
              <li><code>center</code>: adds centered menu support with centered and minimum-width configuration.</li>
              <li><code>border</code>: adds configurable border width and <code>-bw</code> support.</li>
              <li><code>mouse-support</code>: adds mouse selection, paste, exit, and scroll navigation.</li>
            </ul>
            <h3 className="mt-6 mb-3 text-lg font-bold">Configuration Changes</h3>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li>Font changed to <code>JetBrainsMono Nerd Font:size=11</code>.</li>
              <li>Colors changed to a Dracula-style palette.</li>
              <li>Fuzzy matching and centered mode are enabled by default.</li>
              <li>Minimum centered width is <code>500</code>.</li>
              <li>Default vertical list length is <code>10</code> lines.</li>
              <li>Default border width is <code>1</code>.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#44475a] bg-[#343746] p-6">
            <h2 className="mb-4 text-2xl font-bold">Relevant Source Locations</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#c7c9d3]">
              <li><code>install/dwm/dwm.c</code></li>
              <li><code>install/dwm/config.def.h</code></li>
              <li><code>install/dmenu/dmenu.c</code></li>
              <li><code>install/dmenu/config.def.h</code></li>
              <li><code>install/dmenu/config.mk</code></li>
              <li><code>install/dmenu/dmenu.1</code></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
