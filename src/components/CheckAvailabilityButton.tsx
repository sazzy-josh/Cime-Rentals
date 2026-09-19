"use client";

import { useState } from "react";
import AvailabilityModal from "@/components/AvailabilityModal";
import type { TripType } from "@/data/tripTypes";

export default function CheckAvailabilityButton({
  name,
  tripTypes,
  className,
  children = "Check availability",
}: {
  name: string;
  tripTypes?: TripType[];
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && (
        <AvailabilityModal
          vehicleName={name}
          tripTypes={tripTypes}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
