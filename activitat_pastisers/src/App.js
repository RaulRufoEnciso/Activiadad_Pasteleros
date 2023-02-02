import './App.css';
import './style/Carta.css'

import { CartaComponent } from './Components/Carta'
import { Info } from './Components/Info_Past';

function App() {
  return (
    <div className="App">
      <h1>Activitar on hem de crear un componenet i passar diferents valors</h1>
      <CartaComponent name="Raul Rufo" job="Pastiser" description="Neque porro quisquam est qui " />
      <CartaComponent name="Kevin Sama" job="Flequer" description="Neque porro quisquam est qui " />
    </div>
  );
}
export default App;
