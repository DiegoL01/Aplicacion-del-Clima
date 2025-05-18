
// import { useFetch } from '../helper/useFetch';
import { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { FormGroup, Container, Button, Form } from 'react-bootstrap';
import '../css/form.css'
import { setCiudadE, dataPronostico } from '../context/pronosticoContext';


const FormularioP = () => {
  const [ciudad, setCiudad] = useState("");
  const dispatch = useDispatch()
  //aqui se acaban los accesorios 

  const handleChange = (e) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mensajero = e.target[0].value;
     dispatch(setCiudadE(mensajero))
     dispatch(dataPronostico(mensajero))
    }
    



  return (
    <Container className='contenedorForm' style={{ flexFlow: 'column', padding: '0', display: 'flex', gap: '0.5rem' }} fluid>
    
      <Form onSubmit={handleSubmit} style={{ marginTop: '3rem' }}>
        <Form.Label className='labelForm' style={{ font: '1.3rem verdana', marginLeft: '1rem' }} htmlFor="inputPassword5">Ciudad :</Form.Label>
        <FormGroup style={{ textAlign: 'initial', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Form.Control  onChange={handleChange} style={{ flexGrow: "1", margin: '0 0.5rem' }}
            type="Text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={ciudad}
          />
          <Button type='submit'>BUSCAR</Button>
        </FormGroup>
      </Form >

    </Container>
  );
}

export default FormularioP;



