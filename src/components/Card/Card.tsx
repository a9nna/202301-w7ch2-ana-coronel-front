import { RobotStructure } from "../../types/types";

interface CardProps {
  robot: RobotStructure;
}

const Card = ({
  robot: {
    url: image,
    name,
    stats: { creationDate, endurance, speed },
  },
}: CardProps): JSX.Element => {
  return (
    <article className="card">
      <img
        src="https://media.vandal.net/i/620x387/1-2022/20221181037175_1.jpg"
        alt="Terminator"
        width="200"
        height="150"
        className="card__image"
      />
      <h2 className="card__title">{name}</h2>
      <div className="card__info-top">
        <span>Speed: {speed}</span>
        <span>Endurance: {endurance}</span>
      </div>
      <span className="card__info-bottom">Creation date: {creationDate}</span>
      <div className="card__buttons buttons">
        <button className="buttons__modify" aria-label="modify button">
          📝
        </button>
        <button className="buttons__delete" aria-label="delete button">
          🗑️
        </button>
      </div>
    </article>
  );
};

export default Card;
