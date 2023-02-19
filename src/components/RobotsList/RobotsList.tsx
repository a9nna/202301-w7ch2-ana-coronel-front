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
    <ul className="row row-cols-2 row-cols-md-4">
      {robots.map((robot) => (
        <li className="col" key={robot.url}>
          <Card robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotsList;
