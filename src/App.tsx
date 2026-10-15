import Menu from "./components/Menu";
import meny from "./data/meny";

function App() {
  return (
    <>
      <h1>Restaurantmeny - {meny.length} retter</h1>
      <Menu matretter={meny} />
    </>
  );
}

export default App;
