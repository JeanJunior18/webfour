import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from './components/unform/Input';
import Navbar from './components/Navbar';
import { GoogleMap, Marker } from 'react-google-maps';

// import { Container } from './styles';

interface FormData {
  fullname: string
}

const Cadastro: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const []

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return (
    <>
    <Navbar />
    <div>Cadastro Page</div>

    <GoogleMap
    defaultCenter={{lat:-4.4607648,lng:-43.8902643}}
    defaultZoom={15.13}
    >

    </GoogleMap>

    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="fullname" label="Nome Completo" />
      <Input name="cpf" label="CPF" />
      <Input name="address" label="Endereço" />
      <Input name="neighborhood" label="Bairro" />

      <button type="submit">Enviar</button>
    </Form>
  </>
  );
}

export default Cadastro;