import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-header__title">Robots</h1>
      </header>
    </LayoutStyled>
  );
};

export default Layout;
