import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";


/* import { useNavigate } from 'react-router-dom'; */

function App() {
  /* const history = useNavigate();
  const usehistory = {
    history('/home');
  } */
  const navbarLinks = [
    { url: "/home", title: "Home" },
    { url: "/excursiones", title: "excursiones" },
    { url: "/contactenos", title: "contactenos" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01}  />
      <Slider
        imageSrc={travel_02}
        title={"Sé un explorador"}
        subtitle={
          "¡Nuestra plataforma ofrece una amplia variedad de viajes únicos!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Recuerdos para toda la vida"}
        subtitle={"Las vacaciones de tus sueños están a solo unos clics de distancia"}
        flipped={true}
      />
    </div>
  );
}

export default App;