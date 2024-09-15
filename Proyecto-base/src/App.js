import Navbar from "./components/Navbar/Navbar"
import { Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Personajes from "./pages/Personajes";
import UnPersonaje from "./pages/UnPersonaje";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/personajes" component={Personajes} />
        <Route path="/personaje/id/:id" component={UnPersonaje} />
        {/*Agregar ruta 404*/}
      </Switch>
      <footer>
        <p>Copyright © Dashboard 2022</p>
      </footer>
    </>
  );
}

export default App;
