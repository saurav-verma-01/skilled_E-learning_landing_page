import courseIcon1 from "../assets/icon-animation.svg";
import courseIcon2 from "../assets/icon-design.svg";
import courseIcon3 from "../assets/icon-photography.svg";

import courseIcon4 from "../assets/icon-crypto.svg";

import courseIcon5 from "../assets/icon-business.svg";

const Courses = () => {
  return (
    <section className="course-container">
      <div className="container courses">
        <div className="courses-heading">
          <h2 className="heading-secondary">
            Check out our most popular courses!
          </h2>
        </div>

        <div className="course">
          <div className="course-icon">
            <img
              src={courseIcon1}
              alt="animation course"
              className="icon"
              width={56}
              height={56}
            />
          </div>
          <h3 className="heading-tertiary course-title">Animation</h3>
          <p className="course-text body-text">
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <a href="#" className="course-link">
            Get Started
          </a>
        </div>

        <div className="course">
          <div className="course-icon">
            <img
              src={courseIcon2}
              alt="animation course"
              className="icon"
              width={56}
              height={56}
            />
          </div>
          <h3 className="heading-tertiary course-title">Design</h3>
          <p className="course-text body-text">
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <a href="#" className="course-link">
            Get Started
          </a>
        </div>

        <div className="course">
          <div className="course-icon">
            <img
              src={courseIcon3}
              alt="animation course"
              className="icon"
              width={56}
              height={56}
            />
          </div>
          <h3 className="heading-tertiary course-title">Photography</h3>
          <p className="course-text body-text">
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <a href="#" className="course-link">
            Get Started
          </a>
        </div>

        <div className="course">
          <div className="course-icon">
            <img
              src={courseIcon5}
              alt="animation course"
              className="icon"
              width={56}
              height={56}
            />
          </div>
          <h3 className="heading-tertiary course-title">Business</h3>
          <p className="course-text body-text">
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <a href="#" className="course-link">
            Get Started
          </a>
        </div>
        <div className="course">
          <div className="course-icon">
            <img
              src={courseIcon4}
              alt="animation course"
              className="icon"
              width={56}
              height={56}
            />
          </div>
          <h3 className="heading-tertiary course-title">Crypto</h3>
          <p className="course-text body-text">
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <a href="#" className="course-link">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
