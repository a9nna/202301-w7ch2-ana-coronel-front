import { useState } from "react";
import useApi from "../../hooks/useApi/useApi";
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
      <h2>Create your Robot</h2>
      <div className="form__section">
        <label htmlFor="Name" aria-label="name" className="form__name">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="form__input"
          onChange={handleName}
          value={name}
        />
      </div>
      <div className="form__section">
        <label htmlFor="Image" aria-label="image" className="form__name">
          Image
        </label>
        <input
          type="text"
          placeholder="Image"
          className="form__input"
          onChange={handleImage}
          value={url}
        />
      </div>
      <div className="form__section">
        <label htmlFor="Speed" aria-label="speed" className="form__name">
          Speed
        </label>
        <input
          type="text"
          placeholder="Speed"
          className="form__input"
          onChange={handleSpeed}
          value={speed}
        />
      </div>
      <div className="form__section">
        <label
          htmlFor="Endurance"
          aria-label="endurance"
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
      </div>
      <div className="form__section">
        <label
          htmlFor="Creation date"
          aria-label="creation-date"
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
      </div>
      <button type="submit" className="form__button">
        Create Robot
      </button>
    </FormStyled>
  );
};

export default Form;
