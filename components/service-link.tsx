"use client";

import { ArrowRight } from "lucide-react";
import { SERVICE_EVENT, type ServiceId } from "@/lib/content";

export function ServiceLink({ service, children }: { service: ServiceId; children: string }) {
  return (
    <a
      href="#survey"
      className="mt-8 inline-flex items-center gap-2 text-[15px] text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink"
      onClick={() => {
        window.dispatchEvent(new CustomEvent(SERVICE_EVENT, { detail: service }));
      }}
    >
      {children}
      <ArrowRight aria-hidden strokeWidth={1.5} className="size-4" />
    </a>
  );
}
