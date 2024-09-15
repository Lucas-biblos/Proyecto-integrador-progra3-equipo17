import FichaGrid from "../components/FichaGrid/FichaGrid";
import Contador from "../components/Contador/Contador";
const Home = () => {
  return (
    <>
      <h1>My App in React</h1>
      <main>
        <FichaGrid />
        < Contador value = {10} title= "el gran contador" />
        
      </main>
    </>
  )
}

export default Home