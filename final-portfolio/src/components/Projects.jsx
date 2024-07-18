import ProjectBox from "./ProjectBox";
import Portfolio from "../images/portfolio.png";
import CocktailBar from "../images/cocktailBar.png";
import ReactApp from "../images/ReactApp.png";
import MERN from "../images/MERN.png";
import NodeApp from "../images/Node-App.png";

export default function Projects() {
  return (
    <div>
      <h1 className="projectHeading">
        <b>My Project</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={CocktailBar} projectName="CocktailBar" />
        <ProjectBox projectPhoto={ReactApp} projectName="ReactApp" />
        <ProjectBox projectPhoto={NodeApp} projectName="NodeApp" />
        <ProjectBox projectPhoto={MERN} projectName="MERN" />
      </div>
    </div>
  );
}
