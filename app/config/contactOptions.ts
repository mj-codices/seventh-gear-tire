// Define shared data interfaces
export interface OptionItem {
  id: string;
  title: string;
}

export interface VehicleOption {
  value: string;
  label: string;
}

export interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

// Step 1 Options
export const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "onsite_service",
    title: "Onsite Tire Service",
    desc: "On-location tire repair, replacement, and mounting.",
    tag: "Mobile Dispatch",
  },
  {
    id: "curation_sourcing",
    title: "Commercial Tire Sales & Sourcing",
    desc: "Order bulk commercial tires or request quotes on specific drive, steer, and trailer tread specs.",
    tag: "Bulk & Direct Sales",
  },
];

// Step 2 Options
export const ONSITE_OPTIONS: OptionItem[] = [
  { id: "onsite_repair", title: "Tire Repair" },
  { id: "tire_replacement", title: "Tire Replacement" },
  { id: "wheel_swap", title: "Mounted Wheel Rotation" },
  { id: "fleet_inspection", title: "Fleet Tire Inspection" },
];

export const VEHICLE_TYPES: VehicleOption[] = [
  { value: "", label: "Pick one" },
  { value: "hotshot_dually", label: "Hot Shot Rig / Dually" },
  { value: "box_truck", label: "Box Truck / Commercial Flatbed" },
  { value: "delivery_van", label: "Commercial Service Van" },
  { value: "trailer_gooseneck", label: "Commercial Trailer / Gooseneck / Car Hauler" },
  { value: "other_medium", label: "Other Light / Medium Commercial Equipment" },
];

// Step 3 Options
export const TIRE_TYPE_OPTIONS: OptionItem[] = [
  { id: "steer", title: "Steer / Front Axle" },
  { id: "drive", title: "Drive / Rear Dually" },
  { id: "trailer", title: "Trailer / Gooseneck" },
  { id: "all_around", title: "Multiple / Whole Rig" },
];