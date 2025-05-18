import { useCallback } from 'react';

const WeatherData = () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = 'b4aa0650f616951b80560cb3a6fcbc0e'

  const fetchClima = useCallback(async (ciudad) => {
    if (ciudad === '') {
      throw new Error('No se ha seleccionado una ciudad');
    }

    const response = await fetch(`${url}?q=${ciudad}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const dataRes = await response.json();
    if (dataRes.cod && dataRes.cod !== 200) {
      throw new Error(dataRes.message || 'Error al obtener datos del clima');
    }

    return dataRes;
  }, []);

  return { fetchClima };
};

export default WeatherData;


