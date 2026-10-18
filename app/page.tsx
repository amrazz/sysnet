import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { JobSteps } from "@/components/job-steps";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { ServiceLink } from "@/components/service-link";
import { SurveyForm } from "@/components/survey-form";
import { contact, services, supplyRows } from "@/lib/content";

const safety = [
  {
    number: "01",
    title: "Fire alarm",
    copy: "Detection and notification, from the detector to the panel.",
  },
  {
    number: "02",
    title: "Intrusion alarm",
    copy: "Door and perimeter sensors, placed where a person actually enters.",
  },
  {
    number: "03",
    title: "Fire and safety systems",
    copy: "Extinguishers, signage, and the gear that has to be checked on a schedule.",
  },
];

const workplaces = [
  {
    id: "access" as const,
    title: "Biometric and access control",
    copy: "Readers, locks, and a record of who came through.",
    width: "lg:col-span-5",
  },
  {
    id: "smart-office" as const,
    title: "Smart office installation",
    copy: "Rooms that start the meeting without a scavenger hunt for cables.",
    width: "lg:col-span-3",
  },
  {
    id: "projects" as const,
    title: "Home and office projects",
    copy: "Homes and offices planned before the ceiling is closed.",
    width: "lg:col-span-2",
  },
];

const audiences = [
  {
    title: "Office",
    copy: "A floor that adds staff without adding blind corners.",
    tone: "bg-paper",
  },
  {
    title: "Home",
    copy: "A gate, a door, and a recording you can actually open.",
    tone: "bg-bone",
  },
  {
    title: "Site and retail",
    copy: "A shopfront or a fit-out that needs coverage before the opening.",
    tone: "bg-paper",
  },
];

export default function Home() {
  return (
    <div id="top">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-signal focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">
        <section className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="flex flex-col justify-center px-5 py-10 md:px-10 lg:py-16 lg:pr-12 lg:pl-[max(2.5rem,calc((100vw-70rem)/2))]">
            <p className="text-[13px] tracking-[0.08em] text-muted uppercase">Low-current systems</p>
            <h1 className="mt-4 max-w-[11em] text-[2.5rem] leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[3.15rem]">
              The building should know who belongs in it.
            </h1>
            <p className="mt-6 max-w-[38ch] font-serif text-lg leading-[1.55] text-muted">
              Sysnet Technology surveys the site, then supplies and installs the cameras, alarms,
              access control, and cabling as one job.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#survey"
                className="inline-flex bg-signal px-5 py-3 text-[15px] text-ink active:translate-y-px"
              >
                Book a site survey
              </a>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 text-[15px] underline decoration-line underline-offset-[6px] hover:decoration-ink"
              >
                See the twelve systems
                <ArrowRight aria-hidden strokeWidth={1.5} className="size-4" />
              </a>
            </div>
          </div>
          <Photo
            src="/images/hero-camera.jpg"
            alt="Dome camera fixed to a concrete soffit, lit by late daylight from a side window."
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="h-[32dvh] min-h-48 lg:h-auto lg:min-h-full"
          />
        </section>

        <section aria-label="What Sysnet covers" className="border-y border-line">
          <ul className="inset-page grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Cameras and intercoms",
              "Alarms and life safety",
              "Access and smart office",
              "Cabling, supply, and maintenance",
            ].map((item) => (
              <li
                key={item}
                className="border-line py-5 text-[15px] sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0 lg:py-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section id="systems" className="pt-16 md:pt-20 lg:pt-28">
          <Reveal>
            <div className="inset-page">
              <h2 className="max-w-[16em] text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
                Twelve services. One contractor from the first camera to the last cable.
              </h2>
            </div>
            <div className="inset-page mt-12 grid items-stretch gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
              <Photo
                src="/images/entry-station.jpg"
                alt="Entry station mounted beside a glass door, its screen dark."
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="min-h-72 aspect-[4/3] lg:aspect-auto lg:min-h-full"
              />
              <div className="grid content-center gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
                <article>
                  <h3 className="text-2xl leading-tight">CCTV cameras</h3>
                  <p className="mt-3 max-w-[36ch] font-serif text-lg leading-[1.55] text-muted">
                    Fixed and PTZ cameras, recording, and a layout matched to the doors you
                    actually use.
                  </p>
                </article>
                <article className="border-t border-line pt-8 sm:border-t-0 sm:pt-0 lg:border-t lg:pt-10">
                  <h3 className="text-2xl leading-tight">Intercom system</h3>
                  <p className="mt-3 max-w-[36ch] font-serif text-lg leading-[1.55] text-muted">
                    Audio and video at the gate, the lobby, and the rooms that should not be
                    buzzed from the street.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16 bg-ink text-bone lg:mt-24">
            <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="py-14 pr-5 pl-[max(1.25rem,calc((100vw-70rem)/2))] md:py-20 md:pr-10 lg:py-28 lg:pr-16">
                <ol>
                  {safety.map((item) => (
                    <li
                      key={item.number}
                      className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 border-t border-line-ink py-7 first:border-t-0"
                    >
                      <span className="pt-1 text-4xl leading-none text-oxide">{item.number}</span>
                      <div>
                        <h3 className="text-2xl leading-tight">{item.title}</h3>
                        <p className="mt-2 max-w-[36ch] font-serif text-lg leading-[1.55] text-faint">
                          {item.copy}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <Photo
                src="/images/alarm-panel.jpg"
                alt="Closed alarm panel in a riser cupboard, indicator lamps unlit."
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="min-h-80 lg:min-h-full"
              />
            </div>
          </Reveal>

          <Reveal className="inset-page mt-16 lg:mt-24">
            <div className="grid gap-px bg-line lg:grid-cols-10">
              {workplaces.map((item) => (
                <article key={item.id} className={`bg-bone p-6 md:p-8 ${item.width}`}>
                  <h3 className="text-2xl leading-tight">{item.title}</h3>
                  <p className="mt-3 font-serif text-lg leading-[1.55] text-muted">{item.copy}</p>
                  <ServiceLink service={item.id}>Include this in the survey</ServiceLink>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="inset-page mt-16 pb-16 md:pb-20 lg:mt-24 lg:pb-28">
            <table className="w-full border-t-2 border-ink text-left">
              <caption className="sr-only">Supply, installation, and maintenance</caption>
              <thead>
                <tr className="text-[13px] tracking-[0.08em] uppercase">
                  <th scope="col" className="py-4 pr-6 font-normal">
                    System
                  </th>
                  <th scope="col" className="py-4 font-normal">
                    What we do
                  </th>
                </tr>
              </thead>
              <tbody>
                {supplyRows.map((row) => (
                  <tr key={row.system} className="align-top">
                    <th scope="row" className="w-[38%] py-6 pr-6 text-xl font-medium">
                      {row.system}
                    </th>
                    <td className="py-6 font-serif text-lg leading-[1.55] text-muted">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        <section id="job" className="border-t border-line">
          <Reveal className="inset-page py-16 md:py-20 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <h2 className="max-w-[14em] text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
                From the first visit to the maintenance visit.
              </h2>
              <JobSteps />
            </div>
          </Reveal>
        </section>

        <section id="audience">
          <h2 className="sr-only">Who it is for</h2>
          {audiences.map((item) => (
            <div key={item.title} className={`border-t border-line ${item.tone}`}>
              <div className="inset-page grid gap-3 py-10 md:grid-cols-[12rem_minmax(0,1fr)] md:items-baseline md:py-12">
                <h3 className="text-lg">{item.title}</h3>
                <p className="max-w-[28ch] font-serif text-3xl leading-tight md:text-4xl">{item.copy}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="border-t border-line">
          <Reveal className="inset-page py-16 md:py-20 lg:py-28">
            <h2 className="max-w-[14em] text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              The kind of job, shown plainly.
            </h2>
            <p className="mt-4 max-w-[36ch] font-serif text-lg leading-[1.55] text-muted">
              Sample scopes, not a client list.
            </p>
            <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
              <figure className="lg:col-span-7">
                <Photo
                  src="/images/meeting-room.jpg"
                  alt="Empty meeting room with a ceiling camera and a small speaker."
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="aspect-[4/3]"
                />
                <figcaption className="mt-3 text-[15px]">
                  Meeting rooms, cabling, and a small rack
                </figcaption>
              </figure>
              <figure className="lg:col-span-4 lg:col-start-9">
                <Photo
                  src="/images/lobby-door.jpg"
                  alt="Lobby door with a reader on the handle and a dome camera above the frame."
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="aspect-[3/4]"
                />
                <figcaption className="mt-3 text-[15px]">Lobby cameras and a door reader</figcaption>
              </figure>
              <figure className="lg:col-span-7">
                <Photo
                  src="/images/warehouse-aisle.jpg"
                  alt="Warehouse aisle with a camera at the far end."
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="aspect-[16/7]"
                />
                <figcaption className="mt-3 text-[15px]">
                  Warehouse aisles and an intrusion loop
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </section>

        <section id="survey" className="border-t border-line">
          <Reveal className="inset-page py-16 md:py-20 lg:py-28">
            <h2 className="max-w-[14em] text-4xl leading-[1.08] tracking-[-0.03em] md:text-5xl">
              Tell us the building. We&apos;ll tell you what it needs.
            </h2>
            <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <div>
                <p className="max-w-[34ch] font-serif text-xl leading-[1.55]">
                  Send the site type, the systems you already know you need, and a phone number. We
                  reply with a survey time, not a brochure.
                </p>
                <address className="mt-8 text-[15px] leading-7 not-italic">
                  <p>{contact.address}</p>
                  <p>
                    <a href={contact.phoneHref} className="underline decoration-line underline-offset-4">
                      {contact.phone}
                    </a>
                  </p>
                  <p>
                    <a href={contact.emailHref} className="underline decoration-line underline-offset-4">
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={contact.websiteHref}
                      className="underline decoration-line underline-offset-4"
                    >
                      {contact.website}
                    </a>
                  </p>
                </address>
              </div>
              <SurveyForm />
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="bg-ink text-bone">
        <div className="inset-page grid gap-10 py-12 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16">
          <Image
            src="/brand/mark.png"
            alt="Sysnet Technology"
            width={174}
            height={162}
            className="h-14 w-auto"
          />
          <div>
            <ul className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#systems" className="text-[15px] text-faint hover:text-bone">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-8 text-[15px] leading-7 text-faint not-italic">
              <p>{contact.address}</p>
              <p>
                <a href={contact.phoneHref} className="hover:text-bone">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailHref} className="hover:text-bone">
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.websiteHref} className="hover:text-bone">
                  {contact.website}
                </a>
              </p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
}
