import React from 'react';
import { Plane, Clock, CloudRain, MapPin } from 'lucide-react';
import type { FlightInfo } from '../types/flight';

interface FlightStatusProps {
  flightInfo: FlightInfo;
}

export function FlightStatus({ flightInfo }: FlightStatusProps) {
  const getStatusColor = (status: FlightInfo['status']) => {
    const colors = {
      ON_TIME: 'bg-green-100 text-green-800',
      DELAYED: 'bg-yellow-100 text-yellow-800',
      CANCELLED: 'bg-red-100 text-red-800',
      BOARDING: 'bg-blue-100 text-blue-800',
      DEPARTED: 'bg-purple-100 text-purple-800',
      ARRIVED: 'bg-gray-100 text-gray-800',
    };
    return colors[status];
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{flightInfo.flight.airline}</h2>
          <p className="text-gray-600">Flight {flightInfo.flight.number}</p>
        </div>
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(flightInfo.status)}`}>
          {flightInfo.status.replace('_', ' ')}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <MapPin className="text-gray-500" />
          <div>
            <p className="font-semibold">{flightInfo.flight.from}</p>
            <p className="text-sm text-gray-500">{flightInfo.departureTime}</p>
          </div>
        </div>
        <Plane className="text-blue-500 transform rotate-90" />
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="font-semibold">{flightInfo.flight.to}</p>
            <p className="text-sm text-gray-500">{flightInfo.arrivalTime}</p>
          </div>
          <MapPin className="text-gray-500" />
        </div>
      </div>

      {flightInfo.delay && (
        <div className="flex items-center space-x-2 text-yellow-600">
          <Clock className="w-5 h-5" />
          <span>Delayed by {flightInfo.delay} minutes</span>
        </div>
      )}

      {flightInfo.weather && (
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2">
            <CloudRain className="text-gray-500" />
            <div>
              <p className="font-semibold">Weather at Destination</p>
              <p className="text-sm text-gray-600">
                {flightInfo.weather.condition}, {flightInfo.weather.temperature}°C
              </p>
              <p className="text-sm text-gray-600">
                Wind: {flightInfo.weather.windSpeed} km/h, Visibility: {flightInfo.weather.visibility}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}