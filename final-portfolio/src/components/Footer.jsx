import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  return (
    <footer>
      <h4>Copyright &copy; {new Date().getFullYear()}</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/Jlpips"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/john-lois-glifonea-b898a5164/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="http://t.me/jlpips" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a
          href="mailto:cit.extension@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
}
