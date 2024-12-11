import React, { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { FlightStatus } from './components/FlightStatus';
import { PassengerInfo } from './components/PassengerInfo';
import { getMockFlightInfo } from './utils/mockData';
import { Plane, AlertCircle } from 'lucide-react';
import type { FlightInfo } from './types/flight';

function App() {
  const [flightInfo, setFlightInfo] = useState<FlightInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (pnr: string) => {
    const info = getMockFlightInfo(pnr);
    if (info) {
      setFlightInfo(info);
      setError(null);
    } else {
      setFlightInfo(null);
      setError('No flight found with the provided PNR number. Please check and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Plane className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">Flight Tracker</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-md text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Track Your Flight</h2>
            <p className="text-gray-600 mb-6">Enter your PNR number to get real-time flight information</p>
            <SearchForm onSearch={handleSearch} />
            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg flex items-center space-x-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <p>{error}</p>
              </div>
            )}
          </div>

          {flightInfo && (
            <div className="w-full max-w-4xl space-y-6">
              <FlightStatus flightInfo={flightInfo} />
              <PassengerInfo passenger={flightInfo.passenger} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;