import './App.css'
import Encabezado from './Componentes/Encabezado'
import Sidebar from './Componentes/Sidebar';
import Tarjeta from './Componentes/Tarjeta'
import PiePagina from './Componentes/PiePagina';
import Presentacion from './Componentes/Presentacion';

function App () {

  const programa = 'Analisis y Desarrollo de Software'

  return(
    <>
    <div className = "Layaut">
      <Sidebar/>
      <Encabezado/>
    </div>

    <div  className='layaut'>
    <Encabezado/>
    <Sidebar/>
    <main className='contenido'>
      <h2> Bienvenidos al programa {programa}</h2>
      <Presentacion/>
      <section className='tarjetas'>
        <Tarjeta/>
        <Tarjeta/>
      </section>
    </main>
    <PiePagina/>
    </div>
    </>
  )
}


export default App
