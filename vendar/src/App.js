import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">vendAR</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${activeTab === "home" ? "active" : ""}`}>
                            <a className="nav-link" href="#" onClick={() => setActiveTab("home")}>Home</a>
                        </li>
                        <li className={`nav-item ${activeTab === "team" ? "active" : ""}`}>
                            <a className="nav-link" href="#" onClick={() => setActiveTab("team")}>Our Team</a>
                        </li>
                        <li className={`nav-item ${activeTab === "report" ? "active" : ""}`}>
                            <a className="nav-link" href="#" onClick={() => setActiveTab("report")}>Report</a>
                        </li>
                        <li className={`nav-item ${activeTab === "demoVideo" ? "active" : ""}`}>
                            <a className="nav-link" href="#" onClick={() => setActiveTab("demoVideo")}>Demonstration</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="content">
                {activeTab === "home" && <Home />}
                {activeTab === "team" && <OurTeam />}
                {activeTab === "report" && <Report />}
                {activeTab === "demoVideo" && <DemoVideo />}
            </div>
        </div>
    );
}

const Home = () => {
  return (
      <div className="container mt-4">
          <h1 className="display-4 mb-4 text-center text-primary">vendAR: Revolutionizing Online Shopping</h1>
          
          <p className="lead">
              Gone are the days when online shopping was a game of guesswork. vendAR introduces a groundbreaking online shopping platform, harnessing the power of Augmented Reality (AR) and Hyper Reality (HR) to redefine how customers shop online.
          </p>

          <p>
              At the heart of vendAR lies the ambition to eradicate the tedious measurement process. With our platform, buyers can effortlessly visualize potential purchases within their homes. Imagine seeing that new couch or dining table fitting perfectly into your living space, even before buying. With vendAR, you won't just imagine – you'll experience.
          </p>

          <p>
              Users aren't merely observers; they become active participants, empowered to manipulate and position AR objects in real-time. Want to see if the vase complements your coffee table? Adjust its position with a swipe. Wondering if the bookshelf fits that corner? Resize and rotate until it's just right. It's not just about trying before buying; it's about experiencing and customizing.
          </p>

          <p>
              vendAR's fusion of Augmented Reality and Hyper Reality transforms online shopping from a two-dimensional experience into an interactive journey. By bridging the divide between digital and tangible worlds, we're offering customers a tactile, immersive shopping journey—all from the comfort of their homes. This not only simplifies decision-making but also amplifies confidence in purchases, as customers can now interact, engage, and visualize with unparalleled precision.
          </p>

          <p className="font-weight-bold">
              Join us in reshaping the future of e-commerce. With vendAR, you don't just shop—you experience.
          </p>
      </div>
  );
}


const OurTeam = () => {
    const teamMembers = [
        { name: "Ege Ayan", email: "ege.ayan@ug.bilkent.edu.tr", github: "https://github.com/ege-ayan", image_src: "ege.jpg", linkedin: "https://www.linkedin.com/in/ege-ayan/" },
        { name: "Deniz Çelik", email: "denizc@ug.bilkent.edu.tr", github: "https://github.com/denizc-bilkent", image_src: "deniz.jpg", linkedin: "https://www.linkedin.com/in/denizcelik1057/" },
        { name: "Mehmet Feyyaz Küçük", email: "feyyaz.kucuk@ug.bilkent.edu.tr", github: "https://github.com/mfkucuk", image_src: "feyyaz.jpg", linkedin: "https://www.linkedin.com/in/mehmet-feyyaz-kucuk-9305661b4/" },
        { name: "Ender Utlu", email: "ender.utlu@ug.bilkent.edu.tr", github: "https://github.com/enderutlu", image_src: "ender.jpg", linkedin: "https://www.linkedin.com/in/ender-utlu-5aa67a1b4/" },
        { name: "Parsa Keihan", email: "parsa.keihan@ug.bilkent.edu.tr", github: "https://github.com/Parsa23k", image_src: "parsa.jpg", linkedin: "https://www.linkedin.com/in/parsakeihan/" },
    ];

    const supervisor = { name: "Uğur Güdükbay", email: "supervisor@email.com", linkedin: "https://www.linkedin.com/in/ugur-gudukbay-7846701a/" };
    const innovationExpert = { name: "Cem Çimenbiçer", email: "innovationExpert@email.com", linkedin: "https://www.linkedin.com/in/daegoth/" };

    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        padding: '10px 0',
        marginTop: '1vh'
    };

    const iconStyle = {
        marginRight: '8px'
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Meet our team!</h2>

            <div className="d-flex flex-wrap justify-content-center mb-6">
                {teamMembers.map(member => (
                    <div className="card m-2" style={{ width: '15rem' }} key={member.name}>
                        <img src={member.image_src} className="card-img-top" alt={`${member.name}`} />
                        <div className="card-body text-center d-flex flex-column">
                            <h5 className="card-title">{member.name}</h5>
                            <p className="card-text" style={{ fontSize: "14px" }}>{member.email}</p>
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={buttonStyle}>
                                <i className="fab fa-github" style={iconStyle}></i> GitHub
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={buttonStyle}>
                                <i className="fab fa-linkedin" style={iconStyle}></i> LinkedIn
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row mb-6">
                {/* Supervisor Card */}
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Our Supervisor</h2>
                    <div className="card m-2 mx-auto" style={{ width: '18rem' }}>
                        {/* Uncomment the line below if you have an image for the supervisor */}
                        {/* <img src={supervisor.image_src} className="card-img-top" alt={`${supervisor.name}`} /> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">{supervisor.name}</h5>
                            <a href={supervisor.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={buttonStyle}>
                                <i className="fab fa-linkedin" style={iconStyle}></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Innovation Expert Card */}
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Our Innovation Expert</h2>
                    <div className="card m-2 mx-auto" style={{ width: '18rem' }}>
                        {/* Uncomment the line below if you have an image for the innovation expert */}
                        {/* <img src={innovationExpert.image_src} className="card-img-top" alt={`${innovationExpert.name}`} /> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">{innovationExpert.name}</h5>
                            <a href={innovationExpert.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={buttonStyle}>
                                <i className="fab fa-linkedin" style={iconStyle}></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Report = () => {
    const pdfButtonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        padding: '10px 0'
    };

    const iconStyle = {
        marginRight: '8px'
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Project Reports</h2>
            
            <div className="row">
                <div className="col-md-3">
                    <div style={{height: '24vh'}} className="card d-flex flex-column">
                        <div className="card-body flex-grow-1 d-flex flex-column">
                            <h5 className="card-title">Project Specification Report</h5>
                            <p className="card-text flex-grow-1">This is the Project Specification Report. It was written in 17th of November 2023.</p>
                            <a href="CS491_Project_Speficiation_2.pdf" className="btn btn-primary mt-auto" style={pdfButtonStyle} download>
                                <i className="fas fa-file-pdf" style={iconStyle}></i> Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{height: '24vh'}} className="card d-flex flex-column">
                        <div className="card-body flex-grow-1 d-flex flex-column">
                            <h5 className="card-title">Analysis and Requirement Report</h5>
                            <p className="card-text flex-grow-1">This is the Analysis and Requirement Report. It was written in 8th of December 2023.</p>
                            <a href="CS491_Analysis_and_Requirement_Report_1.pdf" className="btn btn-primary mt-auto" style={pdfButtonStyle} download>
                                <i className="fas fa-file-pdf" style={iconStyle}></i> Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{height: '24vh'}} className="card d-flex flex-column">
                        <div className="card-body flex-grow-1 d-flex flex-column">
                            <h5 className="card-title">Project Design Report</h5>
                            <p className="card-text flex-grow-1">This is the Analysis and Requirement Report. It was written in 15th of March 2024.</p>
                            <a href="CS492_Detailed_Design_Report.pdf" className="btn btn-primary mt-auto" style={pdfButtonStyle} download>
                                <i className="fas fa-file-pdf" style={iconStyle}></i> Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div style={{height: '24vh'}} className="card d-flex flex-column">
                        <div className="card-body flex-grow-1 d-flex flex-column">
                            <h5 className="card-title">Project Final Report</h5>
                            <p className="card-text flex-grow-1">This is the Final Report. It also includes a user's manual as well. It was written in 10th of May 2024.</p>
                            <a href="T2330_Final_report.pdf" className="btn btn-primary mt-auto" style={pdfButtonStyle} download>
                                <i className="fas fa-file-pdf" style={iconStyle}></i> Download PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 text-center">
                <h2>vendAR Repository</h2>
                <p>Explore our project on GitHub for more details and source code.</p>
                <a href="https://github.com/vendAR-project/vendAR" className="btn btn-dark" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fab fa-github" style={iconStyle}></i> vendAR Repository
                </a>
            </div>
        </div>
    );
}

const DemoVideo = () => {
    // CSS styles for the video container
    const videoContainerStyle = {
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0,
      overflow: 'hidden'
    };
  
    // CSS styles for the iframe
    const iframeStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '66%' // Adjusted height to take up full container height
    };
  
    return (
      <div className="container-fluid mt-5 text-center">
        <div style={videoContainerStyle}>
          <iframe
            style={iframeStyle}
            src="https://www.youtube.com/embed/7fhMZasqlzQ?autoplay=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Demo Video"
          ></iframe>
        </div>
      </div>
    );
};
export default App;
