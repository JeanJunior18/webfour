import React, { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import Input from '../components/unform/Input';
import Navbar from '../components/Navbar';
import MapView from '../components/MapView';
import styled from 'styled-components';

const Container = styled.div`
  /* background: black;s */
  

  form {
    background: #a1a1a1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form input {
    
  }

   .map {
    background: #b2b2b2;
    height: 15rem;
    width: 100%;
  }
`;


interface FormData {
  fullname: string
}


const Cadastro: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return (
    <>
    <Navbar />
    <Container>
      <div>Cadastro Page</div>

    <div className="map">
      <MapView />
    </div>


      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="fullname" label="Nome Completo" />
        <Input name="cpf" label="CPF" />
        <Input name="address" label="Endereço" />
        <Input name="neighborhood" label="Bairro" />

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  </>
  );
}

export default Cadastro;