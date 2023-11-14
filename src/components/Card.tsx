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
};

const Card: React.FunctionComponent<CardProps> = ({ info }) => {
  return (
    <article
      className={`${
        info.featured ? "border-primary-1" : "border-neutral-1"
      } relative pb-4 pl-4 pr-4 py-8 bg-neutral-1 rounded-md shadow-lg shadow-neutral-3 border-l-4 border-solid flex flex-col gap-4`}
    >
      <picture className="absolute top-[-20px] left-[16px] w-12 h-12">
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
          <hr />
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4">
        <span className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md">
          {info.role}
        </span>
        <span className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md">
          {info.level}
        </span>
        {info.tools && info.tools.length > 0
          ? info.tools.map((elem, index) => (
              <span
                className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
                key={index}
              >
                {elem}
              </span>
            ))
          : null}
        {info.languages && info.languages.length > 0
          ? info.languages.map((elem, index) => (
              <span
                className="bg-neutral-2 text-primary-1 font-bold px-2 py-1 rounded-md"
                key={index}
              >
                {elem}
              </span>
            ))
          : null}
      </div>
    </article>
  );
};

export default Card;
