import { useState } from "react";
import data from "./data/data.json";
import Card from "./components/Card";
import { Button } from "react-aria-components";

function App() {
  const [filter, setFilter] = useState<string[]>([]);

  function handleClear(): void {
    setFilter([]);
  }

  function handleAddFilter(word: string): void {
    if (!filter.includes(word)) setFilter([...filter, word]);
  }

  function handleRemoveFilter(word: string): void {
    setFilter(filter.filter((elem) => elem != word));
  }

  return (
    <>
      <header className="bg-[url('/bg-header-mobile.svg')] h-36 bg-primary-1 md:bg-[url('/bg-header-desktop.svg')]"></header>
      <main className="font-LeagueSpartan bg-neutral-2 p-8 text-base font-medium">
        <section
          className={`relative ${
            filter.length == 0 ? "top-0 " : "-top-8 -translate-y-8"
          } left-1/2 -translate-x-1/2 md:w-[700px] lg:w-[1000px] bg-neutral-2 flex flex-col gap-8 rounded-md`}
        >
          {filter && filter.length > 0 ? (
            <section
              title="filter"
              className="p-4 bg-neutral-1 over rounded-md flex flex-row gap-4 items-center justify-between "
            >
              <div className="flex flex-row gap-2 flex-wrap items-center ">
                {filter.map((elem, index) => (
                  <div className="flex flex-row items-center" key={index}>
                    <span className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-l-md">
                      {elem}
                    </span>
                    <Button
                      onPress={() => handleRemoveFilter(elem)}
                      className="bg-primary-1 text-neutral-1 py-1 px-2 rounded-r-md"
                    >
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
          ) : null}

          <section
            title="job post"
            className="flex flex-col gap-8 bg-neutral-2 items-stretch md:items-center"
          >
            {filter.length > 0
              ? data
                  .filter((elem) =>
                    filter.every((filterElem) =>
                      elem.tools
                        .concat(elem.languages, elem.role, elem.level)
                        .includes(filterElem)
                    )
                  )
                  .map((elem, index) => (
                    <Card
                      key={index}
                      info={elem}
                      handleAddFilter={handleAddFilter}
                    ></Card>
                  ))
              : data.map((elem, index) => (
                  <Card
                    key={index}
                    info={elem}
                    handleAddFilter={handleAddFilter}
                  ></Card>
                ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
