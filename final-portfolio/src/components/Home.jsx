import Typewriter from "typewriter-effect";
import { FaFileDownload } from "react-icons/fa";
import Avatar from "../images/Avatar.png";
import { Link } from "react-router-dom";
import { CgPhone } from "react-icons/cg";

export default function Home() {
  return (
    <div className="HomePage">
      <div className="HomeText">
        <h1 className="">Hello there!</h1>
        <h1>
          I'm <b>JOHN LOIS GLIFONEA</b>
        </h1>
        <div>
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "Frontend Developer",
                "Backend Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 20,
            }}
          />
        </div>
        <div>
          <a href="Resume.pdf" download>
            <button>
              Resume
              <FaFileDownload />
            </button>
          </a>
          <Link to="/contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={Avatar} alt="Avatar Pic" />
      </div>
    </div>
  );
}
