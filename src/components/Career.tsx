import "./styles/Career.css";

const certImages = Object.values(
  import.meta.glob('../assets/certifications/*.png', { eager: true, import: 'default' })
) as string[];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science and Engineering</h4>
                <h5>Lovely Professional University, Punjab</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              CGPA: 7.18. Coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Artificial Intelligence, Computer Networks, Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (12th Grade)</h4>
                <h5>Holy Child School, Bilaspur</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Key Subjects: Physics, Chemistry, Mathematics, Computer Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Infosys Springboard & Coursera</h5>
              </div>
              <h3>Aug 2025</h3>
            </div>
            <p>
              Master Generative AI & Generative AI Tools. ChatGPT-4 Prompt Engineering. 8 Certifications on Coursera in Data Science, Machine Learning, and Python.
              <br />
              <a href="https://drive.google.com/drive/folders/1ywIEEE2_UDenDALf1JYFxkhzvzJ4Lj5T?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "underline" }}>
                CERTIFICATION CRITERIA (View All Certificates)
              </a>
            </p>
          </div>
          
          <div className="cert-grid">
            {certImages.map((src, index) => (
              <img key={index} src={src} alt={`Certificate ${index + 1}`} className="cert-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
