import { mockFlights } from '../data/mockDatabase';
import type { FlightInfo } from '../types/flight';

export const getMockFlightInfo = (pnr: string): FlightInfo | null => {
  const normalizedPnr = pnr.toUpperCase();
  return mockFlights[normalizedPnr] || null;
};