import tesla from "../assets/tesla.png";

const Header = (props) => {
  return (
    <>
      <img alt="logo" src={tesla} />
      <h1>{props.title}</h1>
    </>
  );
};

export default Header;
