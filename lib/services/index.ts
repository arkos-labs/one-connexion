/**
 * lib/services/index.ts
 * Source unique des prestations. L'ordre de SERVICES fait l'ordre d'affichage
 * sur la homepage, sur l'index et dans le sitemap.
 */
import type { Service } from "./types";
import { plisConfidentiels } from "./plis-confidentiels";

export type {
  Service,
  ServiceStat,
  ServiceStep,
  ServiceUseCase,
  FaqItem,
} from "./types";

export const SERVICES: Service[] = [plisConfidentiels];

export const SERVICE_SLUGS: string[] = SERVICES.map((service) => service.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
