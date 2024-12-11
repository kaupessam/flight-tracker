import React from 'react';
import { User, Briefcase } from 'lucide-react';
import type { PassengerInfo as PassengerInfoType } from '../types/flight';

interface PassengerInfoProps {
  passenger: PassengerInfoType;
}

export function PassengerInfo({ passenger }: PassengerInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-4 mb-6">
        <User className="w-8 h-8 text-blue-500" />
        <div>
          <h3 className="text-xl font-semibold">{passenger.name}</h3>
          <p className="text-gray-600">Seat {passenger.seatNumber}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Gate</p>
          <p className="font-semibold">{passenger.gate}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Terminal</p>
          <p className="font-semibold">{passenger.terminal}</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-2 mb-2">
          <Briefcase className="text-gray-500" />
          <h4 className="font-semibold">Baggage Information</h4>
        </div>
        <ul className="space-y-2">
          {passenger.baggage.map((bag, index) => (
            <li key={index} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
              {bag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}