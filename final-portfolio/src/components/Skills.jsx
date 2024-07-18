import {
  FaReact,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default function Skills({ skill }) {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    NodeJs: <FaNodeJs />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
}
