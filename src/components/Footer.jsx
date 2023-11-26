import logoLight from "../assets/logo-light.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img
          src={logoLight}
          alt="skilled light logo"
          className="logo-light"
          width={90}
          height={35}
        />

        <a href="#" className="btn btn-3">
          Get Started
        </a>
      </div>
    </footer>
  );
};

export default Footer;
