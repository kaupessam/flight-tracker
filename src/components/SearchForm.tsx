import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (pnr: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [pnr, setPnr] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr.trim()) {
      onSearch(pnr.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          placeholder="Enter PNR Number"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          pattern="[A-Z0-9]{6}"
          title="PNR should be 6 characters long and contain only uppercase letters and numbers"
          maxLength={6}
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}