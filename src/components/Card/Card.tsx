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
    <div className="card">
      <img
        src={image}
        alt={name}
        width="200"
        height="150"
        className="card-image-top"
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Speed: {speed}</li>
        <li className="list-group-item">Endurance: {endurance}</li>
        <li className="list-group-item">{creationDate}</li>
      </ul>
      <div className="card-body card__buttons buttons">
        <button
          className="card-link buttons__modify"
          aria-label="modify button"
        >
          📝
        </button>
        <button
          className="card-link buttons__delete"
          aria-label="delete button"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Card;
