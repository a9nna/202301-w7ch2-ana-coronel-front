import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;

  .form {
    &__input {
      border: 1px solid gray;
      border-radius: 10px;
      padding: 0 6px;
      font-size: 12px;
      height: 30px;
    }

    &__button {
      border-radius: 10px;
      background-color: #006aff;
      color: #fff;
    }
  }
`;

export default FormStyled;
