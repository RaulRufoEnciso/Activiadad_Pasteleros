/* Componente que devuelve una imagen */

/* Importo el componente Imagen del fichero Imagen para usarlo en la funcion App()*/
import { Imagen } from "./Imagen";
/* Importo el componente Info del fichero Info_Past para usarlo en la funcion App()*/
import { Info } from "./Info_Past";

//export var CartaComponent = function (props) {
export const CartaComponent = (props) => {
  return (
    <div>
      <div class="cuadradoGrande">
        <Imagen />
        {/* name, job, description son props del componente Info */}
        <Info
          name={props.name}
          job={props.job}
          description={props.description}
        />
      </div>
    </div>
  );
};
