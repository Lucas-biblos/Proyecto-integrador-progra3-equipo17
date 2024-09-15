import Ficha from "../Ficha/Ficha"
import "./FichaGrid.css"

const FichaGrid = () => {

  const fichasData = [
    {
      title: "Titulo 1",
      dato: 90,
      icon: "fa-clipboard-list"
    },
    {
      title: "Titulo 2",
      dato: "$5050",
      icon: "fa-dollar-sign"
    },
    {
      title: "Titulo 3",
      dato: 90,
      icon: "fa-user"
    },
  ]

  return (
    <section className="top-data">
      {
        fichasData.map((ficha, index) => 
        <Ficha key={index} title={ficha.title} dato={ficha.dato} icon={ficha.icon} />)
      }

    </section>
  )
}

export default FichaGrid