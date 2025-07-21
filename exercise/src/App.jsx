import "./App.css";
import ButtonComponent from "./assets/components/ButtonComponent";
import ImageComponent from "./assets/components/ImageComponent";

function App() {
  return (
    <>
      <h2>Bottoni creati come funzione</h2>
      <ButtonComponent buttonText="Cliccami?!" />
      <ButtonComponent buttonText="Salva form" />
      <ButtonComponent buttonText="Elimina" />
      <h2>le mie immagini di animali</h2>
      <ImageComponent
        src="https://placecats.com/300/200"
        alt="gatto-numero-1"
      />
      <ImageComponent
        src="https://placecats.com/200/300"
        alt="gatto-numero-2"
      />
    </>
  );
}

export default App;
