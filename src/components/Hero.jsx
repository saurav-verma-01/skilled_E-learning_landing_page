// Responsive Images  using Art Direction, Resolution Switching and Density Switching

import heroMobile1x from "../assets/image-hero-mobile.webp";

import heroMobile2x from "../assets/image-hero-mobile@2x.webp";

import heroTab1x from "../assets/image-hero-tablet.webp";

import heroTab2x from "../assets/image-hero-tablet@2x.webp";

import heroDesk1x from "../assets/image-hero-desktop.webp";

import heroDesk2x from "../assets/image-hero-desktop@2x.webp";

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
      {/* Picture Tag for Art Direction along with source attribute */}
      <picture className="hero-img">
        <source
          // srcset Attribute for Density switching based on DPR of the screen
          srcSet={`${heroDesk1x} 1x, ${heroDesk2x} 2x`}
          media="(min-width: 1280px)"
          width={992}
          height={937}
        />
        <source
          // srcset Attribute for Density switching based on DPR of the screen
          srcSet={`${heroTab1x} 1x, ${heroTab2x} 2x`}
          media="(min-width: 768px)"
          width={640}
          height={640}
        />

        <img
          // srcset Attribute for Density switching based on DPR of the screen
          srcSet={`${heroMobile1x} 1x, ${heroMobile2x} 2x`}
          // sizes attribute for resolution switching ( letting the browser decide which image to download based on the width of the image on screen)
          sizes="(max-width: 767px) 69vw, (min-width: 768px) 84vw, 88vw"
          src={heroMobile1x}
          alt="hero image"
          className="hero-img"
          width={327}
          height={301}
        />
      </picture>
    </div>
  );
};

export default Hero;
