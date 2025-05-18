import Container from 'react-bootstrap/Container'
import FormularioP from '../components/FormularioP'
import '../css/pages.css'
import VisualizarClima from '../components/visualizarClima'


const HomePage = () => {

 
  
  return (
    <Container className='paginaPrincipal' style={{ textAlign: 'center' }} fluid>
      <h1>Aplicacion del clima</h1>
      <FormularioP />
      <VisualizarClima />
    </Container>
  )
}

export default HomePage
