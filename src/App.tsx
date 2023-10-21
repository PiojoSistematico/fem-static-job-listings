import { useState } from "react";
import data from "./data/data.json";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header></header>
      <main>
        {data.map((elem, index) => (
          <Card key={index} info={elem}></Card>
        ))}
      </main>
    </>
  );
}

export default App;
