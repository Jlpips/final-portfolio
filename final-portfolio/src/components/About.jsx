import Skills from "./Skills";

export default function About() {
  return (
    <div>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">About Me</h1>
          <p className="">
            Hi! My name is <b>John Lois C. Glifonea</b>, but you can call me{" "}
            <b>Pipoy</b>. I'm a <b>Full Stack Developer</b>. I attended a
            bootcamp at Uplift Bootcamp. I love creating projects; you can check
            out some of my work in the projects section.
            <br />
            <br /> I am <b>passionate</b> about <b>web development</b> I am open
            to new collaborations or work where I can contribute and grow. Feel
            free to contact with me, links are in the home and footer section.
            <br />
            Apart from coding I love playing games, watching movies and playing
            some sports in my spare time.
          </p>
        </div>
        <div></div>
      </div>
      <h1 className="SkillsHeading">Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="NodeJs" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
      </div>
    </div>
  );
}
