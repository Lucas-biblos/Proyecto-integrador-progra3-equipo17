import Card from "../Card/Card"
import "./CardsGrid.css"
import personajes from "../../data/personajes"

const CardsGrid = () => {

   

    return (
        <section>
            <h2>Personajes</h2>
             <div className={"card-container"}>
            {personajes.map((personaje, idx) =>
                <Card key={idx} name={personaje.name} description={personaje.description} img={personaje.img} id={personaje.id} />
            )}
        </div>
        </section>
       
    )
}

export default CardsGrid