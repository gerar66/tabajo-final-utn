import travel_01 from "../assets/travel-01.jpg";
import Hero from './Hero'

const Home = () => {
  return (
    <>
    <div>
      <Hero imageSrc={travel_01}/>
    </div>
    <div>
<h1 style={{margin:"20px"}}> porque viajar con nosotros</h1>
<h4 style={{margin:"20px"}}>¿Qué es Lorem Ipsum?
Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
</h4>
    </div>
    </>
  )
}

export default Home
