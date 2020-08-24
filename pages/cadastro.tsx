import React, { useRef, useState } from 'react';
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
  cpf: string
  address: string
  neighborhood: string
  lat: number
  lng: number
}

interface Location {
  lat: number
  lng: number
}

function sendWhatsapp(number, data, location){
  let message;
    const url = `https://api.whatsapp.com/send?phone=55${number}&text=`;
    if (location){
      data['lat'] = location.lat;
      data['lng'] = location.lng;
      message = `${url}Olá, sou ${data.fullname} e gostaria de solicitar um orçamento e saber a disponibilidade para o endereço:
      https://google.com/maps/search/${data.lat},${data.lng}
      `
    }
    else {
      const content = `
      Olá, eu sou ${data.fullname}, gostaria de solicitar um orçamento e saber a disponibilidade para o endereço:
      ${data.address},
      bairro: ${data.neighborhood}
      `;
      message = `${url}${content}`
    }
    window.open(message)
}


const Cadastro: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [location, setLocation] = useState<Location>();

  const handleSubmit: SubmitHandler<FormData> = data => {
    sendWhatsapp(9999, data, location);
    console.log(data)
  }

  return (
    <>
    <Navbar />
    <Container>
      <div>Cadastro Page</div>

    <div className="map">
      <MapView setState={setLocation} />
    </div>


      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="fullname" label="Nome Completo" required />
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