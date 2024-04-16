import { Button } from "react-aria-components";

type CardProps = {
  info: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
  handleAddFilter: (word: string) => void;
};

const Card: React.FunctionComponent<CardProps> = ({
  info,
  handleAddFilter,
}) => {
  return (
    <article
      className={`${
        info.featured ? "border-primary-1" : "border-neutral-1"
      } relative pb-4 pl-4 pr-4 py-8 bg-neutral-1 rounded-md shadow-lg shadow-neutral-5/20 border-l-4 border-solid flex flex-col gap-4 lg:w-[1000px] md:w-[700px] md:flex-row md:items-center md:justify-between`}
    >
      <div className="flex flex-row items-center gap-8">
        <picture className="absolute top-[-20px] left-[16px] w-12 h-12 md:relative md:top-0 md:left-0 md:w-16 md:h-16">
          <img src={`src/assets/${info.logo.slice(1)}`} alt="Logo " />
        </picture>
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center">
              <h2 className="text-primary-1 font-bold">{info.company}</h2>
              {info.new && (
                <span className="bg-primary-1 text-neutral-1 uppercase px-2 rounded-xl">
                  New!
                </span>
              )}
              {info.featured && (
                <span className="bg-neutral-5 text-neutral-1 uppercase px-2 rounded-xl">
                  Featured
                </span>
              )}
            </div>

            <p className="font-bold">{info.position}</p>
            <div className="flex flex-row gap-2 items-center text-neutral-4">
              <span>{info.postedAt}</span>
              <span>.</span>
              <span>{info.contract}</span>
              <span>.</span>
              <span>{info.location}</span>
            </div>
            <hr className="md:hidden" />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4 md:w-6/12 md:justify-end">
        <Button
          onPress={(e) => handleAddFilter(e.target.innerHTML)}
          className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
        >
          {info.role}
        </Button>
        <Button
          onPress={(e) => handleAddFilter(e.target.innerHTML)}
          className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
        >
          {info.level}
        </Button>
        {info.tools && info.tools.length > 0
          ? info.tools.map((elem, index) => (
              <Button
                onPress={(e) => handleAddFilter(e.target.innerHTML)}
                className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
                key={index}
              >
                {elem}
              </Button>
            ))
          : null}
        {info.languages && info.languages.length > 0
          ? info.languages.map((elem, index) => (
              <Button
                onPress={(e) => handleAddFilter(e.target.innerHTML)}
                className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
                key={index}
              >
                {elem}
              </Button>
            ))
          : null}
      </div>
    </article>
  );
};

export default Card;
