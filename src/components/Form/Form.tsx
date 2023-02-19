import { useState } from "react";
import useApi from "../../hooks/useApi";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { createRobot } = useApi();

  const [name, setName] = useState("");
  const [url, setImage] = useState("");
  const [speed, setSpeed] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [creationDate, setCreationDate] = useState("");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const newRobot = {
      name,
      url,
      id: "",
      stats: { speed, endurance, creationDate },
    };

    createRobot(newRobot);

    setName("");
    setImage("");
    setSpeed(0);
    setEndurance(0);
    setCreationDate("");
  };

  const handleName = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handleImage = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setImage(value);
  };

  const handleSpeed = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(+value);
  };

  const handleEndurance = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEndurance(+value);
  };

  const handleDate = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCreationDate(value);
  };

  return (
    <FormStyled className="form" onSubmit={onSubmitHandler}>
      <label htmlFor="Name" aria-label="Robot name" className="form__name">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        className="form__input"
        onChange={handleName}
        value={name}
      />
      <label htmlFor="Image" aria-label="Robot image" className="form__name">
        Image
      </label>
      <input
        type="text"
        placeholder="Image"
        className="form__input"
        onChange={handleImage}
        value={url}
      />
      <label htmlFor="Speed" aria-label="Speed stat" className="form__name">
        Speed
      </label>
      <input
        type="text"
        placeholder="Speed"
        className="form__input"
        onChange={handleSpeed}
        value={speed}
      />
      <label
        htmlFor="Endurance"
        aria-label="Endurance stat"
        className="form__name"
      >
        Endurance
      </label>
      <input
        type="text"
        placeholder="Endurance"
        className="form__input"
        onChange={handleEndurance}
        value={endurance}
      />
      <label
        htmlFor="Creation date"
        aria-label="Creation date"
        className="form__name"
      >
        Creation date
      </label>
      <input
        type="date"
        className="form__input"
        onChange={handleDate}
        value={creationDate}
      />
      <button type="submit" className="form__button">
        Create Robot
      </button>
    </FormStyled>
  );
};

export default Form;
