import useApi from "../../hooks/useApi/useApi";
import { RobotStructure } from "../../types/types";
import Button from "../Button/Button";

interface RemoveButtonProps {
  robot: RobotStructure;
}

const RemoveButton = ({ robot }: RemoveButtonProps): JSX.Element => {
  const { deleteRobots } = useApi();

  return <Button icon="🗑️" actionOnClick={() => deleteRobots(robot)} />;
};

export default RemoveButton;
