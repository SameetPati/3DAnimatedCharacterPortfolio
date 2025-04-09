import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: 1,
    name: "Nimbus - Cloud Automation",
    category: "Cloud Computing",
    tools: "Azure Functions, Kubernetes, Terraform, TypeScript",
    image: "../../public/images/placeholder.webp",
    description:
      "A cloud automation tool designed to streamline infrastructure provisioning and management. Nimbus simplifies deployment pipelines and ensures scalability with minimal manual intervention.",
  },
  {
    id: 2,
    name: "Virtual Art Gallery",
    category: "3D Visualization",
    tools: "Three.js, Blender, React, WebGL",
    image: "../../public/images/placeholder.webp",
    description:
      "An immersive 3D art gallery experience where users can explore virtual exhibitions. Built with Three.js and Blender, it offers a realistic and interactive environment for showcasing digital art.",
  },
  {
    id: 3,
    name: "ChatFlow - AI Assistant",
    category: "Artificial Intelligence",
    tools: "OpenAI GPT, Flask, React, TailwindCSS",
    image: "/images/placeholder.webp",
    description:
      "An AI-powered assistant capable of handling complex queries and providing contextual responses. ChatFlow integrates seamlessly with web applications for enhanced user interaction.",
  },
  {
    id: 4,
    name: "IoT Tracker",
    category: "Internet of Things",
    tools: "Raspberry Pi, MQTT, Node.js, MongoDB",
    image: "/images/placeholder.webp",
    description:
      "A real-time IoT tracking system for monitoring and managing connected devices. It provides analytics and insights to optimize device performance and ensure reliability.",
  },
  {
    id: 5,
    name: "EcoEnergy Dashboard",
    category: "Sustainable Energy",
    tools: "Python, Dash, Plotly, PostgreSQL",
    image: "/images/placeholder.webp",
    description:
      "A dashboard for visualizing and analyzing renewable energy data. EcoEnergy helps users track energy consumption and optimize resource allocation for sustainability.",
    link: "https://example.com/ecoenergy",
  },
  {
    id: 6,
    name: "GreenFuel Simulator",
    category: "Renewable Resources",
    tools: "MATLAB, Simulink, Python",
    image: "/images/placeholder.webp",
    description:
      "A simulation tool for optimizing biofuel production processes. GreenFuel leverages advanced algorithms to enhance efficiency and reduce environmental impact.",
    link: "https://example.com/greenfuel",
  },
  {
    id: 7,
    name: "Startup Mentor",
    category: "Business Development",
    tools: "Leadership Training, Ecosystem Analysis, Mentorship",
    image: "/images/placeholder.webp",
    description:
      "A program designed to support budding entrepreneurs by providing mentorship and resources. Startup Mentor fosters innovation and helps startups thrive in competitive markets.",
  },
  {
    id: 8,
    name: "AutoCAD Enhancer",
    category: "Mechanical Design",
    tools: "AutoCAD, SolidWorks, Finite Element Analysis",
    image: "/images/placeholder.webp",
    description:
      "A suite of tools to enhance mechanical design workflows. AutoCAD Enhancer integrates advanced simulation and analysis features for precision engineering.",
  },
  {
    id: 9,
    name: "MedTech Innovations",
    category: "Healthcare Technology",
    tools: "AI Diagnostics, Robotics, Medical Imaging",
    image: "/images/placeholder.webp",
    description:
      "A platform for advancing medical technology through AI and robotics. MedTech Innovations focuses on improving diagnostic accuracy and surgical precision.",
    link: "https://example.com/medtech",
  },
  {
    id: 10,
    name: "FireShield",
    category: "Safety Engineering",
    tools: "Fire Simulation, Risk Analysis, AI Modeling",
    image: "/images/placeholder.webp",
    description:
      "An AI-driven fire safety system that predicts and mitigates risks. FireShield provides real-time monitoring and advanced hazard analysis for industrial safety.",
  },
  {
    id: 11,
    name: "MaterialX",
    category: "Material Science",
    tools: "Machine Learning, X-Ray Analysis, Alloy Design",
    image: "/images/placeholder.webp",
    description:
      "A material science platform that uses machine learning to optimize alloy properties. MaterialX accelerates research and development in advanced materials.",
    link: "https://example.com/materialx",
  }
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 300,
      delay: 0.9,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                <h3>{project.id < 10 ? `0${project.id}` : project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
                <h4>Project Overview</h4>
                <p>{project.description}</p>
                <WorkImage image={project.image} alt={project.name} link={project.link}/>
                {/* <WorkImage image={project.image} alt={project.name} link={project.link} /> */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
