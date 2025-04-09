import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Application Developer</h4>
                <h5> India</h5>
              </div>
              <h3>01-01</h3>
            </div>
            <p>
            Developed IoT applications
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead</h4>
                <h5>India</h5>
              </div>
              <h3>02-02</h3>
            </div>
            <p>
            Led a team of developers
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead - </h4>
                <h5>India</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Spearheaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
