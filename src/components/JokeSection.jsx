import { useState } from 'react';
import { fetchJoke } from './jokeutility';

const JokeSection = () => {
  const [joke, setJoke] = useState('');
  const [selectedType, setSelectedType] = useState('general');
  const jokeTypes = ['general', 'programming'];

  const fetchRandomJoke = async () => {
    let data;

    if (selectedType === 'any') {
      data = await fetchJoke();
    } else {
      data = await fetchJoke(selectedType);
    }

    if (data && data.length > 0) {
      const { setup, punchline } = data[0];
      setJoke(`${setup} ${punchline}`);
    }
  };

  return (
    <div className="w-80% mt-8 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Joke</h2>
      <div className="flex flex-col items-center space-y-4">
        <select
          className="py-2 px-4 rounded-md border border-gray-300 focus:ring focus:ring-opacity-50 focus:outline-none"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {jokeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring focus:ring-opacity-50 focus:outline-none"
          onClick={fetchRandomJoke}
        >
          Get Joke
        </button>
      </div>
      {joke && (
        <div className="mt-8 p-4 border border-gray-300 rounded-md bg-white">
          <p className="text-lg text-gray-800">{joke}</p>
        </div>
      )}
    </div>
  );
};

export default JokeSection;
