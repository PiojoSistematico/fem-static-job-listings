type CardProps = {
  info: {
    company: string;
    tags: string[];
    title: string;
    date: string;
    hours: string;
    location: string;
    requisites: string[];
  };
};

const Card: React.FunctionComponent<CardProps> = ({ info }) => {
  return (
    <article>
      <div>
        <picture>
          <img src="" alt="" />
        </picture>
        <div>
          <div>
            <h2>{info.company}</h2>
            {info.tags.map((elem, index) => (
              <span key={index}>{elem}</span>
            ))}
          </div>

          <p>{info.title}</p>
          <div>
            <span>{info.date}</span>
            <span>{info.hours}</span>
            <span>{info.location}</span>
          </div>
        </div>
      </div>
      <div>
        {info.requisites.map((elem, index) => (
          <span key={index}>{elem}</span>
        ))}
      </div>
    </article>
  );
};

export default Card;
