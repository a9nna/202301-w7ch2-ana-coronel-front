import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Card from "../Card/Card";

const RobotsList = (): JSX.Element => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  const robots = useAppSelector((robot) => robot.robots);

  return (
    <ul>
      {robots.map((robot) => (
        <li>
          <Card robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotsList;
