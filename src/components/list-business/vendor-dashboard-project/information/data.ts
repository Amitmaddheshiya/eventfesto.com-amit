// data.ts

export interface Package {
  value: string;
  label: string;
}

export interface Service {
  value: string;
  label: string;
}

export interface CancellationPolicy {
  value: string;
  label: string;
}

export interface AdditionalData {
  smallGatherings: string;
  parking: string;
  bookingAmount: string;
  usp: string;
  bookingAdvanceWeeks: string;
  userCancellationPolicy: string;
  cancellationPolicyDetails: string;
  rentalCost: string;
  venueType: string;
  selectedVenues: string[];
  vegMenuPrice: string;
  nonVegMenuPrice: string;
  filterVenue: string;
  roomsAvailable: string;
  basicRoomPrice: string;
  cat: string;
  decor: string;
  alcohol: string;
  decorPrice: string;
  djPolicy: string;
  selectedServices: string[];
}

export const packages: Package[] = [
  { value: "1", label: "There is sufficient parking available" },
  { value: "2", label: "Parking is available near the venue" },
  { value: "3", label: "No parking available" },
];

export const cancellationPolicies: CancellationPolicy[] = [
  { value: "partialRefund", label: "Partial Refund Offered" },
  { value: "noRefund", label: "No Refund Offered" },
  {
    value: "noRefundAdjustment",
    label: "No Refund Offered However Date Adjustment Can Be Done",
  },
  { value: "fullRefund", label: "Full Refund Offered" },
];

export const venueTypes: Package[] = [
  {
    value: "indoorBanquetven",
    label: "Farmhouse with Indoor Banquet capability",
  },
  { value: "outdoorAreaven", label: "Farmhouse with only outdoor area" },
  { value: "hotelBanquetsLawn", label: "Hotel with indoor banquets & lawn" },
];

export const venues: Package[] = [
  {
    value: "indoorBanquet",
    label: "Venue1 is Wheel chair friendly",
  },
  { value: "outdoorArea", label: "Venue2 is Wheel chair friendly" },
  { value: "hotelBanquetsLawn", label: "Venue3 is Wheel chair friendly" },
];

export const filter: Package[] = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "poolside", label: "Poolside" },
  { value: "terrace", label: "Terrace" },
];

export const catPolicy: Package[] = [
  {
    value: "cat1",
    label: "Inhouse cat1, Outside vendors not permitted",
  },
  {
    value: "cat2",
    label: "Inhouse cat2, Outside vendors not permitted",
  },
  {
    value: "cat3",
    label: "Inhouse cat3, Outside vendors not permitted",
  },
  {
    value: "cat4",
    label: "Inhouse cat4, Outside vendors not permitted",
  },
];

export const decorPolicy: Package[] = [
  {
    value: "decor1",
    label: "Inhouse decoration1, Outside vendors not permitted",
  },
  {
    value: "decor2",
    label: "Inhouse caterdecorationin2, Outside vendors not permitted",
  },
  {
    value: "decor3",
    label: "Inhouse decoration3, Outside vendors not permitted",
  },
  {
    value: "decor4",
    label: "Inhouse decoration4, Outside vendors not permitted",
  },
];

export const alcoholPolicy: Package[] = [
  {
    value: "alco1",
    label: "Inhouse alcor1, Outside vendors not permitted",
  },
  {
    value: "alco2",
    label: "Inhouse alcor2, Outside vendors not permitted",
  },
  {
    value: "alco3",
    label: "Inhouse alcor3, Outside vendors not permitted",
  },
  {
    value: "alco4",
    label: "Inhouse alcor4, Outside vendors not permitted",
  },
];

export const services: Service[] = [
  { value: "candidPhotography", label: "Candid Photography" },
  { value: "weddingFilms", label: "Wedding Films" },
  { value: "traditionalPhotography", label: "Traditional Photography" },
  { value: "preWeddingShoots", label: "Pre-Wedding Shoots" },
  { value: "albums", label: "Albums" },
];
