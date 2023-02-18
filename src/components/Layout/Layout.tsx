import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
      </header>
    </LayoutStyled>
  );
};

export default Layout;
