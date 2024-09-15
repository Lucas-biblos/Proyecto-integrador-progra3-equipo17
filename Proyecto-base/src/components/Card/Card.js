import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ name, description, img, id }) => {
    return (
        <div className="character-card">
            <img src={`/imgs/characters/${img}`} alt={name} />
            <Link to={`/personaje/id/${id}`}><h4>{name}</h4></Link>
            <p>{description}</p>
            <Link to={`/personaje/id/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Card