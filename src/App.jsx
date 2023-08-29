import { useState } from 'react';
import JokeSection from './components/JokeSection';
import AdviceSection from './components/AdviceSection';
import WeatherSection from './components/WeatherSection';

function App() {
  const [activeTab, setActiveTab] = useState('jokes');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-between w-full bg-black p-4">
        <h1 className="title text-4xl text-white">Fetchaholic</h1>
        <div className="flex gap-4">
          <button
            className={`
              p-2 rounded 
              ${activeTab === 'jokes' ? 'bg-green-600 text-white' : 'text-black bg-white hover:bg-gray-100'}
            `}
            onClick={() => handleTabClick('jokes')}
          >
            Jokes
          </button>
          <button
            className={`
              p-2 rounded 
              ${activeTab === 'advice' ? 'bg-green-600 text-white' : 'text-black bg-white hover:bg-gray-100'}
            `}
            onClick={() => handleTabClick('advice')}
          >
            Advice
          </button>
          <button
            className={`
              p-2 rounded 
              ${activeTab === 'weather' ? 'bg-green-600 text-white' : 'text-black bg-white hover:bg-gray-100'}
            `}
            onClick={() => handleTabClick('weather')}
          >
            Weather
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        {activeTab === 'jokes' && <JokeSection />}
        {activeTab === 'advice' && <AdviceSection />}
        {activeTab === 'weather' && <WeatherSection />}
      </div>
    </div>
  );
}

export default App;
