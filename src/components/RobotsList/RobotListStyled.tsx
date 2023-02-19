import styled from "styled-components";

const RobotListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  li {
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

export default RobotListStyled;
