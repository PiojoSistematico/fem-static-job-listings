import { useState } from "react";
import data from "./data/data.json";
import Card from "./components/Card";
import { Button } from "react-aria-components";

function App() {
  const [filter, setFilter] = useState(["HTML", "CSS", "JavaScript"]);

  function handleClear(): void {
    setFilter([]);
  }

  return (
    <>
      <header className="bg-[url('src/assets/images/bg-header-mobile.svg')] h-36 bg-primary-1"></header>
      <main className="font-LeagueSpartan bg-neutral-2 p-8 flex flex-col gap-8 text-base font-medium">
        <section
          title="filter"
          className="p-4 bg-neutral-1 rounded-lg flex flex-row gap-4 items-center justify-between"
        >
          <div className="flex flex-row gap-2 flex-wrap items-center">
            {filter.map((elem, index) => (
              <div className="flex flex-row items-center" key={index}>
                <span className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-l-md">
                  {elem}
                </span>
                <Button className="bg-primary-1 text-neutral-1 py-1 px-2 rounded-r-md">
                  X
                </Button>
              </div>
            ))}
          </div>
          <div>
            <Button onPress={handleClear} className="text-neutral-4">
              Clear
            </Button>
          </div>
        </section>
        {data.map((elem, index) => (
          <Card key={index} info={elem}></Card>
        ))}
      </main>
    </>
  );
}

export default App;
