import "./Ficha.css"


const Ficha = (props) => {
  const { title, dato, icon } = props
  return (
    <article className="data-detail">
      <div className="card-content">
        <h4>{title}</h4>
        <p>{dato}</p>
      </div>
      <i className={`fas ${icon} fa-2x text-gray-300`}></i>
    </article>
  )
}

export default Ficha