import Head from 'next/head'
import Link from 'next/link';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.div`

`


export default function Home() {
  return (
    <div>
      <Head>
        <title>WebFour Internet</title>
      </Head>
      <Navbar />
      <h1>WebFour</h1>
      <h2>INTERNET </h2>
      <p>Fibra Óptica de verdade porque navegar é preciso</p>
      <Link href='/cadastro'>Cadastro</Link>
    </div>
  ) 
}
