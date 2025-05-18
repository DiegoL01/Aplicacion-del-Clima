import React from 'react'
import Button from 'react-bootstrap/Button';

const BotonP = ({valor="click aqui",tipo="submit",funcion}) => {
  return (
    <>
      <Button style={{width:'6rem',height:'2.5rem',margin:'auto'}} type={tipo} onClick={funcion}>{valor}</Button>
    </>
  );
}

export default BotonP
