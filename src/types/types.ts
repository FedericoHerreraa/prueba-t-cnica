// Days calculation structure
export interface Calculation {
  hours: number;
  minutes: number;
}

export interface DaysCalculation {
  days: number;
  calculation: Calculation;
}

// Picture URLs for car images
export interface PictureUrl {
  normal: string;
  featured: string;
}

// Car features and specifications
export interface Features {
  doors: string;
  seats: string;
  air_conditioner: boolean;
  transmition: string;
  fuel_type: string;
  large_suitcase: number;
  small_suitcase: number;
  thumb: string;
  fleet_group_id: number;
  fleet_category_id: number;
  fleet_original_category_id: number;
  category: string;
}

// Tags for car features and benefits
export interface Tag {
  id: number;
  name_filter: string;
  visible: boolean;
  name: string;
  icon: string;
  color: string;
  remote_url: string | null;
  placeholder: string;
  priority: number;
}

// Inclusion services and features
export interface Inclusion {
  name: string;
  description: string;
  visible_voucher: boolean;
}

// Payment details structure
export interface PaymentDetails {
  prepaid_amount: string;
  paid_on_destination_amount: string;
}

// Base charge structure
export interface ChargeBase {
  total_amount: string;
  estimated_total_amount: string;
  estimated_total_amount_without_equipment_amount: string;
  pp: PaymentDetails;
  pd: PaymentDetails;
}

// Total charge including discounts
export interface TotalCharge {
  base: ChargeBase;
  discounts: unknown | null;
  total: ChargeBase;
}

// Currency pricing structure
export interface CurrencyPricing {
  total_charge: TotalCharge;
}

// Pricing in different currencies
export interface Pricing {
  USD: CurrencyPricing;
  COP: CurrencyPricing;
}

// Rate data structure
export interface RateData {
  name: string;
  net_rate: boolean;
  rate_type: string;
  inclusions: {
    name: string[];
    description: string[];
  };
  step_one: boolean;
}

// Individual rate with all details
export interface Rate {
  rate_data: RateData;
  inclusions_meta: Record<string, Inclusion>;
  discount_numbers: unknown | null;
  pricing: Pricing;
  tags: Tag[];
}

// All rates for a car
export interface Rates {
  [rateCode: string]: Rate;
}

// Main car interface
export interface Car {
  brand: number;
  name: string;
  name_details: string;
  code: string;
  vehicle_group: string;
  air_conditioner: boolean;
  transmission_type: string;
  vehicle_type: string;
  vehicle_class: string;
  fuel_type: string | null;
  drive_type: string | null;
  door_count: string | null;
  picture_url: PictureUrl;
  stars: number;
  features: Features;
  tags: Tag[];
  rates: Rates;
}

// Cars grouped by brand
export interface CarsByBrand {
  [brandName: string]: Car[];
}

// Root structure of the JSON
export interface CarsData {
  cars: CarsByBrand;
  days_calculation: DaysCalculation;
}

export type PriceSort = 'none' | 'highest' | 'lowest'

export type VehicleStore = {
  vehicles: Car[]
  vehiclesToQuote: Car[]
  showFeaturedFirst: boolean
  priceSort: PriceSort
  filters: Filters
  fetchVehicles: (limit: number) => Promise<void>
  setFilter: (key: string, value: string) => void
  setPriceRange: (range: [number, number]) => void
  setShowFeaturedFirst: (show: boolean) => void
  setPriceSort: (sort: PriceSort) => void
  addVehicleToQuote: (vehicle: Car) => void
  removeVehicleFromQuote: (vehicle: Car) => void
  getSelectedVehicleForQuote: () => Car | null
}


export type Filters = {
  brand: string[]
  category: string[]
  luggage: number[]
  seats: number[]
  priceRange: [number, number]
}