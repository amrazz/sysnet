"use client";

import { useEffect, useId, useState } from "react";
import { SERVICE_EVENT, services, siteTypes, type ServiceId } from "@/lib/content";

type Field = "name" | "phone" | "siteType" | "city";

const fieldCopy: Record<Field, string> = {
  name: "Enter the name we should ask for.",
  phone: "Enter a phone number.",
  siteType: "Choose the kind of site.",
  city: "Enter the city of the building.",
};

export function SurveyForm() {
  const baseId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [siteType, setSiteType] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [selected, setSelected] = useState<ServiceId[]>([]);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onPick = (event: Event) => {
      const id = (event as CustomEvent<ServiceId>).detail;
      if (!services.some((service) => service.id === id)) return;
      setSelected((current) => (current.includes(id) ? current : [...current, id]));
      setSubmitted(false);
    };
    window.addEventListener(SERVICE_EVENT, onPick);
    return () => window.removeEventListener(SERVICE_EVENT, onPick);
  }, []);

  function toggle(id: ServiceId) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    if (!name.trim()) next.name = fieldCopy.name;
    if (!phone.trim()) next.phone = fieldCopy.phone;
    else if (phone.replace(/\D/g, "").length < 7) {
      next.phone = "That number looks short. Check it.";
    }
    if (!siteType) next.siteType = fieldCopy.siteType;
    if (!city.trim()) next.city = fieldCopy.city;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = (Object.keys(next) as Field[])[0];
      document.getElementById(`${baseId}-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="border-t-2 border-ink pt-8">
        <p className="font-serif text-2xl leading-snug">Received. We will call to set the survey.</p>
        <button
          type="button"
          className="mt-8 bg-signal px-5 py-3 text-[15px] text-ink active:translate-y-px"
          onClick={() => setSubmitted(false)}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border-t-2 border-ink">
      <div className="grid gap-6 pt-8 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          label="Name"
          error={errors.name}
          className="sm:col-span-2"
        >
          <input
            id={`${baseId}-name`}
            name="name"
            autoComplete="name"
            value={name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            onChange={(event) => setName(event.target.value)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>
        <Field id={`${baseId}-phone`} label="Phone" error={errors.phone}>
          <input
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${baseId}-phone-error` : undefined}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>
        <Field id={`${baseId}-city`} label="City of the building" error={errors.city}>
          <input
            id={`${baseId}-city`}
            name="city"
            autoComplete="address-level2"
            value={city}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? `${baseId}-city-error` : undefined}
            onChange={(event) => setCity(event.target.value)}
            className={inputClass(Boolean(errors.city))}
          />
        </Field>
        <Field
          id={`${baseId}-siteType`}
          label="Site type"
          error={errors.siteType}
          className="sm:col-span-2"
        >
          <select
            id={`${baseId}-siteType`}
            name="siteType"
            value={siteType}
            aria-invalid={Boolean(errors.siteType)}
            aria-describedby={errors.siteType ? `${baseId}-siteType-error` : undefined}
            onChange={(event) => setSiteType(event.target.value)}
            className={inputClass(Boolean(errors.siteType))}
          >
            <option value="">Select a site</option>
            {siteTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-10">
        <legend className="text-[13px] tracking-[0.08em] uppercase">Systems to include</legend>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <label className="flex items-start gap-3 text-base leading-snug">
                <input
                  type="checkbox"
                  name="systems"
                  value={service.id}
                  checked={selected.includes(service.id)}
                  onChange={() => toggle(service.id)}
                  className="mt-1 size-4 accent-ink"
                />
                {service.name}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <Field id={`${baseId}-note`} label="What is already on the walls?" className="mt-10">
        <textarea
          id={`${baseId}-note`}
          name="note"
          rows={4}
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className={inputClass(false)}
        />
        <p className="text-sm text-muted">Cameras, old cable, a panel, or nothing yet.</p>
      </Field>

      <button
        type="submit"
        className="mt-8 bg-signal px-5 py-3 text-[15px] text-ink active:translate-y-px"
      >
        Send the site details
      </button>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `w-full border bg-bone px-3 py-3 text-base text-ink ${invalid ? "border-oxide" : "border-ink"}`;
}

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] tracking-[0.08em] uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
