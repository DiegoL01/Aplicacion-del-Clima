import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import '../css/visualizarClima.css'
import { dataPronostico } from "../context/pronosticoContext";
import { Alert } from "react-bootstrap";
const VisualizarClima = () => {
  const dispatch = useDispatch();
  const pronostico = useSelector((state) => state.pronostico)
  

  
  
  
  const animacion = pronostico.status === 'loading' ? (
    <div className="loading-spinner">Cargando...</div>
  ) : pronostico.status === 'failed' ? (
    <div className="error-message">Error: {pronostico.error}</div>
  ) : null;

  useEffect(() => {
    if (pronostico.ciudad !== "") {
      dispatch(dataPronostico(pronostico.ciudad))
    }
  }, [pronostico.ciudad, dispatch]);

  return (<>
    
    {pronostico.status === 'loading' ? (
      <Alert  variant="info">{animacion}</Alert>
    ) : pronostico.status === 'succeeded' ? (
      <Container className="clima-container">

        <div className="clima-info">
          <h2>Clima en {pronostico.ciudad}</h2>
          <div className="clima-detalles">
            <div>Temperatura: {pronostico.data.main.temp}°C</div>
            <div>Sensación térmica: {pronostico.data.main.feels_like}°C</div>
            <div>Humedad: {pronostico.data.main.humidity}%</div>
            <div>Condición: {pronostico.data.weather[0].description}</div>
          </div>
        </div>
        <div>
          <img src={`https://openweathermap.org/img/wn/${pronostico.data.weather[0].icon}@2x.png`} alt="Clima" />
        </div>
        {console.log(pronostico.data)}
      </Container>
    ) : pronostico.status === 'failed' ? (
      <Alert variant="danger">Error: {pronostico.error}</Alert>
    ) : (
      <Alert variant="secondary">Ingresa una ciudad para ver el clima</Alert>
    )}
  </>
  );
};

export default VisualizarClima;