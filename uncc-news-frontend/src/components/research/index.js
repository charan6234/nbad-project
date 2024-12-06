import React from "react";
import "./index.css";
import { Row, Col } from "reactstrap";
import chemistryBanner from "../../assets/chemistry-banner.webp";
import cyberBanner from "../../assets/cyber-security-banner.webp";
import aiBanner from "../../assets/ai-banner.webp";
import constructionBanner from "../../assets/construction-banner.webp";
import eeBanner from "../../assets/electric-electronic-banner.webp";
import physicsBanner from "../../assets/physics-banner.webp";
import iotBanner from "../../assets/iot-banner.webp";
import aerospaceBanner from "../../assets/aerospace-banner.webp";


const ChemistryResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${chemistryBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Exploring the Building Blocks of Nature for a Better Tomorrow</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Chemistry Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            The Department of Chemistry at UNC Charlotte is a hub of innovation and exploration, where we delve into the molecular mysteries of the natural world. Our researchers are dedicated to advancing scientific knowledge that directly impacts society, from improving human health and sustainable energy to addressing environmental challenges.<br /><br />
            Our faculty members are experts in a wide range of fields, including organic chemistry, inorganic chemistry, physical chemistry, and biochemistry. We offer cutting-edge research opportunities for undergraduate and graduate students, providing hands-on experience in state-of-the-art laboratories.<br /><br />
            Whether you are a student, faculty member, or industry partner, we invite you to explore the exciting world of chemistry research at UNC Charlotte. Join us in our quest to unlock the secrets of the universe and create a brighter future for all.<br /><br />
            Explore Chemistry at UNC Charlotte —<i> where curiosity meets discovery.</i>
            <br />
          </p>
        </Col>
      </Row>
    </div >
  );

};
const CyberResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${cyberBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Securing the Digital Future: Innovation Meets Protection</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Cybersecurity Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            The Cybersecurity Research Center at UNC Charlotte is at the forefront of protecting digital systems and advancing the field of cybersecurity. Our mission is to address critical challenges in data security, network protection, and cyber-resilience by fostering innovation and developing cutting-edge solutions.<br /><br />Our research spans key areas, including cryptography, network security, threat detection, ethical hacking, and artificial intelligence-driven defense mechanisms. By leveraging advanced tools, simulations, and real-world data, our experts work to outpace evolving cyber threats and ensure the safety of sensitive information and digital infrastructures.<br /><br />We collaborate closely with industries, government agencies, and academic institutions to create a comprehensive approach to cybersecurity. Our researchers benefit from state-of-the-art facilities and funding support for exceptional projects, enabling breakthroughs that shape the future of digital security.<br /><br />Whether you are a student eager to explore the world of cybersecurity or a partner looking for impactful collaboration, our research community offers unmatched opportunities to make a difference. Together, we are building a secure digital landscape and empowering the next generation of cybersecurity leaders.<br /><br />Explore Cybersecurity at UNC Charlotte — <i>where innovation secures the future.</i>
            <br />
          </p>
        </Col>
      </Row>
    </div >
  );

};
const AIResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${aiBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Shaping Tomorrow Through the Power of Intelligence</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Artificial Intelligence Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            At UNC Charlotte, Artificial Intelligence (AI) research is transforming the way we interact with technology, solve complex problems, and envision the future. As a leader in innovation, our research community is dedicated to advancing AI to improve lives, industries, and societies worldwide.<br/><br/>Our work spans a broad spectrum of AI domains, including machine learning, natural language processing, computer vision, robotics, and ethical AI. From developing smarter algorithms to creating autonomous systems, our researchers tackle challenges in healthcare, education, business, and beyond, ensuring AI serves humanity responsibly and effectively.<br/><br/>With access to cutting-edge laboratories, data platforms, and interdisciplinary collaborations, our scholars and students contribute to groundbreaking innovations. Select outstanding projects receive institutional funding and support, encouraging the exploration of bold, transformative ideas.<br/><br/>Join us as we push the boundaries of technology and unlock the immense potential of artificial intelligence. Whether you are an aspiring AI researcher, an academic, or an industry partner, UNC Charlotte offers a dynamic ecosystem for impactful AI research and development.<br/><br/>Explore Artificial Intelligence at UNC Charlotte — <i>where technology meets creativity and intelligence shapes the future.</i><br />
          </p>
        </Col>
      </Row>
    </div >
  );

};
const ConstructionResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${constructionBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Building Sustainable Cities, Shaping a Better Future</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Construction & Urban Planning Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            At UNC Charlotte, our research in Construction and Urban Planning focuses on designing and building resilient, sustainable, and innovative urban spaces. We address global challenges such as urbanization, climate change, and infrastructure development, empowering communities with forward-thinking solutions.<br/><br/>Our research encompasses a wide range of topics, including smart city planning, green building technologies, transportation systems, and disaster-resilient infrastructure. By combining advanced technologies with interdisciplinary collaboration, we aim to create urban environments that are not only functional but also inclusive and environmentally friendly.<br/><br/>Our faculty, students, and industry partners work in state-of-the-art facilities, engaging in groundbreaking projects that integrate sustainable design, emerging technologies, and urban development strategies. We provide funding and institutional support for select high-impact projects, fostering innovation and transformative results.<br/><br/>Whether you are a student passionate about urban planning or an industry leader seeking collaborative research opportunities, UNC Charlotte offers a vibrant platform to make a meaningful impact. Join us in shaping the cities of tomorrow and building a world that balances progress with sustainability.<br/><br/>Explore Construction & Urban Planning at UNC Charlotte — <i>where innovation meets infrastructure.</i></p>
        </Col>
      </Row>
    </div >
  );

};
const EEResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${eeBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Empowering Innovation Through Electric and Electronic Advancements</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Electrical & Electronic Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            The Electrical and Electronic Research division at UNC Charlotte is at the forefront of technological advancement, driving innovation across industries. Our researchers work on cutting-edge projects to address challenges in power systems, electronics, and emerging technologies, shaping a future powered by efficiency and sustainability.<br/><br/>Our research spans diverse fields such as renewable energy systems, microelectronics, embedded systems, IoT devices, and robotics. We focus on harnessing the potential of modern electronics and electrical engineering to improve communication, automation, and energy efficiency. From developing smarter grids to designing advanced electronic devices, we aim to deliver impactful solutions that address global needs.<br/><br/>Supported by state-of-the-art facilities and collaborative environments, our faculty and students engage in groundbreaking research that bridges academia and industry. Select high-impact projects receive institutional funding, enabling researchers to explore transformative ideas and achieve significant breakthroughs.<br/><br/>Whether you are a student eager to innovate or an industry leader seeking collaboration, UNC Charlotte provides a thriving ecosystem for impactful research. Join us in exploring the endless possibilities of electrical and electronic engineering to shape a smarter, more connected world.<br/><br/>Explore Electrical & Electronic Research at UNC Charlotte — <i>where power meets progress.</i></p></Col>
      </Row>
    </div >
  );

};
const PhysicsResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${physicsBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Unraveling the Mysteries of the Universe Through Science</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Physics Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            At UNC Charlotte, our Physics research delves into the fundamental principles that govern the universe, from the smallest particles to the largest cosmic structures. Our mission is to explore the unknown, drive innovation, and apply theoretical insights to solve real-world challenges.<br/><br/>Our research spans cutting-edge areas such as quantum mechanics, astrophysics, condensed matter physics, and energy studies. We focus on topics like particle behavior, gravitational forces, and advanced materials, contributing to breakthroughs in technology, healthcare, and energy solutions. From understanding the origins of the universe to developing sustainable technologies, our work has far-reaching impacts.<br/><br/>With access to advanced laboratories, telescopes, and computational tools, our faculty and students engage in groundbreaking studies. Select projects with exceptional promise receive funding and institutional support, empowering researchers to push the boundaries of knowledge.<br/><br/>Whether you’re a student passionate about scientific discovery or a collaborator eager to partner on transformative projects, UNC Charlotte’s Physics research community offers opportunities to expand your horizons. Join us in uncovering the secrets of the universe and advancing humanity’s understanding of the cosmos.<br/><br/>Explore Physics at UNC Charlotte — <i>where curiosity meets discovery.</i>
            </p>
            </Col>
      </Row>
    </div >
  );

};
const IOTResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${iotBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Connecting the World, One Smart Device at a Time</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to IoT Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            At UNC Charlotte, our Internet of Things (IoT) research bridges the digital and physical worlds, revolutionizing the way devices, systems, and people interact. We aim to create innovative, connected solutions that address challenges across industries and improve quality of life.<br/><br/>Our research spans diverse IoT applications, including smart cities, healthcare monitoring, industrial automation, and intelligent transportation systems. From designing advanced sensors and cloud platforms to developing energy-efficient networks and data security protocols, our work is at the forefront of IoT technology.<br/><br/>Equipped with cutting-edge facilities and interdisciplinary collaborations, our researchers explore innovative ways to enhance connectivity, optimize performance, and ensure sustainability. High-impact projects with the potential to transform industries receive institutional funding and support, driving groundbreaking advancements in IoT.<br/><br/>Whether you’re a student eager to shape the future of connectivity or an industry partner looking to collaborate on impactful solutions, UNC Charlotte offers a dynamic ecosystem for IoT research. Join us in harnessing the power of smart technology to build a connected and sustainable world.<br/><br/>Explore IoT at UNC Charlotte — <i>where technology transforms lives.</i></p>
            </Col>
      </Row>
    </div >
  );

};
const AerospaceResearch = () => {
  return (
    <div className="my-5 pt-4" id="research">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${aerospaceBanner})`,
          width: "100%",
          height: "450px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="header px-5 d-flex justify-content-center align-items-center">
          <p>Reaching New Heights: Innovating the Future of Flight and Space</p>
        </div>
      </div>
      <Row className="container mt-5 m-auto">
        <Col md={12}>
          <b>
            <span className="fw-bold fs-2">Welcome to Aerospace Engineering Research at UNC Charlotte</span>
          </b>
          <p className="fs-5">
            <br />
            At UNC Charlotte, our Aerospace Engineering research drives innovation in aviation, space exploration, and advanced technology. We aim to address global challenges in aerospace design, propulsion systems, and sustainable flight, shaping the future of the aerospace industry.<br/><br/>Our research encompasses a wide range of topics, including aerodynamic optimization, spacecraft technology, unmanned aerial systems, and eco-friendly propulsion methods. From designing next-generation aircraft to developing satellite systems and exploring interplanetary missions, our work is at the forefront of cutting-edge aerospace advancements.<br/><br/>Equipped with state-of-the-art wind tunnels, simulation labs, and collaboration with leading industries, our researchers have the tools and partnerships needed to make groundbreaking discoveries. High-potential projects receive institutional support, enabling transformative research that pushes the boundaries of what’s possible in aerospace engineering.<br/><br/>Whether you’re a student inspired to shape the future of flight or a collaborator seeking impactful innovation, UNC Charlotte’s Aerospace Engineering research community offers endless opportunities. Join us in advancing the frontiers of aerospace technology and exploration.<br/><br/>Explore Aerospace Engineering at UNC Charlotte — <i>where innovation takes flight.</i></p>
            </Col>
      </Row>
    </div >
  );

};
const research = { ChemistryResearch, CyberResearch, AIResearch,ConstructionResearch,EEResearch,PhysicsResearch,IOTResearch,AerospaceResearch};

export default research;
