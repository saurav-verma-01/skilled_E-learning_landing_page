import heroImg from "../assets/image-hero-mobile.webp";

const Hero = () => {
  return (
    <div className="container hero">
      <div>
        <h1 className="heading-primary">Maximize skill, minimize budget</h1>
        <p className="body-text">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <a href="#" className="btn btn-2">
          Get Started
        </a>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
