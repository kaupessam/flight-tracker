export interface FlightInfo {
  pnr: string;
  status: 'ON_TIME' | 'DELAYED' | 'CANCELLED' | 'BOARDING' | 'DEPARTED' | 'ARRIVED';
  departureTime: string;
  arrivalTime: string;
  delay?: number;
  weather?: WeatherInfo;
  passenger: PassengerInfo;
  flight: {
    number: string;
    from: string;
    to: string;
    airline: string;
  };
}

export interface WeatherInfo {
  temperature: number;
  condition: string;
  windSpeed: number;
  visibility: string;
}

export interface PassengerInfo {
  name: string;
  seatNumber: string;
  gate: string;
  terminal: string;
  baggage: string[];
}