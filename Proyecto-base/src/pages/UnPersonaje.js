import personajes from "../data/personajes"

const UnPersonaje = ({match}) => {
    //const id = props.match.params.id;
    const { id } = match.params
    const personaje = personajes.find((personaje)=> personaje.id === Number(id) ) // Find no lo vimos pero es igual a filter, solo que devuelve un objeto en vez de un array. El objeto es el primer coincidente.
    return (
        <div>
            <h1>{personaje.name}</h1>
            <img src={`/imgs/characters/${personaje.img}`} alt={personaje.name} />
            <p>{personaje.description}</p>
        </div>
    )
}

export default UnPersonaje