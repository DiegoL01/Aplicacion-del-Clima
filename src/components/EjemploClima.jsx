import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCiudadE, dataPronostico } from '../context/pronosticoContext';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const EjemploClima = () => {
  const [ciudadInput, setCiudadInput] = useState('');
  const dispatch = useDispatch();
  const pronostico = useSelector((state) => state.pronostico);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCiudadE(ciudadInput));
    dispatch(dataPronostico(ciudadInput));
  };

  const renderClima = () => {
    switch (pronostico.status) {
      case 'loading': {
        return <Alert variant="info">Cargando datos del clima...</Alert>;
      }
      
      case 'succeeded': {
        const { main, weather } = pronostico.data;
        return (
          <Card>
            <Card.Body>
              <Card.Title>Clima en {pronostico.ciudad}</Card.Title>
              <Card.Text>
                <p>Temperatura: {main.temp}°C</p>
                <p>Sensación térmica: {main.feels_like}°C</p>
                <p>Humedad: {main.humidity}%</p>
                <p>Condición: {weather[0].description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
      
      case 'failed': {
        return <Alert variant="danger">Error: {pronostico.error}</Alert>;
      }
      
      default: {
        return <Alert variant="secondary">Ingresa una ciudad para ver el clima</Alert>;
      }
    }
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa el nombre de la ciudad"
            value={ciudadInput}
            onChange={(e) => setCiudadInput(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Buscar Clima
        </Button>
      </Form>

      {renderClima()}
    </Container>
  );
};

export default EjemploClima; 