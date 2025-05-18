const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'b4aa0650f616951b80560cb3a6fcbc0e';

const fetchClima = async (ciudad) => {
  if (ciudad === '') {
    throw new Error('No se ha seleccionado una ciudad');
  }

  const response = await fetch(`${API_URL}?q=${ciudad}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const dataRes = await response.json();
  if (dataRes.cod && dataRes.cod !== 200) {
    throw new Error(dataRes.message || 'Error al obtener datos del clima');
  }

  return dataRes;
};

export { fetchClima }; 