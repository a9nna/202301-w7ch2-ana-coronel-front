import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <label htmlFor="">Name</label>
      <input type="text" />
      <label htmlFor="">Image</label>
      <input type="text" />
      <label htmlFor="">Speed</label>
      <input type="text" />
      <label htmlFor="">Endurance</label>
      <input type="text" />
      <label htmlFor="">Creation date</label>
      <input type="date" />
      <button type="submit"></button>
    </FormStyled>
  );
};

export default Form;
