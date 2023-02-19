import styled from "styled-components";

const RobotListStyled = styled.ul`
  display: grid;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 20px;

  li {
    width: 300px;
    display: flex;
    align-items: center;
  }
`;

export default RobotListStyled;
