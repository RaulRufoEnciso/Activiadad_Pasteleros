
/* Componente que devuelce informacion del trabajador utilizando props, los props se definen en App */
export const Info = (props) => {
    return(
      <div>
        <p className='text-bold'>{props.name}</p>
        <p className='text-bold'>{props.job}</p>
        <p>{props.description}</p>
      </div>
    )
  }