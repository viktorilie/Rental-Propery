import "./App.css";
import PropertyList from "./PropertyList";

const properties = [
  { id: 129031, name: "Krushevo", rating: 4.6, price: 110 },
  { id: 129032, name: "Ohrid", rating: 3.9, price: 200 },
  { id: 129033, name: "Mavrovo", rating: 4.1, price: 150 },
  { id: 129034, name: "Berovo", rating: 4.5, price: 99 },
  { id: 129035, name: "Shapka", rating: 4.0, price: 89 },
];

function App() {
  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
