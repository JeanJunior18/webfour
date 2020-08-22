import Head from 'next/head'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`


export default function Home() {
  return (
    <div>
      <Head>
        <title>WebFour Internet</title>
      </Head>
      <Navbar />
      <Container>
        <div className="content">
          <h1>WebFour</h1>
          <h2>INTERNET </h2>
          <p>Fibra Óptica de verdade porque navegar é preciso</p>
        </div>
        <div className="image">
          {/* <img src="/logo01.png" alt="WebFour"/> */}
        </div>
      </Container>

    </div>
  ) 
}
