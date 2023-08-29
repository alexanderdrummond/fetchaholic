export const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      return data.slip.advice;
    } catch (error) {
      console.error('error fetching advice:', error);
      return null;
    }
  };
  