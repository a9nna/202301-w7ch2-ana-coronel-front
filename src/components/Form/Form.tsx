import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled className="form">
      <label htmlFor="Name" aria-label="Robot name" className="form__name">
        Name
      </label>
      <input type="text" placeholder="Name" className="form__input" />
      <label htmlFor="Image" aria-label="Robot image" className="form__name">
        Image
      </label>
      <input type="text" placeholder="Image" className="form__input" />
      <label htmlFor="Speed" aria-label="Speed stat" className="form__name">
        Speed
      </label>
      <input type="text" placeholder="Speed" className="form__input" />
      <label
        htmlFor="Endurance"
        aria-label="Endurance stat"
        className="form__name"
      >
        Endurance
      </label>
      <input type="text" placeholder="Endurance" className="form__input" />
      <label
        htmlFor="Creation date"
        aria-label="Creation date"
        className="form__name"
      >
        Creation date
      </label>
      <input type="date" className="form__input" />
      <button type="submit" className="form__button">
        Create Robot
      </button>
    </FormStyled>
  );
};

export default Form;
