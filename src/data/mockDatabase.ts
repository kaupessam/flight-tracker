import type { FlightInfo } from '../types/flight';
import { airlines } from './airlines';
import { airports } from './airports';
import { weatherConditions, visibilityConditions } from './weatherConditions';

const mockFlights: Record<string, FlightInfo> = {
  'MS1234': {
    pnr: 'MS1234',
    status: 'ON_TIME',
    departureTime: '10:30 AM',
    arrivalTime: '14:45 PM',
    flight: {
      number: 'IB204',
      airline: airlines.VJ,
      from: airports.BOM,
      to: airports.BKK,
    },
    passenger: {
      name: 'Mohammed Safwan',
      seatNumber: '12A',
      gate: 'A11',
      terminal: 'T2',
      baggage: ['IB204-B789', 'IB204-B790'],
    },
    weather: {
      temperature: 28,
      condition: 'Wet',
      windSpeed: 15,
      visibility: 'Moderate',
    },
  },
  'MT5678': {
    pnr: 'MT5678',
    status: 'ON_TIME',
    departureTime: '08:15 AM',
    arrivalTime: '09:30 AM',
    flight: {
      number: 'KT234',
      airline: airlines.KA,
      from: airports.IXE,
      to: airports.BLR,
    },
    passenger: {
      name: 'Mithuna',
      seatNumber: '18F',
      gate: 'B2',
      terminal: 'T1',
      baggage: ['KT234-B456'],
    },
    weather: {
      temperature: 24,
      condition: 'Rainy',
      windSpeed: 20,
      visibility: 'Poor',
    },
  },
  'SH9012': {
    pnr: 'SH9012',
    status: 'DELAYED',
    departureTime: '11:45 AM',
    arrivalTime: '13:30 PM',
    delay: 30,
    flight: {
      number: '6E767',
      airline: airlines.IN,
      from: airports.IXE,
      to: airports.HYD,
    },
    passenger: {
      name: 'Shruthi',
      seatNumber: '24C',
      gate: 'C12',
      terminal: 'T1',
      baggage: ['6E767-B234'],
    },
    weather: {
      temperature: 22,
      condition: 'Storm',
      windSpeed: 45,
      visibility: 'Very Poor',
    },
  },
  'ES3456': {
    pnr: 'ES3456',
    status: 'ON_TIME',
    departureTime: '15:20 PM',
    arrivalTime: '16:45 PM',
    flight: {
      number: 'IX814',
      airline: airlines.IX,
      from: airports.PNQ,
      to: airports.IXE,
    },
    passenger: {
      name: 'Essam',
      seatNumber: '8D',
      gate: 'A12',
      terminal: 'T2',
      baggage: ['IX814-B567', 'IX814-B568'],
    },
    weather: {
      temperature: 26,
      condition: 'Cloudy',
      windSpeed: 12,
      visibility: 'Good',
    },
  },
};

export { mockFlights };