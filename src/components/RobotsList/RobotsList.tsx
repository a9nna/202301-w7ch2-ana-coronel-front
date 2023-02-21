import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";
import RobotListStyled from "./RobotListStyled";

const RobotsList = (): JSX.Element => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  const robots = useAppSelector((robot) => robot.robots);

  return (
    <RobotListStyled className="row row-cols-2 row-cols-md-4">
      {robots.map((robot) => (
        <li className="col" key={robot.id}>
          <Card robot={robot} />
        </li>
      ))}
    </RobotListStyled>
  );
};

export default RobotsList;
