import React from 'react';
import '../styles/Certifications.css';

const certificates = [
  {
    id: 1,
    title: "IBM DevOps and Software Engineering",
    subtitle: "Professional Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/4e733acad3fb8501b880dfc0a0e74ecd",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XVUO8KN9RIHW/CERTIFICATE_LANDING_PAGE~XVUO8KN9RIHW.jpeg"
  },
  {
    id: 2,
    title: "IBM Applied DevOps Engineering",
    subtitle: "Professional Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/d34654168f5e688fc35cbd135b2f676e",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7F4QNIXJ95VB/CERTIFICATE_LANDING_PAGE~7F4QNIXJ95VB.jpeg"
  },

  {
    id: 3,
    title: "AWS Cloud Technical Essentials",
    subtitle: "Course Certificate",
    institution: "AWS",
    link: "https://coursera.org/share/53be5cd81c6155660dfa36d5de10242f",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7TMJ4R0PKTWK/CERTIFICATE_LANDING_PAGE~7TMJ4R0PKTWK.jpeg"
  },
  {
    id: 4,
    title: "DevOps, Cloud, and Agile Foundations",
    subtitle: "Specialization Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/5405cb422b03ffa440a3c1f3ea56e0e0",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CAS4I22DJNXK/CERTIFICATE_LANDING_PAGE~CAS4I22DJNXK.jpeg"
  },
  {
    id: 5,
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    subtitle: "Course Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/a79f5a32669ccaf54bf96c683db1891e",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FPHWUVOEV18G/CERTIFICATE_LANDING_PAGE~FPHWUVOEV18G.jpeg"
  },
  {
    id: 6,
    title: "Continuous Integration and Continuous Delivery (CI/CD)",
    subtitle: "Course Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/026ddb322a00c94ed9bafef02be04fdf",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~M167R9ZZA29C/CERTIFICATE_LANDING_PAGE~M167R9ZZA29C.jpeg"
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing",
    subtitle: "Course Certificate",
    institution: "IBM",
    link: "https://coursera.org/share/06be4cd4fb6825a53c1b70f2f64dd8ca",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~C4JTKB83W3EL/CERTIFICATE_LANDING_PAGE~C4JTKB83W3EL.jpeg"
  },
  {
    id: 8,
    title: "Blockchain Basics",
    subtitle: "Course Certificate",
    institution: "University at Buffalo",
    link: "https://coursera.org/share/edceaf74c73b4f9c3c2869a8890bd9b8",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YOEIFGI088YD/CERTIFICATE_LANDING_PAGE~YOEIFGI088YD.jpeg"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certification-container">
      <h2 className="certification-title">Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card">
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.subtitle}</p>
                <span>{cert.institution}</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* ✅ See More Certifications Button */}
      <div className="see-more-container">
        <a
          href="https://www.linkedin.com/in/mihirishanika/details/certifications"
          target="_blank"
          rel="noopener noreferrer"
          className="see-more-btn"
        >
          See More Certifications
        </a>
      </div>
    </section>
  );
};

export default Certifications;
