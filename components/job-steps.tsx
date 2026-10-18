"use client";

import { useState } from "react";
import { jobSteps } from "@/lib/content";

export function JobSteps() {
  const [active, setActive] = useState(0);

  return (
    <ol className="mt-12 border-l border-line">
      {jobSteps.map((step, index) => {
        const on = index === active;
        return (
          <li key={step}>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              className="relative block w-full py-5 pl-8 text-left"
            >
              <span
                className={`absolute top-7 left-0 size-2 -translate-x-1/2 ${on ? "bg-ink" : "bg-line"}`}
                aria-hidden
              />
              <span className="mb-1 block text-[13px] tracking-[0.08em] text-muted uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  on
                    ? "block max-w-[22ch] text-2xl leading-tight text-ink md:text-[1.75rem]"
                    : "block max-w-[40ch] text-base leading-snug text-muted"
                }
              >
                {step}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
