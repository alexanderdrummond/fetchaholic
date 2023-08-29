import { useState } from 'react';
import { fetchAdvice } from './adviceutility';

const AdviceSection = () => {
  const [advice, setAdvice] = useState('');

  const fetchNewAdvice = async () => {
    const newAdvice = await fetchAdvice();
    if (newAdvice) {
      setAdvice(newAdvice);
      console.log('advice:', newAdvice);
    }
  };

  return (
    <div className="mt-8">
        <div className="flex flex-col items-center space-y-4">
         <h2 className="text-3xl font-bold mb-2 text-center">Advice</h2>
         <p className="text-md mb-10 text-center">Uses <a href="https://api.adviceslip.com/" className="text-blue-500">Advice Slip</a></p>
      <button
        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-opacity-50 focus:outline-none"
        onClick={fetchNewAdvice}
      >
        Get Advice
      </button>
      {advice && (
        <div className="mt-4 p-4 border border-gray-300 rounded-md shadow-md bg-white">
          <p className="text-lg text-gray-800">{advice}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default AdviceSection;
