/* Componente que devuelve una imagen */
export const Imagen = () => {
    return(
    <div>
      {/* Imagen por "src" es la ruta relativa desde este componente a la imagen*/}
      <img src={require("../Imagenes/espagetis.jpg")} width={150} height={150} alt={"Espaguetis al pesto con una rica cerveza de fondo"} ></img>
    </div>)
  }