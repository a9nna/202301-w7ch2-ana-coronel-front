import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 428px;
  background-color: #eeebeb;
  border: none;
  border-radius: 20px;
  box-shadow: 8px 5px 15px black;
  overflow: hidden;

  :hover {
    translate: 10px;
  }

  .card {
    &__image {
      width: 100%;
      min-height: 180px;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
  }

  .card-title {
    font-size: 25px;
  }

  ul {
    width: 100%;
  }

  .list-group-item {
    width: 100%;
  }

  .buttons {
    display: flex;
    align-items: center;

    &__delete {
      :hover {
        transform: scale(1.1);
      }
    }

    &__modify {
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default CardStyled;
