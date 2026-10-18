export const SERVICE_EVENT = "sysnet:service";

export const contact = {
  address: "Malaz, Riyadh, Saudi Arabia",
  phone: "+966 53 298 0149",
  phoneHref: "tel:+966532980149",
  email: "sales@sysnet-ksa.com",
  emailHref: "mailto:sales@sysnet-ksa.com",
  website: "www.sysnet-ksa.com",
  websiteHref: "https://www.sysnet-ksa.com",
};

export const services = [
  { id: "cctv", name: "CCTV cameras" },
  { id: "intercom", name: "Intercom system" },
  { id: "cabling", name: "Network cabling" },
  { id: "computers", name: "Computers and accessories" },
  { id: "access", name: "Biometric and access control" },
  { id: "fire-alarm", name: "Fire alarm" },
  { id: "intrusion", name: "Intrusion alarm system" },
  { id: "fire-safety", name: "Fire and safety systems" },
  { id: "projects", name: "Home and office projects" },
  { id: "smart-office", name: "Smart office installation" },
  { id: "sales", name: "Product sales" },
  { id: "maintenance", name: "Installation and maintenance" },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const siteTypes = [
  { value: "home", label: "Home" },
  { value: "office", label: "Office" },
  { value: "retail", label: "Retail" },
  { value: "warehouse", label: "Warehouse" },
  { value: "other", label: "Other" },
] as const;

export const jobSteps = [
  "Survey the rooms and the risers.",
  "Mark camera, reader, and detector positions on the plan.",
  "Install, label, and test.",
  "Hand over the drawings and the logins.",
  "Come back on the maintenance schedule.",
] as const;

export const supplyRows = [
  {
    system: "Network cabling",
    detail: "Structured cabling and testing.",
  },
  {
    system: "Computers and accessories",
    detail: "Machines and the peripherals a site actually needs.",
  },
  {
    system: "Product sales",
    detail: "Equipment supplied for a defined bill of quantities.",
  },
  {
    system: "Installation and maintenance",
    detail: "Installation, handover, and a maintenance visit that is on the calendar.",
  },
] as const;
