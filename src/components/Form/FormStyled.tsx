import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
  padding: 30px;
  min-width: 100%;

  .form {
    &__section {
      display: flex;
      flex-direction: column;
      min-width: 100%;
    }

    &__input {
      border: 1px solid gray;
      border-radius: 10px;
      padding: 0 6px;
      font-size: 12px;
      height: 30px;

      @media (min-width: 600px) {
        width: 400px;
      }
    }

    &__button {
      border-radius: 10px;
      background-color: #006aff;
      color: #fff;
      width: 100%;

      @media (min-width: 600px) {
        width: 400px;
      }
    }
  }
`;

export default FormStyled;
