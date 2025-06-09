// scripts/apiService.js
export const fetchData = async (url = 'https://api.sampleapis.com/coffee/hot') => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
};