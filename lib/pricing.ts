const PARIS_LAT = 48.8566;
const PARIS_LON = 2.3522;

export type Zone = "intramuros" | "zone1" | "zone2" | "zone3" | "zone4";

export function getZoneFromPostcode(postcode: string): Zone {
  const dept = postcode.substring(0, 2);
  if (dept === "75") return "intramuros";
  if (["92", "93", "94"].includes(dept)) return "zone1";
  if (["91", "95"].includes(dept)) return "zone2";
  if (["78", "77"].includes(dept)) return "zone3";
  return "zone4";
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function getZoneFromCoords(lat: number, lon: number): Zone {
  const dist = haversineKm(PARIS_LAT, PARIS_LON, lat, lon);
  if (dist <= 7) return "intramuros";
  if (dist <= 15) return "zone1";
  if (dist <= 25) return "zone2";
  if (dist <= 40) return "zone3";
  return "zone4";
}

export function detectZone(postcode: string, lat?: number, lon?: number): Zone {
  const zoneByCode = getZoneFromPostcode(postcode);
  if (lat && lon && ["zone2", "zone3"].includes(zoneByCode)) {
    return getZoneFromCoords(lat, lon);
  }
  return zoneByCode;
}

export function farthestZone(a: Zone, b: Zone): Zone {
  const order: Zone[] = ["intramuros", "zone1", "zone2", "zone3", "zone4"];
  return order.indexOf(a) >= order.indexOf(b) ? a : b;
}

const BASE_BONS: Record<Zone, number> = {
  intramuros: 3.5,
  zone1: 5.0,
  zone2: 7.0,
  zone3: 9.0,
  zone4: 13.0,
};

const STOP_BONS = 2;

export type Delai = "flash" | "standard" | "programme";

export function estimatePrice(
  zone: Zone,
  delai: Delai,
  stopsCount: number,
  isNavette = false,
): number {
  const bonValue = isNavette ? 5.0 : 7.0;
  const stopBonValue = isNavette ? 5.0 : 7.0;

  let base = BASE_BONS[zone] * bonValue;
  const stopsPrice = stopsCount * STOP_BONS * stopBonValue;
  let total = base + stopsPrice;

  if (delai === "flash" && !isNavette) {
    total *= 1.5;
  }

  return Math.round(total * 100) / 100;
}

export const ZONE_LABELS: Record<Zone, string> = {
  intramuros: "Intra-muros (Paris 75)",
  zone1: "Zone 1 (Petite Couronne)",
  zone2: "Zone 2 (Moyenne Couronne)",
  zone3: "Zone 3 (Grande Couronne)",
  zone4: "Zone 4 (Banlieue Lointaine)",
};
