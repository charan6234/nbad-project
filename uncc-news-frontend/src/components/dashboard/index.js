import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import React from "react";
import { Col, Row } from "reactstrap";
import "./index.css";
import chemical from "../../assets/chemical.webp";
import chemistryBanner from "../../assets/chemistry-banner.webp";
import cyberBanner from "../../assets/cyber-security-banner.webp";
import aiBanner from "../../assets/ai-banner.webp";
import constructionBanner from "../../assets/construction-banner.webp";
import electricalBanner from "../../assets/electric-electronic-banner.webp";
import physicsBanner from "../../assets/physics-banner.webp";
import iosBanner from "../../assets/iot-banner.webp";
import aerospaceBanner from "../../assets/aerospace-banner.webp";
import cyber from "../../assets/cyber.webp";
import ai from "../../assets/ai.webp";
import construction from "../../assets/construction.webp";
import electrical from "../../assets/electronic.webp";
import iot from "../../assets/iot.webp";
import physics from "../../assets/physics.webp";
import aerospace from "../../assets/aerospace.webp";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <div className="container my-5 pt-5">
        <Row className="g-3">
          <Col md={12}>
            <h3 className="heading"> Major Research Areas</h3>
          </Col>
          <Col md={3}>
            <Link
              to="/research/chemistry"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Exploring the Building Blocks of Nature for a Better Tomorrow"
                  );
                  window.localStorage.setItem("image", chemistryBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Chemistry Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "The Department of Chemistry at UNC Charlotte is a hub of innovation and exploration, where we delve into the molecular mysteries of the natural world. Our researchers are dedicated to advancing scientific knowledge that directly impacts society, from improving human health and sustainable energy to addressing environmental challenges.\nOur chemistry research spans diverse fields, including organic synthesis, material science, biochemistry, and environmental chemistry. We focus on solving critical global issues, such as developing new drugs, designing advanced materials, and discovering sustainable solutions for clean energy. With access to cutting-edge laboratories, modern instrumentation, and collaborative environments, our researchers are empowered to conduct transformative studies.\nAt UNC Charlotte, we celebrate interdisciplinary collaboration, bringing together chemists, biologists, engineers, and physicists to tackle complex scientific questions. We are proud to support our researchers through funding opportunities for select projects that demonstrate exceptional potential for innovation and societal impact.\nWhether you're a student, faculty member, or partner, our chemistry research community offers endless opportunities for discovery and growth. Join us in unraveling the secrets of the molecular world and making a lasting difference in the way we understand and interact with it.\nExplore Chemistry at UNC Charlotte—where curiosity meets discovery."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  <h3 className="slide">Chemistry</h3>
                  <CardImg
                    className="image"
                    src={chemical}
                    top={true}
                    alt="Chemical"
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Chemistry</CardTitle>
                  <CardText>
                    Chemistry Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/cyber-security"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Securing the Digital Future: Innovation Meets Protection"
                  );
                  window.localStorage.setItem("image", cyberBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Cybersecurity Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "The Cybersecurity Research Center at UNC Charlotte is at the forefront of protecting digital systems and advancing the field of cybersecurity. Our mission is to address critical challenges in data security, network protection, and cyber-resilience by fostering innovation and developing cutting-edge solutions.\nOur research spans key areas, including cryptography, network security, threat detection, ethical hacking, and artificial intelligence-driven defense mechanisms. By leveraging advanced tools, simulations, and real-world data, our experts work to outpace evolving cyber threats and ensure the safety of sensitive information and digital infrastructures.\nWe collaborate closely with industries, government agencies, and academic institutions to create a comprehensive approach to cybersecurity. Our researchers benefit from state-of-the-art facilities and funding support for exceptional projects, enabling breakthroughs that shape the future of digital security.\nWhether you are a student eager to explore the world of cybersecurity or a partner looking for impactful collaboration, our research community offers unmatched opportunities to make a difference. Together, we are building a secure digital landscape and empowering the next generation of cybersecurity leaders.\nExplore Cybersecurity at UNC Charlotte—where innovation secures the future."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Cyber Security</h3>
                  <CardImg src={cyber} className="image" alt="Cyber" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Cyber Security</CardTitle>

                  <CardText>
                    Cybersecurity Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/artificial-intelligence"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Shaping Tomorrow Through the Power of Intelligence"
                  );
                  window.localStorage.setItem("image", aiBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Artificial Intelligence Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "At UNC Charlotte, Artificial Intelligence (AI) research is transforming the way we interact with technology, solve complex problems, and envision the future. As a leader in innovation, our research community is dedicated to advancing AI to improve lives, industries, and societies worldwide.\nOur work spans a broad spectrum of AI domains, including machine learning, natural language processing, computer vision, robotics, and ethical AI. From developing smarter algorithms to creating autonomous systems, our researchers tackle challenges in healthcare, education, business, and beyond, ensuring AI serves humanity responsibly and effectively.\nWith access to cutting-edge laboratories, data platforms, and interdisciplinary collaborations, our scholars and students contribute to groundbreaking innovations. Select outstanding projects receive institutional funding and support, encouraging the exploration of bold, transformative ideas.\nJoin us as we push the boundaries of technology and unlock the immense potential of artificial intelligence. Whether you are an aspiring AI researcher, an academic, or an industry partner, UNC Charlotte offers a dynamic ecosystem for impactful AI research and development.\nExplore Artificial Intelligence at UNC Charlotte—where technology meets creativity and intelligence shapes the future."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Artificial Intelligence</h3>
                  <CardImg className="image" src={ai} alt="AI" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Artificial Intelligence</CardTitle>
                  <CardText>
                    Artificial Intelligence Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/construction"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Building Sustainable Cities, Shaping a Better Future"
                  );
                  window.localStorage.setItem("image", constructionBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Construction & Urban Planning Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "At UNC Charlotte, our research in Construction and Urban Planning focuses on designing and building resilient, sustainable, and innovative urban spaces. We address global challenges such as urbanization, climate change, and infrastructure development, empowering communities with forward-thinking solutions.\nOur research encompasses a wide range of topics, including smart city planning, green building technologies, transportation systems, and disaster-resilient infrastructure. By combining advanced technologies with interdisciplinary collaboration, we aim to create urban environments that are not only functional but also inclusive and environmentally friendly.\nOur faculty, students, and industry partners work in state-of-the-art facilities, engaging in groundbreaking projects that integrate sustainable design, emerging technologies, and urban development strategies. We provide funding and institutional support for select high-impact projects, fostering innovation and transformative results.\nWhether you are a student passionate about urban planning or an industry leader seeking collaborative research opportunities, UNC Charlotte offers a vibrant platform to make a meaningful impact. Join us in shaping the cities of tomorrow and building a world that balances progress with sustainability.\nExplore Construction & Urban Planning at UNC Charlotte—where innovation meets infrastructure."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Construction</h3>
                  <CardImg className="image" src={construction} alt="AI" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Construction & Urban Plan</CardTitle>

                  <CardText>
                    Construction & Urban Planning Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/electrical-electronics"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Empowering Innovation Through Electric and Electronic Advancements"
                  );
                  window.localStorage.setItem("image", electricalBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Electrical & Electronic Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "The Electrical and Electronic Research division at UNC Charlotte is at the forefront of technological advancement, driving innovation across industries. Our researchers work on cutting-edge projects to address challenges in power systems, electronics, and emerging technologies, shaping a future powered by efficiency and sustainability.\nOur research spans diverse fields such as renewable energy systems, microelectronics, embedded systems, IoT devices, and robotics. We focus on harnessing the potential of modern electronics and electrical engineering to improve communication, automation, and energy efficiency. From developing smarter grids to designing advanced electronic devices, we aim to deliver impactful solutions that address global needs.\nSupported by state-of-the-art facilities and collaborative environments, our faculty and students engage in groundbreaking research that bridges academia and industry. Select high-impact projects receive institutional funding, enabling researchers to explore transformative ideas and achieve significant breakthroughs.\nWhether you are a student eager to innovate or an industry leader seeking collaboration, UNC Charlotte provides a thriving ecosystem for impactful research. Join us in exploring the endless possibilities of electrical and electronic engineering to shape a smarter, more connected world.\nExplore Electrical & Electronic Research at UNC Charlotte—where power meets progress."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Electrical & Electronic</h3>
                  <CardImg
                    className="image"
                    src={electrical}
                    alt="Electrical"
                    top
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Electrical & Electronic</CardTitle>
                  <CardText>
                    Electrical & Electronic Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/physics"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Unraveling the Mysteries of the Universe Through Science"
                  );
                  window.localStorage.setItem("image", physicsBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Physics Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "At UNC Charlotte, our Physics research delves into the fundamental principles that govern the universe, from the smallest particles to the largest cosmic structures. Our mission is to explore the unknown, drive innovation, and apply theoretical insights to solve real-world challenges.\nOur research spans cutting-edge areas such as quantum mechanics, astrophysics, condensed matter physics, and energy studies. We focus on topics like particle behavior, gravitational forces, and advanced materials, contributing to breakthroughs in technology, healthcare, and energy solutions. From understanding the origins of the universe to developing sustainable technologies, our work has far-reaching impacts.\nWith access to advanced laboratories, telescopes, and computational tools, our faculty and students engage in groundbreaking studies. Select projects with exceptional promise receive funding and institutional support, empowering researchers to push the boundaries of knowledge.\nWhether you’re a student passionate about scientific discovery or a collaborator eager to partner on transformative projects, UNC Charlotte’s Physics research community offers opportunities to expand your horizons. Join us in uncovering the secrets of the universe and advancing humanity’s understanding of the cosmos.\nExplore Physics at UNC Charlotte—where curiosity meets discovery."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Physics</h3>
                  <CardImg className="image" src={physics} alt="Physics" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Physics </CardTitle>
                  <CardText>
                    Physics Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/iot"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Reaching New Heights: Innovating the Future of Flight and Space"
                  );
                  window.localStorage.setItem("image", iosBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to IoT Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "At UNC Charlotte, our Internet of Things (IoT) research bridges the digital and physical worlds, revolutionizing the way devices, systems, and people interact. We aim to create innovative, connected solutions that address challenges across industries and improve quality of life.\nOur research spans diverse IoT applications, including smart cities, healthcare monitoring, industrial automation, and intelligent transportation systems. From designing advanced sensors and cloud platforms to developing energy-efficient networks and data security protocols, our work is at the forefront of IoT technology.\nEquipped with cutting-edge facilities and interdisciplinary collaborations, our researchers explore innovative ways to enhance connectivity, optimize performance, and ensure sustainability. High-impact projects with the potential to transform industries receive institutional funding and support, driving groundbreaking advancements in IoT.\nWhether you’re a student eager to shape the future of connectivity or an industry partner looking to collaborate on impactful solutions, UNC Charlotte offers a dynamic ecosystem for IoT research. Join us in harnessing the power of smart technology to build a connected and sustainable world.\nExplore IoT at UNC Charlotte—where technology transforms lives."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">IoT</h3>
                  <CardImg className="image" src={iot} alt="iot" top />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Internet of Things </CardTitle>
                  <CardText>
                    IoT Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link
              to="/research/aerospace"
              onClick={() => {
                setInterval(() => {
                  window.location.reload();
                  window.localStorage.setItem(
                    "tagLine",
                    "Connecting the World, One Smart Device at a Time"
                  );
                  window.localStorage.setItem("image", aerospaceBanner);
                  window.localStorage.setItem(
                    "title",
                    "Welcome to Aerospace Engineering Research at UNC Charlotte"
                  );
                  window.localStorage.setItem(
                    "content",
                    "At UNC Charlotte, our Aerospace Engineering research drives innovation in aviation, space exploration, and advanced technology. We aim to address global challenges in aerospace design, propulsion systems, and sustainable flight, shaping the future of the aerospace industry.\nOur research encompasses a wide range of topics, including aerodynamic optimization, spacecraft technology, unmanned aerial systems, and eco-friendly propulsion methods. From designing next-generation aircraft to developing satellite systems and exploring interplanetary missions, our work is at the forefront of cutting-edge aerospace advancements.\nEquipped with state-of-the-art wind tunnels, simulation labs, and collaboration with leading industries, our researchers have the tools and partnerships needed to make groundbreaking discoveries. High-potential projects receive institutional support, enabling transformative research that pushes the boundaries of what’s possible in aerospace engineering.\nWhether you’re a student inspired to shape the future of flight or a collaborator seeking impactful innovation, UNC Charlotte’s Aerospace Engineering research community offers endless opportunities. Join us in advancing the frontiers of aerospace technology and exploration.\nExplore Aerospace Engineering at UNC Charlotte—where innovation takes flight."
                  );
                }, 100);
              }}
              style={{ textDecoration: "none" }}
            >
              <Card>
                <div className="zoom">
                  {" "}
                  <h3 className="slide">Aerospace</h3>
                  <CardImg
                    className="image"
                    src={aerospace}
                    alt="aerospace"
                    top
                  />
                </div>
                <CardBody>
                  <CardTitle tag={"h5"}>Aerospace </CardTitle>
                  <CardText>
                    Aerospace Engineering Research at UNC Charlotte...
                    <small className="text-primary cursor-pointer">
                      Read more
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>
          <Col md={12}>
            <h3 className="heading">
              Research at University of North Carolina, Charlotte
            </h3>
            <p className="fs-5">
              <br />
              At the University of North Carolina at Charlotte, research fuels
              our mission to address global challenges and drive innovation. As
              a premier urban research institution, we blend academic rigor with
              practical solutions, creating meaningful impact across diverse
              disciplines. Our faculty, students, and partners collaborate to
              pioneer advancements that shape industries, communities, and
              lives.
              <br />
              <br />
              Our research spans groundbreaking areas like artificial
              intelligence, renewable energy, advanced healthcare solutions, and
              urban development, alongside transformative work in education,
              social sciences, and the arts. With cutting-edge facilities and
              resources, we empower scholars to explore bold ideas and solve
              complex problems. UNC Charlotte is committed to fostering a
              culture of excellence and inclusivity, where diverse perspectives
              inspire breakthrough discoveries. Recognizing outstanding
              potential, we offer competitive funding and institutional support
              for select high-impact projects, enabling our researchers to turn
              ideas into reality. From undergraduate students to seasoned
              experts, our vibrant research community is united in the pursuit
              of knowledge and innovation.
              <br />
              <br />
              Join us at UNC Charlotte to explore a world of opportunities,
              connect with visionary thinkers, and witness how our research is
              shaping the future. Together, we’re redefining the boundaries of
              discovery and making a lasting impact on society. Welcome to UNC
              Charlotte—where research meets possibility.
              <br />
            </p>
          </Col>
          <Col md={12}>
            <p className="text-muted fs-5">
              Source:{" "}
              <code>
                {" "}
                <a href="https://www.charlotte.edu/research" target="blank">
                  UNCC Research News
                </a>
              </code>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
