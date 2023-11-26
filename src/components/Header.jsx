import logo from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <header className="container header">
      <img
        src={logo}
        alt="skilled e-learning company logo"
        className="logo"
        width={90}
        height={35}
      />

      <a href="#" className="btn btn-1">
        Get Started
      </a>
    </header>
  );
};

export default Header;
