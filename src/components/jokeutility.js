const API_URL = 'https://official-joke-api.appspot.com';

export async function fetchJoke(type) {
  let endpoint = '/jokes/random';

  if (type && type !== 'any') {
    endpoint = `/jokes/${type}/random`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error (joke):', error);
    return null;
  }
}