import { RobotStructure } from "../../types/types";
import RemoveButton from "../RemoveButton/RemoveButton";
import CardStyled from "./CardStyled";

interface CardProps {
  robot: RobotStructure;
}

const Card = ({ robot }: CardProps): JSX.Element => {
  const localDateFormat = robot.stats.creationDate
    .toLocaleString()
    .split("T")[0];

  return (
    <CardStyled className="card">
      <img
        src={robot.url}
        alt={robot.name}
        width="300"
        height="180"
        className="card-image-top card__image"
      />
      <div className="card-body">
        <h2 className="card-title">{robot.name}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Speed: {robot.stats.speed}</li>
        <li className="list-group-item">Endurance: {robot.stats.endurance}</li>
        <li className="list-group-item">Creation: {localDateFormat}</li>
      </ul>
      <div className="card-body card__buttons buttons">
        <button
          className="card-link buttons__modify"
          aria-label="modify button"
        >
          📝
        </button>
        <RemoveButton robot={robot} />
      </div>
    </CardStyled>
  );
};

export default Card;
