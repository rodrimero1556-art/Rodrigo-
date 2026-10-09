import './App.css'
import Encabezado from './Componentes/Encabezado'
import Tarjeta from './Componentes/Tarjeta'
import PiePagina from './Componentes/PiePagina';


function App () {

  const programa = 'Analisis y Desarrollo de Software'

  return(
    <>
    <Encabezado/>

    <main className = 'contenido'>
      <h2> Bienvenidos al programa {programa} </h2>
      <section className = "tarjetas">
        <Tarjeta/>
        <Tarjeta/>
        </section>
      </main>
      <PiePagina/>
      </>

    )
  }

  export default App

