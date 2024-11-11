import React, { useState } from 'react';

// Sample data for demonstration
const sampleData = {
  electricBill: 50, // in currency units
  gasBill: 30, // in currency units
  oilBill: 20, // in currency units
  yearlyMileage: 12000, // in miles
  shortFlights: 2, // flights under 4 hours
  longFlights: 1, // flights over 4 hours
  recycleNewspaper: false, // true if user recycles, false if not
  recycleAluminum: false, // true if user recycles, false if not
};

const CarbonFootprint = () => {
  const [data, setData] = useState(sampleData);
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Calculate carbon footprint based on the provided algorithm
  const calculateCarbonFootprint = () => {
    let footprint = 0;
    footprint += data.electricBill * 105;
    footprint += data.gasBill * 105;
    footprint += data.oilBill * 113;
    footprint += data.yearlyMileage * 0.79;
    footprint += data.shortFlights * 1100;
    footprint += data.longFlights * 4400;
    footprint += !data.recycleNewspaper ? 184 : 0;
    footprint += !data.recycleAluminum ? 166 : 0;
    setCarbonFootprint(footprint);
  };

  return (
    <div className="p-5 bg-teal-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-5 text-center">Carbon Footprint Calculator</h3>
      
      {/* Display input fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Electric Bill</label>
          <input
            type="number"
            value={data.electricBill}
            onChange={(e) => setData({ ...data, electricBill: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Gas Bill</label>
          <input
            type="number"
            value={data.gasBill}
            onChange={(e) => setData({ ...data, gasBill: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Monthly Oil Bill</label>
          <input
            type="number"
            value={data.oilBill}
            onChange={(e) => setData({ ...data, oilBill: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Yearly Mileage</label>
          <input
            type="number"
            value={data.yearlyMileage}
            onChange={(e) => setData({ ...data, yearlyMileage: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Short Flights (4 hours or less)</label>
          <input
            type="number"
            value={data.shortFlights}
            onChange={(e) => setData({ ...data, shortFlights: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Long Flights (more than 4 hours)</label>
          <input
            type="number"
            value={data.longFlights}
            onChange={(e) => setData({ ...data, longFlights: Number(e.target.value) })}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Do you recycle newspaper?</label>
          <input
            type="checkbox"
            checked={data.recycleNewspaper}
            onChange={(e) => setData({ ...data, recycleNewspaper: e.target.checked })}
            className="mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Do you recycle aluminum and tin?</label>
          <input
            type="checkbox"
            checked={data.recycleAluminum}
            onChange={(e) => setData({ ...data, recycleAluminum: e.target.checked })}
            className="mt-1"
          />
        </div>

        <button
          onClick={calculateCarbonFootprint}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Calculate Carbon Footprint
        </button>
      </div>

      {/* Display the result */}
      {carbonFootprint !== null && (
        <div className="mt-5 p-4 bg-gray-200 rounded-lg">
          <h4 className="text-center font-semibold">Total Carbon Footprint</h4>
          <p className="text-center text-xl mt-2">{carbonFootprint} kg CO₂/year</p>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprint;
