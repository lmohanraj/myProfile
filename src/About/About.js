import {
  htmlIcon,
  cssIcon,
  reactIcon,
  jsIcon,
  bootstrap,
  nodejs,
  mongodb,
} from ".";
import classes from "./About.module.css";

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
  return (
    <div className={classes.educationDetails}>
      <div>
        <header>
          <h4>ME?</h4> <h6></h6>
        </header>
        <h2>LET'S GET TO KNOW ME</h2>
        <h2 className={classes.title}>Web Developer</h2>
        <p className={classes.para}>
          A sports enthusiast and a web developer based in Karur, India
        </p>
      </div>
      <h2 className={classes.title}>Skills</h2>
      <div className={classes.allSkills}>
        {skills.map((skill) => {
          return (
            <section className={classes.skill}>
              <img
                className={classes.skillsIcon}
                src={skill.src}
                alt={skill.name}
              />
              <div style={{ textAlign: "center" }}>{skill.name}</div>
            </section>
          );
        })}
      </div>
      <h2 className={classes.title}>Education</h2>
      <section className={classes.sclDetails}>
        {details.map((detail) => {
          return (
            <div className={classes.schoolDetail}>
              <h3>{detail.grade}</h3>
              <h1></h1>
              <div>SCORE : {detail.score}</div>
              <div>INSTITUTION : {detail.name}</div>
              <div>
                PLACE : {detail.city}, {detail.state}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
