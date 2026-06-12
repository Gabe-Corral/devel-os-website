import Nav from "@/components/nav";

export default function WhyDevelOSPost() {
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
          Why DevelOS
        </h1>

        <div className="mt-12 space-y-6 rounded-2xl border border-[#44475a] bg-[#343746] p-6 text-lg leading-8 text-[#c7c9d3]">
          <p>
            Arch Linux is great. However, it is a headache to install and
            configure. Even with archinstall. The issue is not necessarily that
            it is difficult to install but that it takes too much time to get a
            usable environment up and running. As a result, I find myself using
            Arch-based distributions, such as Manjaro, but other distributions
            come out of the box with too much. I find myself spending as much
            time uninstalling software and reconfiguring the default
            configurations as it would take to install and configure Arch on its
            own. DevelOS aims to offer a minimal, sane starting point for an
            effective developer workflow. Everything included should be there for
            a clear reason and chosen carefully. The distribution respects the
            user while not asking too much out of them.
          </p>
          <p>
            DevelOS ships by default only what is necessary to be productive and
            start working. There is no bloat and nothing in the way of the user.
            The only thing the user will need to change is highly personalized
            keybindings and configurations for specific software.
          </p>
          <p>
            No animations or visual effects other than color. There are no
            animations for opening, closing, or minimizing windows, switching
            tags, etc. There is no reason to deliberately slow down the user&apos;s
            input by making them wait for an animation to finish.
          </p>
          <p>
            DevelOS is keyboard driven. The user is encouraged to navigate the
            operating system using the keyboard, reducing the need to constantly
            use the mouse to navigate graphical user interfaces.
          </p>
          <p>
            DevelOS provides an easy install process while other distributions
            with a similar philosophy often require the user to essentially build
            the distribution from a terminal to a functional desktop. DevelOS
            provides a starting point that is immediately effective and easy to
            build on.
          </p>
          <p>
            The distribution is certainly not for everyone. It is a distribution
            for developers and advanced users that want a specific environment
            but not the hassle of building a system from the ground up.
            Everything included out of the box should be actively used by the
            user. The user should be able to open htop and know what every
            process is doing.
          </p>
        </div>
      </article>
    </main>
  );
}
