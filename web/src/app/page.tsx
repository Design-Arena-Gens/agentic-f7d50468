const scenes = [
  {
    id: "scene-1",
    timeRange: "0 – 5 sec",
    title: "Scene 1 · Morning Support",
    visual:
      "Soft morning light fills a cozy living room. An elderly parent attempts to stand. A warm, professional Eldertex nurse steps in, offering steady hands and a reassuring smile.",
    voiceover:
      "“Kabhi kabhi, bas ek caring haath hi sabse bada support hota hai.”",
    mood: "Emotional · Hopeful",
  },
  {
    id: "scene-2",
    timeRange: "6 – 15 sec",
    title: "Scene 2 · Care Montage",
    visual:
      "Quick, elegant cuts: nurse checks BP, physiotherapist guides gentle stretches, attendant serves nutritious breakfast, technician arranges medical equipment beside the bed.",
    voiceover:
      "“Eldertex Healthcare — Nursing care, Physiotherapy, Attendant service aur Medical Equipment… sab kuch, aapke ghar par.”",
    mood: "Assured · Professional",
  },
  {
    id: "scene-3",
    timeRange: "16 – 25 sec",
    title: "Scene 3 · Gratitude",
    visual:
      "The elderly parent now relaxed and smiling, their hand held by the caregiver. Eldertex logo animates in; contact number and website fade in beside them.",
    voiceover:
      "“Eldertex Healthcare – expert care, ghar ke pyaar ke saath.”",
    mood: "Uplifting · Comforting",
  },
] as const;

const contactDetails = {
  phone: "+91 98765 43210",
  website: "www.eldertexhealthcare.com",
  email: "care@eldertexhealthcare.com",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-10 shadow-2xl">
          <div className="absolute inset-y-0 -left-24 hidden w-96 rounded-full bg-sky-400/40 blur-3xl md:block" />
          <div className="absolute -top-10 right-0 h-60 w-60 rounded-full bg-slate-200/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-slate-200/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-200/80">
                Video Script Blueprint
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                “Ghar Jaisa Care” · Eldertex Healthcare Pvt. Ltd.
              </h1>
              <p className="mt-4 text-lg text-slate-200/80 sm:text-xl">
                25-second brand film capturing the warmth, expertise, and
                reassurance of in-home elder care. Crafted for emotional impact
                with a calm piano and gentle strings bed.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm uppercase tracking-widest text-white/80">
              Duration · <span className="text-3xl font-semibold">00:25</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-200/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
              Audio: Soft emotional piano · gentle strings
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
              Tone: Compassionate, Trustworthy, Home-like
            </span>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {scenes.map((scene, index) => (
              <article
                key={scene.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/[0.04] to-transparent p-8 transition hover:border-sky-400/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-sky-500/[0.05] to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-4">
                  <header className="flex flex-wrap items-center justify-between gap-4 text-sm uppercase tracking-[0.25em] text-slate-200/60">
                    <span>{scene.timeRange}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Scene {index + 1}
                    </span>
                  </header>

                  <h2 className="text-2xl font-semibold text-white">
                    {scene.title}
                  </h2>

                  <div className="grid gap-6 rounded-2xl border border-white/5 bg-black/30 p-6 sm:grid-cols-2 sm:gap-8">
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
                        Visual Direction
                      </p>
                      <p className="text-base text-slate-200/90">
                        {scene.visual}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
                        Voiceover
                      </p>
                      <p className="text-base italic text-slate-100">
                        {scene.voiceover}
                      </p>
                      <p className="text-sm text-slate-300/80">
                        Mood cue: {scene.mood}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Story Flow
              </p>
              <ol className="mt-3 space-y-3 text-sm text-slate-100/90">
                <li>Warm welcome into the home</li>
                <li>Highlight seamless at-home services</li>
                <li>End on trust, care, and brand recall</li>
              </ol>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Contact Lockup
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-100/80">
                <p className="font-semibold text-white">Eldertex Healthcare</p>
                <p>Phone · {contactDetails.phone}</p>
                <p>Website · {contactDetails.website}</p>
                <p>Email · {contactDetails.email}</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">
                Visual Notes
              </p>
              <ul className="space-y-2 text-sm text-slate-100/80">
                <li>Natural morning light, soft focus transitions</li>
                <li>Handheld camera with gentle push-ins</li>
                <li>Warm beige, teal, and pastel blue palette</li>
                <li>Lower-third contact animation synced with final beat</li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-r from-sky-500/20 via-transparent to-sky-500/10 p-8 text-slate-100">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-100/60">
                Final Frame · Call To Action
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                “Expert care, ghar ke pyaar ke saath.”
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-200/80">
                Display Eldertex logo centrally with a gentle glow, then slide in
                contact details from the right. Hold for 3 seconds to cement
                brand recall.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-black/30 px-6 py-4 text-right text-sm text-slate-100/80">
              <p className="uppercase tracking-[0.3em] text-slate-200/70">
                Music Beat
              </p>
              <p className="mt-2 text-base">
                Piano arpeggios + soft strings resolve on final chord
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
