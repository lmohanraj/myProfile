import {
  htmlIcon,
  cssIcon,
  reactIcon,
  jsIcon,
  bootstrap,
  nodejs,
  mongodb,
  sportIcon,
  travelIcon,
  musicIcon,
} from ".";
import classes from "./About.module.css";

function Section1() {
  return (
    <>
      <div>
        <header>
          <h4>ME?</h4> <div className={classes.h6}></div>
        </header>
        <h2>LET'S GET TO KNOW ME</h2>
        <h2 className={classes.title}>Web Developer</h2>
        <p className={classes.para}>
          A sports enthusiast and a web developer based in Karur, India
        </p>
      </div>
      <div className={classes.resumeDownload}>
        <h2 className={classes.checkTitle}>CHECK MY RESUME </h2>
        <h2 className={classes.arrow}>{`>`}</h2>
        <h3 className={classes.download}> CLICK HERE TO DOWNLOAD</h3>
      </div>
    </>
  );
}

function Skills(props) {
  return (
    <div className={classes.allSkills}>
      {props.skills.map((skill) => {
        return (
          <section className={classes.skill}>
            <img
              className={classes.skillsIcon}
              src={skill.src}
              alt={skill.name}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              {skill.name}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Education(props) {
  return (
    <section className={classes.sclDetails}>
      {props.details.map((detail) => {
        return (
          <div className={classes.schoolDetail}>
            <h3>{detail.grade}</h3>
            <div className={classes.h1}></div>
            <div>Score : {detail.score}</div>
            <div>INSTITUTION : {detail.name}</div>
            <div>
              PLACE : {detail.city}, {detail.state}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function Interests(props) {
  return (
    <div className={classes.allInterests}>
      {props.interests.map((interest) => {
        return (
          <section className={classes.interest}>
            <img
              className={classes.interestIcon}
              src={interest.src}
              alt={interest.name}
            />
            <div
              style={{
                textAlign: "center",
              }}
            >
              {interest.name}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default function About() {
  const details = [
    {
      grade:
        "Bachelor of Engineering (Electronics & Communication Engineering)",
      stream: "",
      score: "78.40%",
      name: "V.S.B Engineering College",
      city: "Karur",
      state: "Tamil Nadu",
    },
    {
      grade: "XII Standard",
      stream: "",
      score: "63.58%",
      name: "NLC Boys' Higher Secondary School",
      city: "Neyveli",
      state: "Tamil Nadu",
    },
    {
      grade: "X Standard",
      stream: "",
      score: "96.20%",
      name: "TNPL Matriculation Higher Secondary School",
      city: "Karur",
      state: "Tamil Nadu",
    },
  ];

  const skills = [
    {
      name: "HTML 5",
      src: htmlIcon,
    },

    {
      name: "CSS 3",
      src: cssIcon,
    },
    {
      name: "Javascript",
      src: jsIcon,
    },
    {
      name: "Bootstrap 5",
      src: bootstrap,
    },
    {
      name: "React JS",
      src: reactIcon,
    },
    {
      name: "Node JS",
      src: nodejs,
    },
    {
      name: "Mongo DB",
      src: mongodb,
    },
  ];

  const interests = [
    {
      name: "Sport",
      src: sportIcon,
    },
    {
      name: "Travel",
      src: travelIcon,
    },
    {
      name: "Music",
      src: musicIcon,
    },
  ];
  return (
    <div className={classes.educationDetails}>
      <Section1></Section1>
      <h2 className={classes.title}>Education</h2>
      <Education details={details}></Education>
      <h2 className={classes.title}>Technical Skills</h2>
      <Skills skills={skills}></Skills>
      <h2 className={classes.title}>Work Experience</h2>
      <div className={classes.workDetail}>
        <section className={classes.workExp}>
          <h4 className={classes.company}>Tata Consultancy Services</h4>
          <div className={classes.titleDuration}>
            <h4 className={classes.jobTitle}>Assistant System Engineer</h4>
            <span className={classes.duration}>(Jan, 2020 - Jul, 2021)</span>
          </div>
          <ul>
            <li> Manual Testing of applications</li>
            <li> Experience working in an Agile team</li>
            <li> Responsible for performing regression and functional tests</li>
          </ul>
          <span className={classes.dotGreen}></span>
        </section>
        <section className={classes.workExp}>
          <h4 className={classes.company}>Triofi Technologies Pvt Ltd</h4>
          <div className={classes.titleDuration}>
            <h4 className={classes.jobTitle}>Front End Developer - Intern</h4>
            <span className={classes.duration}>(Nov, 2021 - Feb, 2022)</span>
          </div>
          <ul>
            <li>
              Developing responsive web applications using HTML 5, CSS 3, React,
              Redux and bootstrap techniques
            </li>
            <li> Working with VS Code, Git and GitLab</li>
            <li>
              Understanding the client requirements and implementing it and
              adding features
            </li>
          </ul>
          <span className={classes.dotGreen}></span>
        </section>
      </div>
      <h2 className={classes.title}>Other Interests</h2>
      <Interests interests={interests}></Interests>
    </div>
  );
}
