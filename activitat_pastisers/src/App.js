import './App.css';
import './style/Carta.css'
/* Importo el componente Imagen del fichero Imagen para usarlo en la funcion App()*/ 
import {Imagen}  from './Components/Imagen'
/* Importo el componente Info del fichero Info_Past para usarlo en la funcion App()*/
import {Info} from'./Components/Info_Past'
function App() {
  return (
    <div className="App">
      <h1>Activitar on hem de crear un componenet i passar dferents valors</h1>
      <div class="cuadradoGrande">
        <Imagen/>
        {/* name, job, description son props del componente Info */}
        <Info name="Raul Rufo" job="Pastiser" description="Neque porro quisquam est qui "/>
      </div>
      <div class="cuadradoGrande">
        <Imagen/>
        {/* name, job, description son props del componente Info */}
        <Info name="Kevin Sama" job="Flequer" description="Neque porro quisquam est qui "/>
      </div>
    </div>
  );
}
export default App;
