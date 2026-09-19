export type TripType = {
  id: string;
  label: string;
  // Needs a start and an end date (multi-day trips, round trips)
  range?: boolean;
};

export const CAR_TRIP_TYPES: TripType[] = [
  { id: "12h", label: "12 hours" },
  { id: "24h", label: "24 hours" },
  { id: "interstate", label: "Interstate" },
  { id: "multi-day", label: "Multiple days", range: true },
];

export const JET_TRIP_TYPES: TripType[] = [
  { id: "one-way", label: "One way" },
  { id: "round-trip", label: "Round trip", range: true },
];
