import { FaGitlab } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export default function ProjectBox({ projectPhoto, projectName }) {
  const desc = {
    PortfolioProject: "This website is my 1st project using Pure HTML and CSS",
    PortfolioGitlab:
      "https://github.com/Jlpips/firstPortfolio/tree/main/p1-web-dev-portfolio",
    PortfolioWebsite: "https://johnloisglifonea.netlify.app/",

    CocktailBarProject: "This website fetching Api using Vanilla Javascript",
    CocktailBarGitlab: "https://github.com/Jlpips/JsApiApp",
    CocktailBarWebsite: "https://cocktailbar-project.netlify.app/",

    ReactAppProject:
      "This app created using Javascript, React and React Router",
    ReactAppGitlab: "https://github.com/Jlpips/ReactQuizApp",
    ReactAppWebsite: "https://react-quiz-app-project3.netlify.app/",

    NodeAppProject:
      "This Simple Node app created using MongoDB, Express, React and NodeJs",
    NodeAppGitlab: "https://github.com/Jlpips/p4-node-app",
    NodeAppWebsite: "https://p4-node-app-rho.vercel.app/",

    MERNProject:
      "This app created using MongoDB, Express, React and NodeJs(MERN)",
    MERNGitlab: "https://github.com/Jlpips/MERN-App-Align",
    MERNWebsite: "https://align-mern-app.vercel.app/",
  };
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project Display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Project"]}
        <br />

        <a
          href={desc[projectName + "Gitlab"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <FaGitlab />
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn">
            <CgFileDocument />
          </button>
        </a>
      </div>
    </div>
  );
}
