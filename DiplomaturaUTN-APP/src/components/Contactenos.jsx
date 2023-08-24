
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Hero from "./Hero";
import travel_01 from "../assets/travel-01.jpg";
import "./contactenos.css";
import swal from 'sweetalert';





export default function Contactenos() {
  

  const alert = () => {
    swal({
      title: "Good job!",
      text: "Nos contactaremos en breve",
      icon: "success",
      
    });
  }
  return (
  <div /* className='contactenos' */>
       <Hero imageSrc={travel_01}/>
    <div > 
    <Box className='box'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
        
          }} >
      <p><u><b> Contactenos:</b></u></p><br /><br />
      <TextField label={'Nombre completo'} id="margin-none" />
      <br />
      <TextField label={'Telefono'} id="margin-dense" margin="dense" />
      <br />
      <TextField label={'Email'} id="margin-normal" margin="normal" />
      <br />
      <Stack spacing={2} direction="row">
    
          <Button variant="contained" onClick={alert}>enviar</Button>
      
      </Stack>
    </Box>
    </div >
    <div className='lorenIpsun' >
          <h1 style={{margin:"40px"}}>Agencia de viajes</h1>
            <p>¿Estás listo para embarcarte en una nueva aventura? Despegar, tu agencia de viajes de confianza, te ofrece todo lo que necesitas para que tu próximo viaje sea inolvidable. Olvídate de los problemas de planificación, con nuestros vuelos baratos, hoteles, actividades y traslados, podrás armar un paquete a medida y encontrar todas las soluciones para tu viaje en un solo lugar. Al elegir Despegar, estarás dando el primer paso para vivir una experiencia de viaje integral y personalizada, ajustada a tus necesidades y presupuesto.

              ¿Por qué elegir a Despegar como tu Agencia de Viajes?

                En Despegar, comprendemos que cada viaje es único y es por eso que nos esforzamos por ofrecer opciones que se ajusten a tu estilo de vida y tus necesidades. Más que una simple agencia de viajes, Despegar se destaca por su compromiso con la satisfacción del cliente, ofreciendo una amplia gama de productos y servicios, y asegurándose de que cada detalle esté cuidado para que puedas concentrarte en disfrutar del viaje. Desde vuelos económicos hasta hoteles de lujo, traslados eficientes y actividades emocionantes, tenemos todo lo que necesitas para tu próxima escapada.

                Comprá tu viaje al mejor precio

                Con Despegar, hacer tus sueños de viaje realidad no tiene por qué costar una fortuna. Nuestra plataforma intuitiva y fácil de usar te permite comparar precios, leer opiniones de otros viajeros y reservar con solo unos pocos clics. Además, ofrecemos constantemente cupones, promociones y descuentos especiales para que puedas aprovechar al máximo tu presupuesto de viaje. Viajar es más que llegar a un destino, es una experiencia que comienza desde el momento en que empezás a planificar. Despegar, tu agencia de viajes, está acá para asegurarse de que cada paso de tu viaje sea tan emocionante como el destino final.</p>
        </div>
    </div>
  );
}